class Page < ActiveRecord::Base
  has_many :tag
  belongs_to :category

  validates :title, presence: true
end
