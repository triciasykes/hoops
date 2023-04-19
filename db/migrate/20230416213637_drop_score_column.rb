class DropScoreColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :players, :score
  end
end
