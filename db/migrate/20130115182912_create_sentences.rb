class CreateSentences < ActiveRecord::Migration
  def change
    create_table :sentences do |t|
      t.string :text
      t.string :source
      t.integer :sequence
      t.timestamps
    end
    change_column :sentences, :text, :text
  end
end
