class ChangeLocationToLocationNameInCheckIn < ActiveRecord::Migration
  def change
    rename_column :check_ins, :location, :location_name
  end
end
