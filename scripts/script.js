//Controls santas direction
var xDir = false; //false = right
var yDir = false; //false = down
var zDir = false; //false = front

//Controls santas speed
var xSpeed = 10;
var ySpeed = 10;
var zSpeed = 10;

//Controls santas acceleration
var xAccel = 10;
var yAccel = 10;
var zAccel = 10;

$(document).ready(function() {
	santaX = $('.santa').offset().left;
	$(document).snowfall({flakeCount : 20, maxSpeed : 10, shadow: true, minSize: 10, maxSize: 20, round: true});
	getTimes();
	setInterval(function(){getTimes()}, 1000);
	moveSanta();
	setInterval(function(){moveSanta()}, 1);
});

function getTimes()
{
	$('#christmas_days').html(data[0]);
	$('#christmas_hours').html(data[1]);
	$('#christmas_minutes').html(data[2]);
	$('#christmas_seconds').html(data[3]);

	$('#newyear_days').html(data[0]);
	$('#newyear_hours').html(data[1]);
	$('#newyear_minutes').html(data[2]);
	$('#newyear_seconds').html(data[3]);
}

function calculateDiff()
{

}

function moveSanta()
{
	var	docWidth = $(document).width();
	var docHeight = $(document).height();


}

/*$(document).on('click touchstart', '.santa', function(e){
	e.preventDefault();
	$.playSound('sounds/woohoo');
});*/