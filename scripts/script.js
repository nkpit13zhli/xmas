/*var santaX;
var santaDir = 'left';
var santaChange = 0;
var santaChangeDir = 'up';
*/

var xDir = false; //false = right
var yDir = false; //false = down
var zDir = false; //false = front

var xSpeed = 10;
var ySpeed = 10;
var zSpeed = 10;

var xAccel = 10;
var yAccel = 10;
var zAccel = 10;

$(document).ready(function() {
	//$("html").niceScroll({width:"8px"});
	santaX = $('.santa').offset().left;
	$(document).snowfall({flakeCount : 20, maxSpeed : 10, shadow: true, minSize: 10, maxSize: 20, round: true});
	getTimes();
	setInterval(function(){getTimes()}, 1000);
	moveSanta();
	setInterval(function(){moveSanta()}, 1);
});

function getTimes()
{
	$.post( "php/until_date.php", {targetDate: '2015-12-24 06:00'}, function( data ) {
		var Data = data.split(':');
		$('#christmas_days').html(Data[0]);
		$('#christmas_hours').html(Data[1]);
		$('#christmas_minutes').html(Data[2]);
		$('#christmas_seconds').html(Data[3]);
	});

	$.post( "php/until_date.php", {targetDate: '2016-01-01 00:00'}, function( data ) {
		var Data = data.split(':');
		$('#newyear_days').html(Data[0]);
		$('#newyear_hours').html(Data[1]);
		$('#newyear_minutes').html(Data[2]);
		$('#newyear_seconds').html(Data[3]);
	});
}

/*function moveSanta()
{
	if(santaX < 1)
	{
		santaDir = 'right';
		$.playSound('sounds/bounce');
	}
	else if(santaX > 1239)
	{
		santaDir = 'left';
		$.playSound('sounds/bounce');
	}

	if(santaDir === 'left')
	{
		santaX -= santaChange;
	}
	else
	{
		santaX += santaChange;
	}

	$('.santa').offset({left: santaX});

	if(santaChange < 0.1)
	{
		santaChangeDir = 'up';
	}
	else if(santaChange > 10)
	{
		santaChangeDir = 'down';
	}

	if(santaChangeDir === 'up')
	{
		santaChange += 0.05;
	}
	else
	{
		santaChange -= 0.05;
	}
}*/

function moveSanta()
{

}

/*$(document).on('click touchstart', '.santa', function(e){
	e.preventDefault();
	$.playSound('sounds/woohoo');
});*/