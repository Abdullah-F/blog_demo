class User < ApplicationRecord
  has_secure_password
  has_one_attached :avatar

  has_many :posts
  has_many :comments
end
