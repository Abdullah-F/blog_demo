class AuthenticationsController < ApplicationController
  skip_before_action :authenticate_request

  def authenticate
    expires_at = 1.hour.from_now
    expires_in_seconds = expires_at - Time.now
    command = AuthenticateUser.call(params[:email], params[:password], expires_at)

    if command.success?
      render json: command.user.decorate.to_authenticated({ JWTtoken: command.result, expires_in: expires_in_seconds })
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end
end
