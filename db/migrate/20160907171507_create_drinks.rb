class CreateDrinks < ActiveRecord::Migration
  def change
    create_table :drinks do |t|
      t.string :brew_style, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.integer :check_in_id
      t.timestamps null: false
    end
  end
end
