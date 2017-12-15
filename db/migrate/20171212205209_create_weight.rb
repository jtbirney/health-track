class CreateWeight < ActiveRecord::Migration[5.1]
  def change
    create_table :weights do |t|
      t.date :date, null: false
      t.integer :weight, null: false
      t.belongs_to :user

      t.timestamps
    end
  end
end
