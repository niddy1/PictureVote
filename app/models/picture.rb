class Picture < ActiveRecord::Base
  # mount_uploader :image, ImageUploader
  belongs_to :user
  has_many :polls
  has_many :votes
end
