class AuthenticateUser
  prepend SimpleCommand
  attr_reader :user

  def initialize(email, password, exp = 24.hours.from_now)
    @exp = exp
    @email = email
    @password = password
  end

  def call
    JsonWebToken.encode({ user_id: user.id }, @exp) if authenticated?
  end

  private

  attr_accessor :email, :password

  def authenticated?
    @user = User.find_by_email(email)
    return user if user && user.authenticate(password)

    errors.add :user_authentication, "invalid credentials"
    nil
  end
end
