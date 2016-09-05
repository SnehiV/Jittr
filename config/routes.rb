Rails.application.routes.draw do
  namespace :api, default: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show, :index]
    resources :check_ins, only: [:create, :index, :update, :destroy]
    resources :friendships, only: [:create, :index, :update, :destroy]

  end

  root to: 'static_pages#root'
end
