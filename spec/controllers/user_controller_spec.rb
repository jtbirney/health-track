require 'rails_helper'

RSpec.describe User, type: :controller do
  describe 'POST #create' do
    it 'creates a new user with valid params' do
      valid_params = {
        name: "User1",
        email: "uSeR@weBsite.com",
        password: "password",
        password_confirmation: "password",
        driver: true
      }

      post :create, params: { user: valid_params }
      expect(response.status).to eq 201
      expect(response.content_type).to eq "application/json"
      returned_json = JSON.parse(response.body)
      expect(returned_json["user"]["name"]).to eq valid_params[:name]
      expect(returned_json["user"]["email"]).to eq valid_params[:email].downcase
      expect(returned_json["user"]["driver"]).to eq valid_params[:driver]
    end

    it 'does not create a new user with non-matching passwords' do
      invalid_params = {
        name: "User2",
        email: "User2@website.com",
        password: "password1",
        password_confirmation: "password"
      }
      post :create, params: { user: invalid_params }
      returned_json = JSON.parse(response.body)
      expect(returned_json["message"]).to eq "Error creating account"
      expect(returned_json["errors"]["password_confirmation"]).to eq ["doesn't match Password"]
    end

    it 'does not create a user with an email that has already been created' do
      valid_params = {
        name: "User1",
        email: "user@website.com",
        password: "password",
        password_confirmation: "password",
        driver: true
      }

      post :create, params: { user: valid_params }
      returned_json = JSON.parse(response.body)
      expect(returned_json["message"]).to eq "Error creating account"
      expect(returned_json["errors"]["email"]).to eq ["has already been registered"]
    end
  end
end
