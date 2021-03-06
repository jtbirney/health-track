Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :sessions, only: [:index, :create, :destroy]
      resources :weights, only: [:index, :create]
    end
  end
end
