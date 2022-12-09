class Song < ApplicationRecord
  belongs_to :artist
  has_many :reviews, dependent: :destroy
  validates :name, presence: true
end
