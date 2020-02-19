class PostDecorator < ApplicationDecorator
  delegate_all

  def to_json
    {
      comments: object.comments.decorate.to_json,
      author: object.author,
      tags: object.tags,
    }.merge(object.as_json)
  end
end
