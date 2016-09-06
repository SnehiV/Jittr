
class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      session[:session_token] = @user.reset_session_token!
      render json: @user
    else
      render json: ['Invalid credentials'], status: 422
    end
  end

  def destroy
    if logged_in?
      current_user.reset_session_token!
      session[:session_token] = nil
      render json: {}
    else
      render json: {status: 400, message: 'No current user'}
    end
  end

end
