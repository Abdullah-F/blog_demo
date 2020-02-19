class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts.decorate.to_json
  end

  # GET /posts/1
  def show
    render json: @post.decorate.to_json
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post.decorate.to_json, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post.decorate.to_json
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy if current_user.id == @post.author.id # this check could be moved to a call back in the model
  end

  def add_tags # this action code can be moved and exchanged with a single method call line of code
    tags = params[:tags]
    post = Post.find(params[:id].to_i)
    post.tags = [] # not the best option could be optimized and done better without doing it like this
    post.tags << Tag.where(id: tags)
    render json: post.decorate.to_json
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def post_params
    params.require(:post).permit(:title, :body, :user_id)
  end
end
