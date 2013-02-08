class Sentence < ActiveRecord::Base
  attr_accessible :source, :text, :sequence

  def self.import	 
	sentences = []
	self.stanford_parse(self.open_text).each do |sentence|
		sentences << sentence.to_s.gsub(/'/,'''')
	end

	sentences.each_with_index do |sentence, index|
		Sentence.create(source: 'Rohit Parulkar', text: sentence.to_s.gsub(/'/,''''), sequence:(index+1))
	end

  end

  def self.open_text
	 contents = File.open("/users/rdparulk/workspace/website/everythingraw", "r:UTF-8")
	 contents.read
  end

  def self.stanford_parse(contents)
  	pipeline =  StanfordCoreNLP.load(:tokenize, :ssplit)
	text = StanfordCoreNLP::Annotation.new(contents)
	pipeline.annotate(text)
	text.get(:sentences)

  end

	private

		def sanitize_sentence(sentence)
		end

end
