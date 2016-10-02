class Api::LocationsController < ApplicationController
  def create
    @location = Location.new(location_params)

    if @location.save
      render :show
    else
      render json: @location.errors.full_messages, status: 422
    end
  end

  def index
    @locations= Location.all
    render :index
  end

  def show
    if location_params[:name]
      @location = Drink.find_by(location_params[:name])
    else
      @location = Drink.find(location_params[:id])
    end

    if @location
      render :show
    else
      render json: 'Not found', status: 404
    end
  end

  def delete
    @location = Location.find(location_params[:id])
    @location.destroy
    render json: 'deleted'
  end

  private

  def location_params
    params.require(:location).permit(:id, :name, :address, :lat, :lng)
  end
end
