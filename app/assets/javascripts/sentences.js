$(document).ready(function() {

	$randgroup = 0
	$randindex = 0
	$counter = 0  //gotta be a better way to do this. 


	$( "#the-button" ).click(function( event ) {
		event.preventDefault();
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
	});



		function showSentence(number){
			$(".sentence").hide()
			$(".sentence[data-index=" + number + "]").show()			
		};

		function addSentence(number) {
			$("#sentenceview").append("<span>" + $(".sentence[data-index=" + number + "]").text() + "</span>").show()
		}

		function removeSentence() {
			$("#sentenceview").contents().remove()
		}

		function showGrouping($randgroup){
			if($counter == 0) {
					$counter ++
				$("#sentenceview").hide()
				$("#sentenceview").append($(".sentence[data-index=" + ($randindex + 1) + "]").text())
				$("#sentenceview").prepend($(".sentence[data-index=" + ($randindex - 1) + "]").text())
				$("#sentenceview").show().slideDown()



			}
			else {

			}
		
	    // http://stackoverflow.com/questions/10565832/div-append-text-with-an-animation is how to do this.
			// 			var block = $("#sentenceview");
			// block.css("height", block.height());
			// 	    block.animate({
	  //       height: block.children().height()})
		};



		function getRandNum() {
				$randgroup = Math.ceil(Math.random()*50)
				$randindex = 3*$randgroup-1;
				
		};


});

