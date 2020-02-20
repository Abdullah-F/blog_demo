include ActionDispatch::TestProcess
FactoryBot.define do
  factory :user, aliases: [:author, :commenter] do
    name { Faker::Name.unique.name }
    email { Faker::Internet.email }
    password { Faker::Name.name }
    password_confirmation { password }
    avatar { fixture_file_upload(Rails.root.join("spec/support/assets/active_storage/images/avatar.jpeg").as_json, "image/jpeg") }
  end
end
