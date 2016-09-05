require 'byebug'

class Api::FriendshipsController < ApplicationController


  def create
    @pending_friend = User.find(friendship_params["user_id"])
    current_user.friend_request(@pending_friend)

    render json: generate_friendships
  end

  def index
    render json: generate_friendships
  end

  def update
    requested_friend = User.find(friendship_params[:user_id])
    response = friendship_params[:request_response].to_i

    if response == 1 && current_user.requested_friends.includes(requested_friend)
      current_user.accept_request(requested_friend)

    elsif response == 0
      current_user.decline_request(requested_friend)

    end

    render json: generate_friendships
  end

  def destroy
    requested_friend = User.find(friendship_params[:user_id])
    current_user.remove_friend(requested_friend)

    render json: generate_friendships
  end

  private

  def friendship_params
    params.require(:friendship).permit(:user_id, :request_response)
  end

  def generate_friendships
    @friendships = {friends: current_user.friends,
      requested_friends: current_user.requested_friends,
      pending_friends: current_user.pending_friends}
  end
end
