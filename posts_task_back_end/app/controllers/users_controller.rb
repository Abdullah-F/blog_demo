class UsersController < ApplicationController
  skip_before_action :authenticate_request

  def new
    render json: User.new
  end

  def create
    puts user_params
    @user = User.new(user_params)

    if @user.save
      render json: @user.decorate.to_authenticated({ JWTtoken: JsonWebToken.encode(user_id: @user.id) }), status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :avatar)
  end
end
