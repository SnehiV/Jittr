class Api::DrinksController < ApplicationController

  def create
    @drink = Drink.new(drink_params)

    if @drink.save
      render :show
    else
      render json: @drink.errors.full_messages, status: 422
    end
  end

  def destroy
    @drink = Drink.find(drink_params[:id])
    @drink.destroy
    render json: 'deleted'
  end

  def index
    @drinks = Drink.all
    render :index
  end

  def show
    if drink_params[:name]
      @drink = Drink.find_by(drink_params[:name])
    else
      @drink = Drink.find(drink_params[:id])
    end

    if @drink
      render :show
    else
      render json: 'Not found', status: 404
    end
  end

  private

  def drink_params
    params.require(:drink).permit(:id, :name, :brew_style, :description)
  end
end
