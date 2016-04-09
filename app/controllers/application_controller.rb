class ApplicationController < ActionController::Base

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

end
