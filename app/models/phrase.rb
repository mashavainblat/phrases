class Phrase < ActiveRecord::Base
	validates :quote, presence: true
	validates :image, presence: true
	validates :background_color, presence: true
end