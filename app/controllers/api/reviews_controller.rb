class Api::ReviewsController < ApplicationController
  before_action :set_song
  before_action :set_review, only: [:show, :update, :destroy]

  def index
    render json: @song.reviews
  end

  def show
    render json: @review
  end

  def create
    @review = @song.reviews.new(review_params)
    if @review.save
      render json: @review
    else
      render json: { errors: @review.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: { errors: @review.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @review.destroy 
    render json: { message: 'Review deleted' }
  end

  private 
    def set_song
      @song = Song.find(params[:song_id])
    end

    def review_params
      params.require(:review).permit(:name, :body, :rating)
    end

    def set_review
      @review = @song.reviews.find(params[:id])
    end
end
