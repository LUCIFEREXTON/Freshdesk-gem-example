require 'freshdesk'

class ApplicationController < ActionController::Base

	Freshdesk::UserCredentials.email = 'something@enmail.com'

end
