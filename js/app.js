// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  window.onload= function load(){$('.box').css('background'="blue")};


var boardArray=['placeholder','.one_one','.one_two','.one_three','.two_one','.two_two','.two_three','.three_one','.three_two','.three_three'];

$('.box').onClick('click', function(e){

	if(counter % 2 ===0  &&& $(this).color()===defaultColor){
		$(this).setClass('playerOne')

	}
		else if( { $(this).addClass('playerTwo')}
	
}






});