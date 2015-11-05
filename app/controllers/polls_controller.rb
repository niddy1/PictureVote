class PollsController < ApplicationController
  include SessionsHelper

#a random poll for voting is shown, user CANNOT vote on own poll
  def index
    authenticate!
    @user = current_user
    # @polls = Poll.all.sample(1)
    @polls = Poll.where.not(user_id: @user.id).sample(1)
    @pictures = Picture.all
  end

def edit
  #
  poll = Poll.find(params[:poll])

    # byebug
  if params[:pollchoice].split(',')[0] == poll.picture_1_id.to_s
    poll.picture_1_votes+=1
    poll.save()


  elsif params[:pollchoice].split(',')[0] == poll.picture_2_id.to_s
    poll.picture_2_votes+=1
    poll.save()
  end

  redirect_to '/polls'
end


  def create
    # byebug
    # Poll.create(poll_params)
   # TRY THIS *****poll = Poll.create({picture_1_id: params[:poll][0], picture_2_id: params[:poll][1], user_id: params[:poll]})
     poll = Poll.create({picture_1_id: params[:poll][0], picture_2_id: params[:poll][1], user_id: params[:user]['id']})
    #poll = Poll.create({picture_1_id: params[:poll][0], picture_2_id: params[:poll][1], user_id: params[:pollss][0]})
    # render json: poll

    redirect_to '/users/profile'
  end

  # private
  #
  # def poll_params
  #   params.require(:poll).permit(:user_id, :picture_1_id, :picture_2_id)
  # end

end
