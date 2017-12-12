class Api::V1::SessionsController < Api::ApiController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    if logged_in?
      render json: User.find(current_user.id)
    else
      render json: { user: nil }
    end
  end

  def create
    user = User.find_by(name: login_params[:name])
    if user && user.authenticate(login_params[:password])
      log_in user
      render json: user, status: :created
    elsif user
      render json: { error: { password: "Password is invalid. Please try again." } }
    else
      render json: { error: { username: "Username does not exist. Please sign up first" } }
    end
  end

  def destroy
    if User.find(params[:id]) == current_user
      log_out
      render json: { message: "Logged Out"}
    end
  end

  private
  def login_params
    params.require(:user).permit(:name, :password)
  end
end
