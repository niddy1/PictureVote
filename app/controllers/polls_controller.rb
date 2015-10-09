class PollsController < ApplicationController
  def create

    # Poll.create(poll_params)

    poll = Poll.create({picture_1_id: params[:poll][0], picture_2_id: params[:poll][1], user_id: params[:pollss][0]})
    render json: poll
    # redirect_to log_in_path
  end

  # private
  #
  # def poll_params
  #   params.require(:poll).permit(:user_id, :picture_1_id, :picture_2_id)
  # end

end
