class TrackController < ApplicationController
    def create
        respond_to do |format|
            @track = Playlists.find(@params[:id]).tracks.build(song_id:@params[:song])
            if @track.save
                format.js{}
                format.html{redirect_to :back}
            else
                format.js{render :none}
                format.html{redirect_to :back}
            end
        end
    end

    def vote
        respond_to do |format|
            format.js{}
            format.html{redirect_to :back}
        end
    end

    def destroy
        respond_to do |format|
            format.js{}
            format.html{redirect_to :back}
        end
    end
end
