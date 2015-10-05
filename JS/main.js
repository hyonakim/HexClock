setInterval(function(){

var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

var hr = (hr < 10) ? '0' + hour : hour; 
var min = (minutes < 10) ? '0' + minutes : minutes;
var sec = (seconds < 10) ? '0' + seconds : seconds;
var totalTime = '#' + hr + ''+ min + '' + sec;

var changeColor = $('.clock');
changeColor.css('background', totalTime);
$('.time').text(totalTime);
},1000);


