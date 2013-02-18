$(document).ready(function() {

	$randgroup = 0
	$randindex = 0
	$counter = 0  //prevents the grouping from being added twice.  


	$( "#the-button" ).click(function( event ) {
		event.preventDefault();
		$("#the-button").removeClass('activebutton') //removes the gold-border highlight
		$counter = 0 
		getRandNum()
		removeSentence()
		addSentence($randindex)
		console.log('randgroup is '+ $randgroup + ', randinindex is '+$randindex);

	});


	$( "#the-context" ).click(function( event ) {
		event.preventDefault();
		showGrouping($randgroup)
		console.log('context: randgroup is '+$randgroup)
		makeButtonActive()
	});

		//adds a sentence into the span within the sentenceview element. Span is used to differentiate sentences by color.
		function addSentence(number) {
			var item = $("#sentenceview").append("<span>" + $(".sentence[data-index=" + number + "]").text() + "</span>").hide().fadeIn(200)
		}

		function removeSentence() {
			$("#sentenceview").contents().remove()
		}

		//adds the sentence's grouping (sentence before and after) into #sentenceview
		function showGrouping($randgroup){
			if($counter == 0) {
					$counter ++
				$("#sentenceview").hide()
				
				if($(".sentence[data-index=" + ($randindex + 1) + "]").attr('data-grouping')== $randgroup) {					
					$("#sentenceview").append($(".sentence[data-index=" + ($randindex + 1) + "]").text())
				}
				if($(".sentence[data-index=" + ($randindex - 1) + "]").attr('data-grouping')== $randgroup) {
					$("#sentenceview").prepend($(".sentence[data-index=" + ($randindex - 1) + "]").text())					
				}
				$("#sentenceview").show().slideDown()
			}

	    // http://stackoverflow.com/questions/10565832/div-append-text-with-an-animation is how to do this.
			// 			var block = $("#sentenceview");
			// block.css("height", block.height());
			// 	    block.animate({
	  //       height: block.children().height()})
		};

		function makeButtonActive() {
			$("#the-button").addClass('activebutton')
		};

		//generates the middle sentence (randindex) of any random grouping (randgroup)
		function getRandNum() {
				$randgroup = Math.ceil(Math.random()*$('.sentence:last').attr('data-grouping'))
				$randindex = 3*$randgroup-1;
				// console.log('length is '+$('.sentence:last').attr('data-grouping'))				
		};


});

