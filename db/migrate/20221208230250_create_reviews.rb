class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :name
      t.text :body
      t.integer :rating
      t.belongs_to :song, null: false, foreign_key: true

      t.timestamps
    end
  end
end
