# == Schema Information
#
# Table name: locations
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  address    :string           not null
#  lat        :decimal(, )
#  lng        :decimal(, )
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ActiveRecord::Base
  validates :name, :address, presence: true
  validates :address, uniqueness: true

  has_many :checkIns,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :CheckIn
end
