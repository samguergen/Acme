class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :order_id
      t.string :name
      t.string :email
      t.string :state
      t.string :birthday
      t.integer :zipcode
      t.boolean :valid

      t.timestamps null: false
    end
  end
end
