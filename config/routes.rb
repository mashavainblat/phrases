Rails.application.routes.draw do

  resources :phrases

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