# == Schema Information
#
# Table name: friendships
#
#  id              :integer          not null, primary key
#  friendable_id   :integer
#  friendable_type :string
#  friend_id       :integer
#  created_at      :datetime
#  updated_at      :datetime
#  blocker_id      :integer
#  status          :integer
#

class Friendship < ActiveRecord::Base
  
end
