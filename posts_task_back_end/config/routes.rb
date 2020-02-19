Rails.application.routes.draw do
  resources :posts do
    member do
      post :add_tags
    end
    resources :comments, only: [:create]
  end
  resources :users, only: [:new, :create]
  resources :tags, only: [:index]
  post :authenticate, to: "authentications#authenticate"
end
