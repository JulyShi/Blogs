---
layout: post
title: Responsive Web测试
date: 2018-01-14
categories: blog
tags: [Web测试]
description: Ethan Marcotte曾于2010年5月25日在A List Apart发表了文章Responsive Web Design，首次提出了响应式设计RWD(Responsive Web Design)的概念。其理念是，Web页面的设计能够自适应多种设备、平台和浏览器，同时减少缩放、平移和滚动。这样，无论用户正在使用电脑、平板、还是手机，Web页面都应该能够自动切换分辨率和图片尺寸等，以适应不同设备。

---
### 什么是Responsive Web设计
Ethan Marcotte曾于2010年5月25日在A List Apart发表了文章"[Responsive Web Design](http://alistapart.com/article/responsive-web-design)"，首次提出了响应式设计**RWD**(Responsive Web Design)的概念。其理念是，Web页面的设计能够自适应多种设备、平台和浏览器，同时减少缩放、平移和滚动。这样，无论用户正在使用电脑、平板、还是手机，Web页面都应该能够自动切换分辨率和图片尺寸等，以适应不同设备。

### Responsive Web测试测什么
屏幕分辨率是指屏幕显示的分辨率。屏幕分辨率确定计算机屏幕上显示多少信息的设置，以水平和垂直像素来衡量。屏幕分辨率低时（例如 640 x 480），在屏幕上显示的像素少，但尺寸比较大。屏幕分辨率高时（例如 1600 x 1200），在屏幕上显示的像素多，但尺寸比较小。
显示分辨率就是屏幕上显示的像素个数，分辨率160×128的意思是水平方向含有像素数为160个，垂直方向像素数128个。屏幕尺寸一样的情况下，分辨率越高，显示效果就越精细和细腻。

### 几款好用的Responsive Web测试工具

谷歌搜索了一下，国内外有很多Responsive Web测试工具，七姑娘尝试了其中的大部分，挑出4款手工测试工具推荐给大家。

#### 1. Chrome Device Toolbar

<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-001.png" align="center"></p>
</center>

使用Chrome自带的Device Toolbar进行响应式测试。
- ① **设备Toolbar开关**：打开Chrome调试窗口，点击Device开关，Device Toolbar就被打开了。
- ② **选择模式**：Device Toolbar为我们提供了Responsive mode和Specific Device两种模式。
- ③ **Responsive模式**：可以直接修改屏幕尺寸。
- ④ **特定设备**：Chrome已经预先提供了几种热门机型，但是，用户也可点击“Edit”按钮，添加自定义机型。
- ⑤ **一些有用的小功能**：显示设备边框、显示标尺、截图、截取长图等。
- ⑥ **屏幕定向**：屏幕旋转，测试横竖屏

**推荐指数：**⭐️⭐️⭐️⭐️

#### 2. Responsive
[Responsive](http://mattkersley.com/responsive/)能够用来测试网站在同一个屏幕上不同分辨率下的效果，这样，不需要切换模式，就可以轻松的查看网站在不同分辨率上的响应性。
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-002.png" align="center"></p>
</center>
- ① **Web URL**：输入您要测试的网站链接。
- ② **显示模式**：选择显示尺寸的模式
- ③ **分别率**：显示不同分别率。

**推荐指数：**⭐️⭐️⭐️

#### 3. Browserstack
[Browserstack](https://www.browserstack.com/responsive)支持跨浏览器的测试。browserstack利用Adobe Flash在你自己的浏览器提供了一个虚拟浏览器，不再局限于操作系统或浏览器版本。
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-003.png" align="center"></p>
</center>
- ① **操作系统**：选择您的目标操作系统。
- ② **选择浏览器**：选择您的目标浏览器。
- ③ **选择浏览器版本**：选择您的目标浏览器版本。

选择SUMSUNG Galaxy Tab4 10.1 + Chrome
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-004.png" align="center"></p>
</center>
- ① **Web URL**：输入您要测试的网站链接。
- ② **一些小工具**：比如刷新、截图等。

<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-005.png" align="center"></p>
</center>
也可以点击More里面的Reponsive，进入Reponsive Testing页面，选择需要测试的设备。
- ① **Reponsive**：进入Reponsive模式。
- ② **Web URL**：输入您要测试的网站链接。
**推荐指数：**⭐️⭐️⭐️⭐️⭐️

#### 4. I am mobile
[I am mobile](http://www.iammobile.co.uk/)用来测试网站在各种不同移动窗口上的显示效果，同时会给出一些建议，让你的网站更具移动友好性。
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-006.png" align="center"></p>
</center>
- ① **Web URL**：输入您要测试的网站链接。
- ② **Are you mobile**：唯一的入口按钮。

<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-007.png" align="center"></p>
</center>
- ① **Web URL**：修改您要测试的网站链接。
- ③ **选择分辨率**：选择显示尺寸的模式。
- ③ **Find out why**：查看测评结果。
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-008.png" align="center"></p>
</center>













