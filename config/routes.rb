Rails.application.routes.draw do

  namespace :api do
    resources :playlists do
      resources :artists
    end
  end

  resources :artists, except: [:index, :show, :create, :update, :destroy] do
    resources :songs
  end

  
end
