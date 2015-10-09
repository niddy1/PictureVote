class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|
      t.text :picture_1
      t.text :picture_2
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
