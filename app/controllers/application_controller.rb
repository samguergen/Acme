class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

    def index
      render layout: "application"
    end

    def create
      puts "inside create method, params are "
      puts params
      @new_order = Order.create(params)
      if @new_order
        render :text => "orders saved to db"
      else
        render :text => "there was an error saving your records to the db"
      end
    end

end
