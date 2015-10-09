class Vote < ActiveRecord::Base
  belongs_to :picture
  has_one :user, through: :picture
  has_one :poll, through: :picture
  # belongs_to :user through: :picture
end
