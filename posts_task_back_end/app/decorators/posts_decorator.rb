class PostsDecorator < ApplicationCollectionDecorator
  def to_json
    object.map { |p| p.decorate.to_json }
  end
end
