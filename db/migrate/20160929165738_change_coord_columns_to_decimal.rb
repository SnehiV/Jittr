class ChangeCoordColumnsToDecimal < ActiveRecord::Migration
  def change
    change_column :locations, :lat, :decimal
    change_column :locations, :lng, :decimal
  end
end
