class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

    def index
      @all_imports = Import.all
      render layout: "application"
    end

    def create
      puts 'commands are '
      puts params[:commandes]
      @new_order = Import.create({content: params[:commandes]})
      if @new_order
        render :text => "orders saved to db"
      else
        render :text => "there was an error saving your records to the db"
      end
    end

  # private
  #   # Using a private method to encapsulate the permissible parameters
  #   def orders_params
  #     params.require(:l).permit(:order_id, :name, :email, :validity, :zipcode, :state, :birthday)
  #   end

end
