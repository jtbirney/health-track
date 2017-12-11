Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
    end
  end
end
