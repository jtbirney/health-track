class Api::V1::UsersController < Api::ApiController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    user = User.new(user_params)
    if user.save
      log_in user
      render json: user, status: :created
    else
      errors = {}
      user.errors.each do |key, value|
        capital_key = key.to_s.capitalize.gsub('_', ' ')
        errors[key] = "#{capital_key} #{value}"
      end
      render json: { error: errors }
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
