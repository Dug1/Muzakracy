class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :song_id
      t.references :playlist, index: true

      t.timestamps
    end
  end
end
