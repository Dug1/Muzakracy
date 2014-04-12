class PlaylistController < ApplicationController
    def index
    end

    def new
    end

    def create 
    end

    def show
        @playlist = Playlists.find(@params[:id])
    end

    def update
    end

    def destroy
    end

end
