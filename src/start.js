var ifstart=0;
function GrabTicket(){
	//alert('grab');
	var date=new Date();
	var Hour=date.getHours();
	var Minute=date.getMinutes();

	
	if(Hour<timeHour||(Hour==timeHour&&Minute<timeMinute)){
		console.log("时间未到");
		return;
	}

	if(Hour>timeHour||(Hour==timeHour&&Minute>(lastTime+parseInt(timeMinute))))
	{
		alert("时间已过");
		clearInterval(timer);
		return;
	}

	if(ifstart==false){
		ifstart=true;
		alert("抢票时间到，已经开始抢票。开始结束提示之前最好不要动！");
	}
	

	//var date=new Date();
	var __rnd=date.getTime();
	var url="http://weibo.com/aj/comment/add?_wv=5&__rnd="+__rnd;
	var data="act=post&mid="+mid+"&uid="+uid+"&forward=0&isroot=0&content="+content+"&repeatNode=%5Bobject%20HTMLDivElement%5D&location=home&module=scommlist&group_source=group_all&_t=0";

	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("post",url,false);
	xmlHttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");

	xmlHttp.send(data);
	if (xmlHttp.readyState == 4) {
		//a=xmlHttp.ResponseText;
	};

	//发一条垃圾评论再删掉，破解评论10分钟限制
	var contentRubbish="顶";
	date=new Date();
	__rnd=date.getTime();
	url="http://weibo.com/aj/comment/add?_wv=5&__rnd="+__rnd;
	data="act=post&mid="+mid+"&uid="+uid+"&forward=0&isroot=0&content="+contentRubbish+"&repeatNode=%5Bobject%20HTMLDivElement%5D&location=home&module=scommlist&group_source=group_all&_t=0";
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open("post",url,false);
	xmlHttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");

	xmlHttp.send(data);
	if (xmlHttp.readyState==4) {
		var a=xmlHttp.responseText;
		var obj=eval('('+a+')');
		var CommentHtml=obj.data.comment;
		var convertor=document.createElement('div');
		convertor.innerHTML=CommentHtml;
		var commentID=convertor.firstChild.getAttribute("comment_id");
		console.log(commentID);

		//删除评论
		date=new Date();
		__rnd=date.getTime();
		url="http://weibo.com/aj/comment/del?_wv=5&__rnd="+__rnd;
		data="act=delete&mid="+mid+"&cid="+commentID+"&uid="+uid+"&is_block=0&_t=0";
		xmlHttp = new XMLHttpRequest();
		xmlHttp.open("post",url,false);
		xmlHttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
		xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");

		xmlHttp.send(data);
	};
}

/*var uid="1779288911";
var mid="3647946190896988";
var content="test5";
var timeHour="19";
var timeMinute="24";
var lastTime=2;
var freq=1;
var timer;*/
timer = setInterval("GrabTicket()",1000*freq);
//alert(content);