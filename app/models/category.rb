class Category < ActiveRecord::Base
  has_many :page

  validates :name, presence: true, uniqueness: true
end
