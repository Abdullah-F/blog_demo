class DeletePostWorker
  include Sidekiq::Worker
  sidekiq_options retry: false

  def perform(post_id)
    Post.find(post_id).destroy
  end
end
