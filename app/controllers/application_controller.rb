class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

    def index
      # @orders = Orders.all
      render layout: "application"
    end

    def create
      puts request.post?
      # new_order = Orders.create(favorite_properties_params)
      # redirect_to "/properties/#{property.z_id}"
    end

end
