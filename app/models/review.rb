class Review < ApplicationRecord
  belongs_to :song
  validates :name, :body, :rating, presence: true
end
