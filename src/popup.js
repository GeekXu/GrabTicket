var username="北京理工大学学生会";
var feature="★深秋抢票★";//★
var freq=500;
var content="1120101828+8179";


function getValues(){
	username=document.getElementById("username").value;
	feature=document.getElementById("feature").value;
	freq=document.getElementById("freq").value;
	content=document.getElementById("content").value;
	//cnt=document.getElementById("cnt").value;
}

function setValues(){
	document.getElementById("username").value=username;
	document.getElementById("feature").value=feature;
	document.getElementById("freq").value=freq;
	document.getElementById("content").value=content;
	//document.getElementById("cnt").value=cnt;
}

function start(){

	
	getValues();

	content=content.replace('+',"%2b");

	var codestr="var username='"+username+"';var content='"+content+"';var freq="+freq+";var feature='"+feature+"';";
	//var codestr="var uid='"+uid+"';var mid='"+mid+"';var content='"+content+"';var timeHour="+timeHour+";var timeMinute="+timeMinute+";var lastTime="+lastTime+";var freq="+freq+";var timer";
	//alert(codestr);

	chrome.tabs.executeScript(null, {code: codestr});
	chrome.tabs.executeScript(null, {file: "convertor.js"});
	chrome.tabs.executeScript(null, {file: "start.js"});

}

function stop(){
	//clearInterval(timer);
	chrome.tabs.executeScript(null, {file: "stop.js"});
}

function save(){
	getValues();

	var info=new Object;
	info.username=username;
	info.feature=feature;
	info.freq=freq;
	info.wcontent=content;
	//info.cnt=cnt;

	chrome.storage.local.set({'info': info},function(){
		alert('信息成功保存');
		//console.log('infomation saved');
	});
}

document.addEventListener('DOMContentLoaded',function(){

	document.getElementById('start').addEventListener('click',start);
	document.getElementById('stop').addEventListener('click',stop);
	document.getElementById('save').addEventListener('click',save);
	document.getElementById('help').addEventListener('click',function(){
		chrome.tabs.create({url: "https://github.com/GeekXu/GrabTicket#grabticket"});
	});

	chrome.storage.local.get(function(value){
		if(value&&value.info){
			var info=value.info;
			feature=info.feature;
			content=info.wcontent;
			freq=info.freq;
			username=info.username;
			//cnt=info.cnt;

			setValues();
		}

	});
});



