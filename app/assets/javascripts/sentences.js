$(document).ready(function() {

	$randgroup = 0
	$randindex = 0

	$( "#the-button" ).click(function( event ) {
		event.preventDefault();
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
		$(".sentence").hide()
		$(".sentence[data-grouping=" + $randgroup + "]").show()
	};


	function getRandNum() {
			$randgroup = Math.floor(Math.random()*50)
			$randindex = 3*$randgroup-1;
			
	};


});


