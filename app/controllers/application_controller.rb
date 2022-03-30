class ApplicationController < ActionController::Base
	def load_user_defaults
		if current_user.present?
			@email = current_user.email
		end
	end
end
