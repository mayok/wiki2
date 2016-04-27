module Api
  class CategoriesController < ApplicationController
    def create
      cat = Category.new(cat_params)
      if cat.save
        #TODO: Use Serializer or jbuilder
        render json: cat
      else
      end
    end

    def index
      Category.all
    end

    def show
      Category.find(params[:id])
    end

    private
      def cat_params
        params.require(:category).permit(:name)
      end
  end
end
