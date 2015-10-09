class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|

      t.integer :picture_1_votes, default: 0
      t.integer :picture_1_id

      t.integer :picture_2_votes, default: 0
      t.integer :picture_2_id

      t.integer :user_id

      t.timestamps null: false
    end
  end
end
