class PlaylistController < ApplicationController
    def index 
        @playlists = Playlist.all 
    end

    def create 
        @playlist = Playlist.new(user_id:params[:user_id], name:params[:name])
        unless @playlist.save
            flash[:alert] = @playlist.errors.collect{|x, y| "#{y} #{x}".capitalize}
        end
        redirect_to root_url 
    end

    def show
        @playlist = Playlist.find(@params[:id])
        if @playlist.nil?
            redirect_to root_url 
        end
    end 

    def update
    end

    def destroy
    end

end
