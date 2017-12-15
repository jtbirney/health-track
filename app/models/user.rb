class User < ApplicationRecord
  before_save { self.email = email.downcase }

  validates_presence_of :name
  validates :email, presence: true, uniqueness: true
  validates_presence_of :password
  validates_presence_of :password_confirmation

  has_secure_password
  has_many :weights
end
