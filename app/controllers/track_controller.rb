class TrackController < ApplicationController
    def create
        respond_to do |format|
            format.html do
                redirect_to :back 
            end
            format.js {}
        end
    end

    def vote
        respond_to do |format|
            format.html do
                redirect_to :back
            end
            format.js {}
        end
    end

    def destroy
        respond_to do |format|
            format.html do
                redirect_to :back 
            end
            format.js {}
        end
    end
end
