#
# Fields
#
# title        :string
# description  :text
# link         :string

class Article < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :link, presence: true
end
