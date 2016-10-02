# == Schema Information
#
# Table name: drinks
#
#  id          :integer          not null, primary key
#  brew_style  :string           not null
#  name        :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Drink < ActiveRecord::Base
  validates :brew_style, :name, :description, presence: true
  validates :name, uniqueness: true

  has_many :checkIns,
    primary_key: :id,
    foreign_key: :drink_id,
    class_name: :CheckIn
end
