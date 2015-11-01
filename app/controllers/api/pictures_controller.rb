class Api::PicturesController < ApplicationController

  # api_pictures GET    /api/pictures(.:format)     api/pictures#index
  def index
    user = User.find_by({ token: env['HTTP_TOKEN'] })
    @pictures = Picture.all
    render json: user.pictures

  end

  # def new
  #   @picture = Picture.new
  # end

  #              POST   /api/pictures(.:format)     api/pictures#create
  def create

    user = User.find_by({ token: env['HTTP_TOKEN'] })

    picture = user.pictures.create(picture_params)
    # @picture = user.pictures.create(picture_params)
    render json: picture
  end

  #  api_picture GET    /api/pictures/:id(.:format) api/pictures#show
  def show
    user = User.find_by({ token: env['HTTP_TOKEN'] })
    render json: user.pictures.find(params[:id])
  end

  #              PATCH  /api/pictures/:id(.:format) api/pictures#update
  #              PUT    /api/pictures/:id(.:format) api/pictures#update
  def update
    user = User.find_by({ token: env['HTTP_TOKEN'] })
    picture = user.pictures.find(params[:id])
    picture.update(picture_params)
    render json: picture
  end

  #              DELETE /api/pictures/:id(.:format) api/pictures#destroy
  def destroy
    user = User.find_by({ token: env['HTTP_TOKEN'] })
    user.pictures.destroy(params[:id])
    render json: {status: 202, message: 'bye picture bye'}
  end

  private

  def picture_params
    params.require(:picture).permit(:url, :image)
  end
end
