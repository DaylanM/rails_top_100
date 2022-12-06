class Api::ArtistsController < ApplicationController
  before_action :set_playlist
  before_action :set_artist, only: [:show, :update, :destroy]


  def index
    render json: @playlist.artists
  end

  def show
    render json: @artist
  end

  def create
    @artist = @playlist.artists.new(artist_params)
    if @artist.save
      render json: @artist
    else
      render json: { errors: @artist.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @artist.update(artist_params)
      render json: @artist
    else
      render json: { errors: @artist.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @artist.destroy
    render json: { message: 'artist deleted' }
  end

  private
    def artist_params
      params.require(:artist).permit(:name, :genre)
    end

    def set_playlist
      @playlist = Playlist.find(params[:playlist_id])
    end

    def set_artist
      @artist = @playlist.artists.find(params[:id])
    end
end
