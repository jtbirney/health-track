class WeightSerializer < ActiveModel::Serializer
  attributes :date, :weight
  belongs_to :user
end
