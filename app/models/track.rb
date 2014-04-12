class Track < ActiveRecord::Base
  belongs_to :playlist
  validates :song_id, uniqueness:true, presence:true
end
