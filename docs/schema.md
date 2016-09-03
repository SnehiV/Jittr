# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Table name: checkIn
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  username    :string           not null
#  drink_id    :integer          not null
#  drink_name  :string           not null
#  rating      :integer          not null
#  review      :text        
#  location_id :integer        
#  location    :string
#  smiles      :integer          default 
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

# Table name: comments
#
#  id          :integer          not null
#  user_id     :integer          not null
#  checkIn_id  :integer          not null
#  body        :text             not null

# Table name: loves
#
#  id          :integer          not null
#  user_id     :integer          not null
#  checkIn_id  :integer          not null

# Table name: friendings
# 'has_friendship' gem will create this table
<!-- #
#  id          :integer          not null, primary key
#  user_id     :integer           not null
#  friend_id   :integer           not null
 -->

# Table name: drinks
#
#  id              :integer          not null, primary key
#  brew_style      :string          
#  name            :string           not null
#  bean_origin     :string           
#  description     :text             
#  created_at      :datetime         not null
#  updated_at      :datetime         not null


# Table name: locations
#
#  id              :integer          not null, primary key
#  place           :string           not null
#  lat             :integer           
#  lng             :integer           
#  created_at      :datetime         not null
#  updated_at      :datetime         not null



# User associations
#
#     has_many checkIns
#
# there is a ruby gem 'has_friendship' that allows for requesting, accepting,
# rejecting, and blocking friends simply by apply the 'has_friendship' association to # the User model. Usage of the association is explained here:
# https://github.com/sungwoncho/has_friendship
#
#     has_friendship
#     has_many :comments
#     has_many :loves


# CheckIn Associations
#
#      belongs_to user
#      has_many :comments
#      has_many :loves
#
# Comments Associations
#
#      belongs_to :user
#      belongs_to :checkIn
#
# Loves Associations
#
#     belongs_to :user
#     belongs_to :checkIn
