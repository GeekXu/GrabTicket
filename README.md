GrabTicket V2.0
==========


手抢了两发都没抢着，怒了！更新个靠谱的版本。
这个版本纯是为了刷票了，程序会一直检查对方的微博，在符合条件的微博发布的第一时间直接回复微博。

使用方法：

1. 同V1.0，首先下载 “深秋微博抢票.crx”(下载方法是右下角的Download zip),然后打开chrome，在地址栏输入 chrome://extensions/ ，把“深秋微博抢票.crx”拖进chrome安装。
2.  打开自己的微博主页（不强制，但是一定要是微博的页面），点击插件图标，弹出配置页面。需要填写的参数有5个：用户名，微博特征，刷新间隔，评论内容，评论次数。	
	* 用户名就是发布微博的用户名，第五轮抢票的发布者是“北理青年”
	* 微博特征是待评论微博的独特特征，程序靠这个信息识别微博是否已经发布。如果有两个或两个以上特征，把特征用分号隔开
	* 刷新间隔就是程序检查是否已经发布微博的间隔
	* 评论内容你懂得
	* 评论次数：这个不用太多，因为微博发出来评论上就够了。  
3.  填写完信息点击“保存信息”可以把当前的设置保存起来供下次使用。
4.  完成之后点击“开始抢票”



=============  
Note:

1. 抢票的速度取决于电脑的速度和网速~我电脑不太快，但测试了一下应该肯定也比手速快了。
2. 因为程序会频繁查询是否已经发布微博，所以会占用大量计算资源，所以开始刷票之后，刷票的那个页面最好就不要动了，但是别的页面没有影响。
3. 还是主要供娱乐哈哈
4. 如果出现乱码问题，请打开chrome菜单-->工具-->编码-->自动检测
5. **为防止学生会发布和正式抢票微博很接近的干扰微博，可以尽量细化微博特征，使用多个关键词，区分正式微博和干扰微博。**


=================================================  
=================================================
GrabTicket V1.0


深秋歌会微博抢票工具


写着玩的小工具，搞这么个小工具比直接抢麻烦好多==


使用方法：
1. 这个工具是Chrome的扩展工具，所以请使用Chrome浏览器
2. 在Chrome的地址栏里输入chrome://extensions/ 打开扩展程序管理页面
3. 将下载的刷评论器.crx拖到这个页面上，Chrome会询问是否安装扩展，点击添加，扩展就安装成功了。名字是“Sina Commentor”，图标是个椭圆。

4. 获取uid和mid，这两个参数需要手动获取。
	uid就是你微薄的Id，获取方法是打开你自己微博的首页，此时浏览器地址栏中的地址为http://weibo.com/u/*******/home?topnav=1&wvr=5， 其中星号部分既为uid
	
	mid是你要刷评论微博的ID，获取方法为：先找到你要评论的微博，在微博上点击右键，点击“审查元素”，Chrome会打开开发工具并且高亮了一行代码，在高亮代码上方几行处有一个 mid=******，此处既为mid。
	
	记录这两个id
	
5. 回到你微博的首页，点击刚安装的扩展，打开配置页面。
6. 填写7个输入框需要的内容，开始小时和开始分钟是开始刷评论的时间；持续时间单位是分钟，是指刷评论持续的时间；评论间隔单位是秒；uid和mid为第4步中获取到的uid和mid。

7. 点击开始刷票，wait。



============
Note：

1. 设置好了时间之后不要刷新微博页面，否则会失效。所以可以在开始刷票前一两分钟开始设置刷票，点击开始刷票之后就不要动这个页面了。开始刷票和结束刷票是会有提示。

2. 因为Chrome不支持写文件，所以每次输入的参数在配置页面关闭并再次打开的时候会恢复默认，但是只要点击了 开始刷票 设置就已经生效了。

3. 因为是写着玩的^_^，所以工具健壮性不健全，如果因为操作失误导致刷不到票不怪我~



