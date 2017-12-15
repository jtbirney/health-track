class Weight < ApplicationRecord
  validates_presence_of :date
  validates_presence_of :weight

  belongs_to :user
end
