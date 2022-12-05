class Artist < ApplicationRecord
  belongs_to :playlist
  validates :name, :genre, presence: true
end
