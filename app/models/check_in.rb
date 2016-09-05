# == Schema Information
#
# Table name: check_ins
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  drink_id    :integer
#  drink_name  :string           not null
#  rating      :integer
#  review      :text
#  location_id :integer
#  location    :string           not null
#  smiles      :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  username    :string           not null
#

class CheckIn < ActiveRecord::Base
  validates :user_id, :drink_name, presence: true

  belongs_to :user

  has_one :drink

  # has_one :location
end
