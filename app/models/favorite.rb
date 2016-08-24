class Favorite < ApplicationRecord
  validates :link, presence: true
  validates :source, presence: true
end
