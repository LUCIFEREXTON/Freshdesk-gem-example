class CustomController<ApplicationController
	def blog_uri_list
    blog_uri = [
			"https://google.com",
			"https://facebook.com",
			"https://youtube.com",
			"https://twitter.com",
			"https://amazon.com",
			"https://blogvault.net"
		]

    render json: { :blog_uri_list => blog_uri }, status: :ok
  end
end
