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
      puts "inside create method"
      puts 'params are'
      puts params
      puts params[:listid]
    end

      private

  # def orders_params
  #   logger.info "orders_params entered..."
  #   params.require(:post).permit(:commandes)
  # end

end
