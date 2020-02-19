FactoryBot.define do
  factory :comment do
    body { "MyString" }
    user_id { 1 }
    post_id { 1 }
  end
end
