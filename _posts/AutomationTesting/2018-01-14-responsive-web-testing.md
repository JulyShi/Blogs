---
layout: post
title: Responsive Web测试
date: 2018-01-14
categories: blog
header-img: "../img/header/Home1.jpg"
tags: [自动化测试]
description: Ethan Marcotte曾于2010年5月25日在A List Apart发表了文章Responsive Web Design，首次提出了响应式设计RWD(Responsive Web Design)的概念。其理念是，Web页面的设计能够自适应多种设备、平台和浏览器，同时减少缩放、平移和滚动。这样，无论用户正在使用电脑、平板、还是手机，Web页面都应该能够自动切换分辨率和图片尺寸等。这样，用户能够在不同设备上看到同样的网页。

---
### 1. 什么是Responsive Web设计
Ethan Marcotte曾于2010年5月25日在A List Apart发表了文章《[Responsive Web Design](http://alistapart.com/article/responsive-web-design)》，首次提出了**RWD**(Responsive Web Design)的概念。其理念是，Web页面的设计能够自适应多种设备、平台和浏览器，同时减少缩放、平移和滚动。
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-000.jpg" align="center"></p>
</center>
RWD概念提倡“一次设计，普遍适用”。让同一个网页设计自动适应不同大小的屏幕，根据屏幕宽度，自动调整布局。

* 对用户来讲，无论正在使用电脑、平板、还是手机，Web页面都应该能够自动切换分辨率和图片尺寸等。这样，用户不仅能够在不同设备上看到同样的网页，还能够免去频繁拖动和缩放屏幕等操作。
* 对设计师来讲，只需要采用同一套控件和界面标准，就能完成PC和移动端的设计。
* 对开发者来讲，只需要开发和维护一套代码，网站就能在“多个”平台上工作，这大大减少了架构设计的复杂度。


### 2. 几个关于屏幕的概念

**(1). 屏幕尺寸** 是指手机屏幕对角线的物理尺寸。单位：英寸（inch），1英寸=2.54cm。

**(2). 屏幕分辨率** 是指手机在横向（宽度）、纵向（高度）上的像素块的总和，单位：px（pixel），1px=1像素点。一般描述成屏幕的"宽x高”=AxB，也就是说屏幕在宽度上有A个像素点，在高度有B个像素点。
> 在我们手机上呈现的一条线、一个面、一张图像都是由最小的单位像素来表示的，可以简单理解为是由一个个小方块组成的。
 
**(3). 分辨率比** 即屏幕分辨率的宽高比。比如iPhoneX分别率为：1080*1920 (px)，分辨率比就是9:16。

**(4). 屏幕像素密度** 指每英寸的像素点数，英文简称PPI，单位：dpi（dots per ich）。比如设备内每英寸有160个像素，那么该设备的屏幕像素密度=160dpi。这个英寸跟手机屏幕尺寸一样，也是对角线的长度。所以屏幕像素密度，可以理解为一个对角线长度为1英寸的正方形内所拥有的像素数。

**(5). 屏幕尺寸、屏幕分辨率、像素密度三者关系**：屏幕尺寸一样的情况下，分辨率越高，屏幕像素密度就越高，显示效果就越精细。

| 密度等级            | 代表的屏幕分辨率（px）| 屏幕像素密度（dpi） |
|:-------------     |:---------------:| -------------:|
| 低密度（ldpi）      | 240x320        | 120 |
| 中密度（mdpi）      | 320x480        | 160 |
| 高密度（hdpi）      | 480x800        | 240 |
| 极高密度（xhdpi）   | 720x1280       | 320 |
| 超高密度（xxhdpi）| 1080x1920       | 480 |

### 3. Responsive Web测试测什么

首先来对比一下静态布局和Responsive布局：
* **静态式布局**：窗口缩小后内容被遮挡时，拖动滚动条显示布局。不管在哪种设备，哪种浏览器上浏览都是一个样。移动设备上则显示太小或不全。

* **Responsive布局**：分别为不同屏幕分辨率设备设计不同的布局布局，即页面元素宽度随着窗口调整而自动适配，元素位置、大小都会随之改变。显示效果和交互方式都会发生变化各不相同

因此，Responsive Web测试要关注以下几点：
1. **布局调整**：网页能够自动识别屏幕宽度调整布局，不需要横向滚动。比如：页面横向上有两个并排的元素，如果宽度太小，放不下两个元素，第二个元素会自动显示到第一个元素的下方，不会在水平方向溢出，从而避免了水平滚动。
2. **文字缩放和换行**：网页能够自动识别屏幕宽度调整文字大小并换行。
3. **图像缩放**：网页能够自动识别屏幕宽度对图片进行缩放，使其不需要放大缩小就能显示完全。
4. **显示效果和交互方式可能发生改变**：网页的交互方式和显示效果也可能发生变化。比如，在PC端，一个下拉列表是以Dropdown形式呈现，但在移动端变成右侧划出的菜单。当然交互方式和显示效果是否发生变化，取决于设计。
5. **屏幕旋转**：当旋转屏幕时，布局、文字、图像和交互可能发生改变。
6. **键盘**：对于移动平台，要关注键盘弹出时样式是否正常。

### 4. 几款好用的Responsive Web测试工具

谷歌搜索了一下，国内外有很多Responsive Web测试工具，七姑娘尝试了其中的大部分，推荐5款亲测好用的工具给大家。

#### 4.1 Chrome Device Toolbar

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

#### 4.2 Sizzy
[Sizzy](https://sizzy.co/)能够用来测试在一个页面中同时预览多个不同屏幕尺寸的页面，不用切换模式。
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-0001.png" align="center"></p>
</center>
- ① **Web URL**：输入您要测试的网站链接。
- ② **选择系统**：选择ios或Android,如果不选，默认显示全部。
- ③ **选择设备**：选择手机和是平板。
- ④ **选择键盘**：选择是否弹出键盘。
- ⑤ **横竖屏切换**：选择横屏或竖屏播放。

**推荐指数：**⭐️⭐️⭐️⭐️⭐️


#### 4.3 Responsive
[Responsive](http://mattkersley.com/responsive/)能够用来测试网站在同一个屏幕上不同分辨率下的效果，这样，不需要切换模式，就可以轻松的查看网站在不同分辨率上的响应性。可以在一张网页上，同时显示不同分辨率屏幕的测试效果。
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-002.png" align="center"></p>
</center>
- ① **Web URL**：输入您要测试的网站链接。
- ② **显示模式**：选择显示尺寸的模式
- ③ **分别率**：显示不同分别率。

**推荐指数：**⭐️⭐️⭐️

#### 4.4 Browserstack
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
也可以点击More里面的Reponsive按钮，进入Reponsive Testing页面，选择需要测试的设备。
- ① **Reponsive**：进入Reponsive模式。
- ② **Web URL**：输入您要测试的网站链接。

**推荐指数：**⭐️⭐️⭐️⭐️⭐️

#### 4.5 I am mobile
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

**推荐指数：**⭐️⭐️⭐️













