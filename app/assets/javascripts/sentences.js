$(document).ready(function() {

	$randgroup = 0
	$randindex = 0
	$counter = 0  //gotta be a better way to do this. 

// add text in $randindex to first div, then.

	$( "#the-button" ).click(function( event ) {
		event.preventDefault();
		$counter = 0
		getRandNum()
		showSentence($randindex);
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
		// console.log($(".sentence[data-index=" + number + "]").attr('data-source'))
		
	};

		
	
	function showGrouping($randgroup){
		if($counter == 0) {
				$counter ++
			$(".sentence").hide()
	 		// $(".sentence[data-grouping=" + $randgroup + "]").show()
			$(".sentence[data-index=" + $randindex + "]").append($(".sentence[data-index=" + ($randindex + 1) + "]").text())
			$(".sentence[data-index=" + $randindex + "]").prepend($(".sentence[data-index=" + ($randindex - 1) + "]").text())
			$(".sentence[data-index=" + $randindex + "]").show()
		}
		else {

		}
	// var block = $(".sentence[data-index=" + $randindex + "]");
	// 	block.css("height", block.height());
	//     block.children().append($(".sentence[data-index=" + ($randindex + 1) + "]");
 //    block.animate({
 //        height: block.children().height()
 //    })
    // http://stackoverflow.com/questions/10565832/div-append-text-with-an-animation is how to do this.
	
	};



	function getRandNum() {
			$randgroup = Math.floor(Math.random()*50)
			$randindex = 3*$randgroup-1;
			
	};


});


