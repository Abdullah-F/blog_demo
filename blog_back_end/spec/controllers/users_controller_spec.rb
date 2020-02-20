require "rails_helper"

RSpec.describe UsersController, type: :controller do
  describe "POST /users" do
    let(:payload) { attributes_for(:user) }
    context "when every thing is submited the right way" do
      it "it creates a user successfully" do
        post :create, { :params => { :user => payload }, :format => :json }
        expect(response).to have_http_status(:created)
      end
    end

    context "when password and password confirmation are different" do
      it "it dones not create the user and returns unprocessable entity status" do
        post :create, { :params => { :user => payload.merge({ password: "different" }) }, :format => :json }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    context "when avatar is not present" do
      it "it results in an internal server error" do
        expect {
          post :create, { :params => { :user => payload.merge({ avatar: nil }) }, :format => :json }
        }.to raise_error(ActiveSupport::MessageVerifier::InvalidSignature)
      end
    end
  end
end
