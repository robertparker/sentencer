class HomeController < ApplicationController
  def index
  	@sentence = Sentence.all
  end
end
