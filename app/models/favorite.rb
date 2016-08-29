class Favorite < ApplicationRecord
  validates :link, presence: true
  validates :source, presence: true
  validates :title, presence: true
  validates :description, presence: true
end
