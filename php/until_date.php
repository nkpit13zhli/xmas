<?php

$targetDate = $_POST['targetDate'];
date_default_timezone_set('Europe/Stockholm');

$datetime1 = new DateTime();
$datetime2 = new DateTime($targetDate);
$interval = $datetime1->diff($datetime2);
echo $interval->format('%D:%H:%i:%s')

?>