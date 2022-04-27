Rails.application.routes.draw do
  get 'home/index'
  devise_for :users
	get 'api/v1/freshdesk/ticket/blog_uri_list', to: 'custom#blog_uri_list'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
	root to: "home#index"
end
