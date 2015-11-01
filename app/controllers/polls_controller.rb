class PollsController < ApplicationController

  def index
    @polls = Poll.all
  end


  def create
    # Poll.create(poll_params)
   # TRY THIS *****poll = Poll.create({picture_1_id: params[:poll][0], picture_2_id: params[:poll][1], user_id: params[:poll]})
     poll = Poll.create({picture_1_id: params[:poll][0], picture_2_id: params[:poll][1], user_id: params[:user]['id']})
    #poll = Poll.create({picture_1_id: params[:poll][0], picture_2_id: params[:poll][1], user_id: params[:pollss][0]})
    # render json: poll
      byebug
    redirect_to '/users/profile'
  end

  # private
  #
  # def poll_params
  #   params.require(:poll).permit(:user_id, :picture_1_id, :picture_2_id)
  # end

end
