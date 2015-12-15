//Controls timer
var seconds;

//Controls santas movement
var runMove = false;

//Controls santas position
var xPos = 0;
var yPos = 0;

//Controls santas direction
var xDir = false; //false = right
var yDir = false; //false = down

//Controls santas speed
var xSpeed = 5;
var ySpeed = 5;

//Controls santas acceleration
var xAccel = 10;
var yAccel = 10;

//Controls santas acceleration direction
var xAccelDir = false; //false = up
var yAccelDir = false; //false = up

$(document).ready(function() {
	xPos = $('.santa').offset().left;
	yPos = $('.santa').offset().top;
	$(document).snowfall({flakeCount : 20, maxSpeed : 10, shadow: true, minSize: 10, maxSize: 20, round: true});
	getTimes();
	setInterval(function(){getTimes()}, 1000);
	setInterval(function(){timer()}, 1000)
	setInterval(function(){moveSanta()}, 1);
});

function getTimes()
{
	data = getDiff('2015-12-24 06:00');
	$('#christmas_days').html(data[0]);
	$('#christmas_hours').html(data[1]);
	$('#christmas_minutes').html(data[2]);
	$('#christmas_seconds').html(data[3]);

	data = getDiff('2016-01-01 00:00');
	$('#newyear_days').html(data[0]);
	$('#newyear_hours').html(data[1]);
	$('#newyear_minutes').html(data[2]);
	$('#newyear_seconds').html(data[3]);
}

function getDiff(targetDate)
{
	var start = new Date(),
	    end   = new Date( targetDate ),
	    diff  = ( new Date( end - start )/1000/60/60/24 ),
	    data = [0, 0, 0, 0];
	    data[0] = Math.floor( diff ); //Days
	    data[1] = Math.floor( ( diff - data[0] ) * 24 ); //Hours
	    data[2] = Math.floor( (diff - data[0] - ( data[1]/24 ) ) * 24 * 60 ); //Minutes
	    data[3] = Math.floor( (diff - data[0] - ( data[1]/24 ) - ( data[2]/60/24 ) ) * 24 * 60 * 60 ); //Seconds

	    return data;
}

function moveSanta()
{
	if(!runMove)
	{
		return;
	}

	//Get docinfo.
	var	docWidth = $(document).width();
	var docHeight = $(document).height();

	//Check xDir
	if(xPos <= 0)
	{
		xDir = false;
	}
	else if (xPos >= docWidth - 126)
	{
		xDir = true;
	}

	//Check yDir
	if(yPos <= 5)
	{
		yDir = false;
	}
	else if (yPos >= docHeight - 120)
	{
		yDir = true;
	}

	//Move xDir
	if(!xDir)
	{
		xPos += xSpeed;
	}
	else
	{
		xPos -= xSpeed;
	}

	//Move yDir
	if(!yDir)
	{
		yPos += ySpeed;
	}
	else
	{
		yPos -= ySpeed;
	}

	$('.santa').offset({left: xPos, top: yPos});
}

function timer()
{
	if(runMove)
	{
		seconds++;

		if(seconds >= 120)
		{
			runMove = false;
			seconds = 0;
			alert("Time is up!");
			$('#timer').html("Time: 00:00");
		}

		var minutes = Math.floor(seconds / 60);
		var seconds2 = Math.floor(seconds - minutes * 60);

		if(minutes < 10) { minutes = "0" + minutes; }
		if(seconds2 < 10) { seconds2 = "0" + seconds2; }

		$('#timer').html("Time: " + minutes + ":" + seconds2);
	}
}

$(document).on('click touchstart', '.santa', function(e){
	e.preventDefault();
	runMove = !runMove;
	if(runMove)
	{
		seconds = 0;
		$('#timer').html("Time: 00:00");
		$.playSound('sounds/woohoo');
	}
});