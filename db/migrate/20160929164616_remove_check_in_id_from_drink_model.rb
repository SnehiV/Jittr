class RemoveCheckInIdFromDrinkModel < ActiveRecord::Migration
  def change
    remove_column :drinks, :check_in_id, :integer
  end
end
