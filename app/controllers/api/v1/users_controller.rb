class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    user = User.new(user_params)
    if user.save
      # log_in user
      render json: user
    else
      render json: user.errors
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
