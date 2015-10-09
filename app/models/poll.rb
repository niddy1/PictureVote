class Poll < ActiveRecord::Base

  has_many :votes, through: :picture
  # belongs_to :user
  has_one :user, through: :picture
  belongs_to :picture
end
