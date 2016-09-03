class CreateCheckIns < ActiveRecord::Migration
  def change
    create_table :check_ins do |t|
      t.integer :user_id,  null: false
      t.integer :drink_id
      t.string  :drink_name, null: false
      t.integer :rating
      t.text    :review
      t.integer :location_id
      t.string  :location, null: false
      t.integer :smiles, default: 0
      t.timestamps null: false
    end
  end
end
