Rails.application.routes.draw do
  get 'session/new'

  get 'session/create'

  get 'session/failure'

  resources :favorites
  post 'home/add_favorite'
  post 'social/twitter_post'

  get 'home/index'

  get '/auth/twitter/callback', to: 'social#create'
  # get '/login', :to => 'sessions#new'
  # get '/auth/failure', :to => 'sessions#failure'

  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
