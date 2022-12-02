class Playlist < ApplicationRecord

  validates :name, :genre, presence: true
end
