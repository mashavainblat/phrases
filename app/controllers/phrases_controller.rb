# class PhrasesController < ApplicationController
# 	def index
# 		@test = "testing"
# 		# @phrases = Phrase.all
# 	end

# 	def show
# 		# @phrases = Phrase.all
# 		# render json: @phrases
# 	end
# end

class PhrasesController < ApplicationController
	def index
		@phrases = Phrase.all
	end

	def show
		@phrases = Phrase.all
		render json: @phrases
	end
end