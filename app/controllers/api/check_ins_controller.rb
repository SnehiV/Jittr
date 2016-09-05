class Api::CheckInsController < ApplicationController

  def create
    @checkIn = CheckIn.new(check_in_params)

    if @checkIn.save
      render :show
    else
      render json: @checkIn.errors.full_messages, status: 422
    end

  end

  def index
    if logged_in?
      @checkIns = CheckIn.select('*').where('check_ins.user_id IN (
        SELECT friend_id
        FROM friendships
        WHERE friendships.status = 2 AND friendships.friendable_id = ?)
            OR check_ins.user_id = ?', current_user.id, current_user.id)

      render :index
    else
      render json: "Not logged in", status: 404
    end
  end


  def update
    @checkIn = current_user.checkIns.find(check_in_params[:id])

    if @checkIn.update(check_in_params)
      render :show
    else
      render json: 'Could not update', status: 422
    end

  end

  def destroy
    @checkIn = current_user.checkIns.find(check_in_params[:id])
    @checkIn.destroy
    render json: @checkIn
  end

  private

  def check_in_params
    params.require(:checkIn).permit(:id, :user_id, :drink_id, :drink_name,
      :rating, :review, :location_id, :location, :smiles, :username)
  end
end
