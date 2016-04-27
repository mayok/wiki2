module Api
  class CategoriesController < ApplicationController
    def create
      cat = Category.new(cat_params)
      if cat.save
        render json: cat
      else
      end
    end

    def index
      cats = Category.all
      render json: cats
    end

    def show
      cat = Category.find(params[:id])
      render json: cat
    end

    private
      def cat_params
        params.require(:category).permit(:name)
      end
  end
end
