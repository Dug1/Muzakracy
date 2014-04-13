class Track < ActiveRecord::Base
  has_one :playlist
  validates :song_id, presence:true
  validates :votes, numericality:true, presence:true 
end
