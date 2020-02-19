class UserDecorator < ApplicationDecorator
  delegate_all

  def to_json
    {
      id: object.id,
      name: object.name,
      email: object.email,
      avatar_url: rails_blob_url(object.avatar),
    }
  end

  def to_authenticated(athentication_info)
    to_json.merge(athentication_info)
  end
end
