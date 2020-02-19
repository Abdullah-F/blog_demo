class CommentsController < ApplicationController

  # POST /posts/:post_id/comments
  def create
    comment = Comment.new(comment_params)

    if comment.save
      render json: comment.decorate.to_json, status: :created
    else
      render json: comment.errors, status: :unprocessable_entity
    end
  end

  private

  # Only allow a trusted parameter "white list" through.
  def comment_params
    params.require(:comment).permit(:post_id, :body, :user_id)
  end
end
