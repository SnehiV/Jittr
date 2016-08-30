class Api::UsersController < ApplicationController


  def create
    @user = User.new(user_params)

    if @user.save
      session[:session_token] = @user.session_token
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  def index
    @users = User.all
    render json: @users
  end

  def show

  end

  def destroy

  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
