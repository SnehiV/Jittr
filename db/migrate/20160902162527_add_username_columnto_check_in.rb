class AddUsernameColumntoCheckIn < ActiveRecord::Migration
  def change
    add_column :check_ins, :username, :string, null: false
  end
end
