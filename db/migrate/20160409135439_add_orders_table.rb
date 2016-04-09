class AddOrdersTable < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :order_id
      t.string :name
      t.string :state
      t.string :email
      t.integer :zipcode
      t.string :birthday
      t.boolean :validity
    end
  end
end
