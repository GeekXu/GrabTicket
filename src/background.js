var uid;
var mid;
var content;
var timeHour;
var timeMinute;
var lastTime;
var freq;
var timer;


chrome.browserAction.onClicked.addListener(function(tab) {
	alert(123);
	if(!uid){
		getValues();
	}
	else{
		setValues();
	}
	 
});