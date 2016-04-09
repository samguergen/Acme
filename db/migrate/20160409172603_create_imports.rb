class CreateImports < ActiveRecord::Migration
  def change
    create_table :imports do |t|
      t.text :content

      t.timestamps null: false
    end
  end
end
