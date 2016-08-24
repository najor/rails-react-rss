class AddSourceToFavorite < ActiveRecord::Migration[5.0]
  def change
    add_column :favorites, :source, :string
  end
end
