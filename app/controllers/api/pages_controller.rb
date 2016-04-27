module Api
  class PagesController < ApplicationController
    def index
      Page.all
    end

    def show
      Page.find(params[:id])
    end
  end
end
