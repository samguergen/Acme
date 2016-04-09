class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

    def index
      # @orders = Orders.all
      render layout: "application"
      # respond_with Orders.all
    end

    def create
      # puts request.raw_post
      # puts "inside create method"
      # puts 'params are'
      # puts params
      # new_order = Orders.create(favorite_properties_params)
      # redirect_to "/properties/#{property.z_id}"
      # respond_with Orders.create(orders_params)
      new_order = params[:postid]
      puts new_order
    end

      private

  # def orders_params
  #   logger.info "orders_params entered..."
  #   params.require(:post).permit(:commandes)
  # end

end
