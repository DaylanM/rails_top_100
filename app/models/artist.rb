class Artist < ApplicationRecord
  belongs_to :playlist
  has_many :songs, dependent: :destroy
  validates :name, :genre, presence: true
end
