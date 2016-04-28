Rails.application.routes.draw do

  resources :phrases

  resource :phrases do
  	get :json, on: :member
  end
  root "phrases#index"

  get "new_phrase" => "phrases#new_phrase"

end


#ROUTES
#      Prefix Verb   URI Pattern                 Controller#Action
#     phrases GET    /phrases(.:format)          phrases#index
#             POST   /phrases(.:format)          phrases#create
#  new_phrase GET    /phrases/new(.:format)      phrases#new
# edit_phrase GET    /phrases/:id/edit(.:format) phrases#edit
#      phrase GET    /phrases/:id(.:format)      phrases#show
#             PATCH  /phrases/:id(.:format)      phrases#update
#             PUT    /phrases/:id(.:format)      phrases#update
#             DELETE /phrases/:id(.:format)      phrases#destroy