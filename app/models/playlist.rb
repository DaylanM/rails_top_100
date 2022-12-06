class Playlist < ApplicationRecord
  validates :name, :genre, presence: true
  has_many :artists, dependent: :destroy
end
