class Api::CheckInsController < ApplicationController

  def create
    @checkIn = CheckIn.new(check_in_params)

    if @checkIn.save
      @user = @checkIn.user
      render :show
    else
      render json: @checkIn.errors.full_messages, status: 422
    end

  end

  def index
    if check_in_params[:filter] == "friends"
      @checkIns = CheckIn.select('*').where('check_ins.user_id IN (
        SELECT friend_id
        FROM friendships
        WHERE friendships.status = 2 AND friendships.friendable_id = ?)
            OR check_ins.user_id = ?', current_user.id, current_user.id)

    elsif check_in_params[:filter] == "all"
      @checkIns = CheckIn.all
    elsif check_in_params[:filter] == "user"
      @checkIns = CheckIn.select('*').where('check_ins.user_id = ?', check_in_params[:id])
    else
      render json: "Unavailble", status: 404
    end

    render :index
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
      :rating, :review, :location_id, :location_name, :smiles, :username, :filter)
  end
end
