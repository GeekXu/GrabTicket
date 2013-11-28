
var uid;
var mid;
var hid;

var xmlHttp;
var data;
var url;
var date;
var firstWeibo;
var features;

var IfdirectFound=true;
var timer;


function GrabTicket(){
	//alert('grab');
	var date=new Date();
	var __rnd=date.getTime();

	//获取评论第一条
	url = "http://weibo.com/aj/mblog/mbloglist?_wv=5&page=1&pagebar=0&uid="+hid+"&_t=0&__rnd="+__rnd;
	xmlHttp=new XMLHttpRequest();
	xmlHttp.open("get",url,false);
	xmlHttp.send();
	if (xmlHttp.readyState==4) {
		//debugger;
		firstWeibo=xmlHttp.responseText;
		//console.log(firstWeibo.split('feed_list_content')[0]);
		var f=firstWeibo.split('feed_list_content');
		mid=f[0].split("mid")[1].split("\"")[1].split("\\")[0];
		//debugger;
		//alert("mid:"+mid);
		//debugger;
		firstWeibo=f[1].split('<')[0].split('>')[1];//获取第一条评论内容
		firstWeibo=convert(firstWeibo); //将返回的unicode编码转化为utf8
		//alert(firstWeibo);

	};

	features=feature.split(';');
	var flag=true;
	for(var i=0;i<features.length;i+=1){
		if (firstWeibo.indexOf(features[i])==-1) {
			flag=false;
			break;
		};
	}
	if (flag==true) //开始抢票
	{
		//alert("符合条件的微博已发布，开始评论。");
		var cnt=1; //只回复一条
		for (var i = 0; i < cnt; i++) {
			var date=new Date();
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
			//只发一条微博，就不用发垃圾评论了
			/*
			var contentRubbish="顶";
			date=new Date();
			__rnd=date.getTime();
			url="http://weibo.com/aj/comment/add?_wv=5&__rnd="+__rnd;
			data="act=post&mid="+mid+"&uid="+uid+"&forward=0&isroot=0&content="+contentRubbish+"&repeatNode=%5Bobject%20HTMLDivElement%5D&location=home&module=scommlist&group_source=group_all&_t=0";
			xmlHttp = new XMLHttpRequest();
			xmlHttp.open("post",url,false);
			xmlHttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9;q=0.8");
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
				xmlHttp.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,;q=0.8");
				xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");

				xmlHttp.send(data);
			};
			*/


		};
		
		clearInterval(timer);//评论成功，停止计时器
		if (IfdirectFound==true) {
			alert("符合条件的微博本来就存在，确定是你要刷的微博吗？如果不是请细化微博特征重新抢票。");
			return;
		}else{
			alert("刷票完成，请去检查刷票结果。^_^");
		}

	};
	IfdirectFound=false;

}

/*
 获取自己的uid
*/
function getuid(){

	var homeUrl=document.getElementsByClassName("gn_name")[0];
	if (!homeUrl) {
		alert("未找到用户名，请先登陆。");
		return -1;
	};
	uid=homeUrl.href.split('/')[3];
	//alert(uid);
	return 1;
}

/*
	获取要刷的用户的uid
*/
function gethid(){
	url="http://s.weibo.com/user/"+username;
	xmlHttp=new XMLHttpRequest();
	xmlHttp.open("get",url,false);
	xmlHttp.send();
	if (xmlHttp.readyState==4) {
		//debugger;
		hid=xmlHttp.responseText.split("person_detail")[1].split('uid')[1].split('\\')[1].split('\"')[1];
		//alert("hid:"+hid);
	};
}

/*
var username="北京理工大学学生会";
var feature="★深秋抢票★";
var freq=500;
var content;
var timer;
*/
function work(){
	var succ=getuid();
	if (succ==-1) {
		return;
	};
	gethid();

	timer = setInterval("GrabTicket()",freq);
	//GrabTicket();
}

work();
