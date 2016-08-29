class AddTitleAndDescriptionToFavorite < ActiveRecord::Migration[5.0]
  def change
    add_column :favorites, :title, :string
    add_column :favorites, :description, :text
  end
end
