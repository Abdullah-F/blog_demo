FactoryBot.define do
  factory :post do
    author
    title { Faker::Lorem.sentence(word_count: 3) }
    body { Faker::Lorem.paragraph }
  end
end
