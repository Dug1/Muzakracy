class Playlist < ActiveRecord::Base
    has_many :tracks
    validates :user_id, presence:true
    validates :name, presence:true
end
