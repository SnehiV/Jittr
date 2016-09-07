class Drink < ActiveRecord::Base
  validates :brew_style, :name, :description, presence: true
  validates :name, uniqueness: true

  has_and_belongs_to_many :check_ins
end
