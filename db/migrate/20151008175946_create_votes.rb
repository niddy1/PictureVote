class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :picture_id
      t.integer :user_id
      t.integer :poll_id
      t.boolean :vote_choice

      t.timestamps null: false
    end
  end
end
