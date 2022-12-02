class Api::PlaylistsController < ApplicationController
  before_action :set_playlist, only: [:show, :update, :destroy]
  
  def index
    render json: Playlist.all
  end

  def show
    @playlist = Playlist.find(params[:id])
  render json: @playlist
  end

  def create
    if @playlist.save
      render json: @playlist
    else
      render json: { errors: @playlist.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @playlist.update(playlist_params)
      render json: @playlist
    else
      render json: { errors: @playlist.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @playlist.destroy
    render json: { message: 'playlist deleted' }
  end

  private
    def playlist_params
      params.require(:playlist).permit(:name, :genre)
    end

    def set_playlist
      @playlist = Playlist.find(params[:id])
    end
end
