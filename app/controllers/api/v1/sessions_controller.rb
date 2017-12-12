class Api::V1::SessionsController < Api::ApiController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    user = User.find_by(name: login_params[:name])
    if user && user.authenticate(login_params[:password])
        log_in user
      render json: user, status: :created
    elsif user
        render json: { error: { password: "Invalid Password. Please try again." } }
    else
        render json: { error: { username: "Can't find that username. Please sign up first" } }
    end
  end

  def destroy
    log_out current_user
    render json: { message: "Logged Out"}
  end

  private
  def login_params
    params.require(:user).permit(:name, :password)
  end
end
