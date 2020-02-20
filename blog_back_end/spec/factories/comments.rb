FactoryBot.define do
  factory :comment do
    post
    commenter
    body { Faker::Lorem.paragraph }
  end
end
