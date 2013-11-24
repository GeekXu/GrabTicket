
function getValues(){
	uid=document.getElementById("uid").value;
	mid=document.getElementById("mid").value;
	freq=document.getElementById("freq").value;
	content=document.getElementById("content").value;
	lastTime=document.getElementById("lastTime").value;
	timeHour=document.getElementById("timeHour").value;
	timeMinute=document.getElementById("timeMinute").value;
}

function setValues(){
	document.getElementById("uid").value=uid;
	document.getElementById("mid").value=mid;
	document.getElementById("freq").value=freq;
	document.getElementById("content").value=content;
	document.getElementById("lastTime").value=lastTime;
	document.getElementById("timeHour").value=timeHour;
	document.getElementById("timeMinute").value=timeMinute;
}

function start(){
	//timer = setInterval("GrabTicket()",1000*freq);
	//Moved to start.js which will be injected into the active Tab

	getValues();
	
	
	var codestr="var uid='"+uid+"';var mid='"+mid+"';var content='"+content+"';var timeHour="+timeHour+";var timeMinute="+timeMinute+";var lastTime="+lastTime+";var freq="+freq+";var timer";
	//var codestr="var freq=1;var content=2;";
	//alert(codestr);

	chrome.tabs.executeScript(null, {code: codestr});
	chrome.tabs.executeScript(null, {file: "start.js"});
}

function stop(){
	//clearInterval(timer);
	chrome.tabs.executeScript(null, {file: "stop.js"});
}

document.addEventListener('DOMContentLoaded',function(){
	document.getElementById('start').addEventListener('click',start);
	document.getElementById('stop').addEventListener('click',stop);
});



