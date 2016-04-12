class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

    def index
      @orders = Order.all

      render layout: "application"
    end

    # def create
    #   puts 'commands are '
    #   puts params[:commandes]
    #   @new_order = Import.create({content: params[:commandes]})
    #   if @new_order
    #     render :text => "orders saved to db"
    #   else
    #     render :text => "there was an error saving your records to the db"
    #   end
    # end

    def create
      @order = Order.create({order_id: params[:commandes]['order_id'], name: params[:commandes]['name'], email: params[:commandes]['email'], birthday: params[:commandes]['birthday'], zipcode: params[:commandes]['zipcode'], state: params[:commandes]['state'], validity: params[:commandes]['valid']})
      puts 'single order is '
      puts @order
      if @order
        render :text => "orders was kinda saved"
      else
        render :text => "there was an error saving your order"
      end


    end

end
