class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

    def index
      # @orders = Orders.all
      render layout: "application"
    end

    def create
      puts request.raw_post
      puts "inside create method"
      puts 'params are'
      puts params
      # new_order = Orders.create(favorite_properties_params)
      # redirect_to "/properties/#{property.z_id}"
    end

end
