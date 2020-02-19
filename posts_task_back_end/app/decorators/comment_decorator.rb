class CommentDecorator < ApplicationDecorator
  delegate_all

  def to_json
    {
      commenter: object.commenter.as_json,
    }.merge(object.as_json)
  end
end
