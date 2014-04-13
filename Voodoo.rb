require "sinatra"

get '/' do 
    send_file 'public/index.html'
end
get '/helper' do
    send_file 'public/helper.html'
end