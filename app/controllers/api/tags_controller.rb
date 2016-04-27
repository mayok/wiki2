module Api
  class TagsController < ApplicationController
    def create
      tag = Tags.new(tag_params)
      if tag.save
        render json: tag
      end
    end

    private
      def tag_params
        params.require(:tag).permit(:name)
      end
  end
end
