var names = [ 'Amil', 'Dave', 'Per', 'Declan','Rory','Anita', 'Asim','James','Mark','Greg','Jason','Adam','Olu' ,'Sarah','Charlotte','Ron'];
var removeNameToggle = true;

function pick() {
	var len = names.length;
	var rand = Math.random();
	return Math.floor(rand * len);
}

function reset() {
	names = [ 'Amil', 'Dave', 'Per', 'Declan','Rory','Anita', 'Asim','James','Mark','Greg','Jason','Adam','Olu' ,'Sarah','Charlotte','Ron'];
}

$(document).ready(function(){

	$('#pick').click(function(){
		if (names.length) {	
			var choiceIndex = pick();
			var choiceName = names[choiceIndex];
			$('#picked').append('<p>'+ choiceName +'</p>');
			if (removeNameToggle) {
				names.splice(choiceIndex,1);
			}
			$('#remaining-num').text(names.length);
		}
		else {
			alert('No more names! Reset to start again');
		}
	});

	$('#toggle-reduce').click(function(){
		removeNameToggle = (removeNameToggle === true) ? false : true ;
		if (removeNameToggle) {
			$('#toggle-status').text('Names are being removed');
		}
		else {
			$('#toggle-status').text('Names are not being removed');
		}
	});

	$('#reset').click(function(){
		reset();
		$('#picked').empty();
		$('#remaining-num').text('16');
	});

});