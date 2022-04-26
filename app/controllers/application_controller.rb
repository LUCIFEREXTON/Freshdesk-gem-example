class ApplicationController < ActionController::Base
	private

  def load_user_defaults
    if current_user.present?
      @email = current_user.email
      @user_details = {
        :gid => "12345",
        :name => current_user.email
      }
      @per_page = 10
      @tickets_per_request = 100
    end
  end
end
