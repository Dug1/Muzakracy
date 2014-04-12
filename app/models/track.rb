class Track < ActiveRecord::Base
  belongs_to :playlist
  validates :song_id, presence:true
  validates :votes, numericality:true, presence:true 
end
