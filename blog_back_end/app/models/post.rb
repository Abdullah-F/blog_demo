class Post < ApplicationRecord
  after_create :destroy_post_after_24_hours

  belongs_to :author, class_name: "User", foreign_key: :user_id
  has_many :comments, dependent: :destroy
  has_and_belongs_to_many :tags

  validates :title, presence: true
  validates :body, presence: true
  validates :author, presence: true

  private

  def destroy_post_after_24_hours
    DeletePostWorker.perform_in(24.hours, self.id)
  end
end
