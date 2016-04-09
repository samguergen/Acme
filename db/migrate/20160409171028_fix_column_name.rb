class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :orders, :valid, :validity
  end
end
