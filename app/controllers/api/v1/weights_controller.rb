class Api::V1::WeightsController < Api::ApiController
  protect_from_forgery unless: -> { request.format.json? }
  def index
    weights = current_user.weights
    weights_json = weights.map do |weight_object|
      weight = weight_object.weight
      date = weight_object.date
      date_numerical = date.to_time.to_i
      { date: date, date_numerical: date_numerical, weight: weight }
    end
    weights_json.sort_by! {|weight_object| weight_object[:date_numerical]}
    render json: weights_json
  end

  def create
    if current_user
      weight = Weight.new(weight_params)
      current_user.weights << weight
      if weight.save
        render json: weight
      else
        render json: { error: weight.errors }
      end
    else
      render json: { error: 'Please log in first.' }
    end
  end

  private
  def weight_params
    params.require(:weight).permit(:weight, :date)
  end
end
