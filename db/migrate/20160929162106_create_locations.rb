class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.integer :lat
      t.integer :lng
      t.timestamps null: false
    end
  end
end
