class Import < ActiveRecord::Base
  attr_accessible :content
  has_many :orders
end
