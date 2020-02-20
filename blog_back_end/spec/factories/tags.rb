FactoryBot.define do
  factory :tag do
    name { "#{Faker::Name.unique.name}_tag" }
  end
end
