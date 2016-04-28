class CreatePhrases < ActiveRecord::Migration
  def change
    create_table :phrases do |t|
    	t.string "quote"
    	t.text "image"
    	t.string "background_color"
    end
  end
end
