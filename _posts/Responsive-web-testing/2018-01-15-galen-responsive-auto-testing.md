---
layout: post
title: 使用Galen进行Responsive Web自动化测试
date: 2018-01-15
categories: blog
tags: [Web测试]
description: Galen是一款开源的测试框架，是一款开源的测试框架，最初是被设计用来测试网站在不同浏览器上的表现，比如IE、Chrome,、Firefox等。但随着响应式设计的发展，Galen的作用就被扩展到测试网站页面布局分别分别在PC、Tablet和Mobile上是否正确，也就是响应式Web测试。

---
## 什么是Galen Framework
---
[Galen](http://galenframework.com/) 是一款开源的测试框架，最初是被设计用来测试网站在不同浏览器上的表现，比如IE、Chrome、Firefox等。但随着响应式设计的发展，Galen的作用就被扩展到测试网站页面布局分别分别在PC、Tablet和Mobile上是否正确，也就是响应式Web测试。

一言以蔽之，Galen Framework是一种特殊的语言和工具，用来在真实浏览器上测试Web页面的响应式布局和跨浏览器布局。

Galen支持[Javascript](http://galenframework.com/docs/reference-javascript-tests-guide/) 和 [Java](http://galenframework.com/docs/reference-java-tests/)两种脚本语言。


## Galen是如何工作的
---

just take a location and dimensions of element and verify it relatively to other elements on page.

使用Galen进行[Responsive Web](http://julysxy.com/blog/2018/01/14/responsive-web-testing/)测试，其工作原理为以下几步：
1. 在指定浏览器中打开Web页面
2. 调整浏览器窗口至目标尺寸
3. 获取页面元素的实际布局，如位置和大小等
4. 将实际布局与Galen specs文件中预先定义的布局标准进行比对，从而测试页面布局
4. 输出测试报告


## 安装 Galen
---
在安装Galen之前，请确保您已经安装了Java version 1.8。

#### Step 1. 安装Galen
- 方式一：通过npm安装：```sudo npm install -g galenframework-cli```
- 方式二：在OS X 和 Linux平台手动安装：在[Galen官网](http://galenframework.com/download/)下载安装包，解压到你的目录。然后进入目录，执行以下命令：```sudo ./install.sh```
- 方式三：在Windows系统安装Galen：在windows系统，为了执行<code>galen.bat</code>文件，你需要手动设置环境变量。详情请参考文档 - [How to configure Galen in Windows](http://mindengine.net/post/2014-01-08-configuring-galen-framework-for-windows/#.Wlx7x1T1U0o)。

#### Step 2. 检查版本
安装完成后，请用`galen -v`命令确认Galen版本。


## 使用Galen进行Responsive Web测试的五部曲
---
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-011.png" align="center"></p>
</center>

为了详细描述使用Galen进行Responsive Web测试的整个搭建过程，我将其称为五部曲：
* 一：编写Page Specs，让环境Run起来
* 二：使用Test Suite
* 二：引入GalenPages
* 四：数据与测试分离
* 五：使用Selenium Grid进行分布式测试

这里以[Sample Website for Galen Framework](http://testapp.galenframework.com/)网站的Welcome页作为测试对象。如图：
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-014.png" align="center"></p>
</center>

### 一：编写Page Specs，让环境Run起来
---
在开始之前，我们先小试牛刀，创建一个简单的测试，让环境Run起来。

在这里，我们设计一个简单的Case：
```
验证welcome页面的login按钮：
① 按钮上text为“Login”
② 按钮在PC、Mobile、tablet上的height
③ 按钮在PC、Mobile、tablet上的width
```

#### Step 1. 创建Project目录

在本地创建工程目录，命名为`Galen-Demo`。

#### Step 2. 编写specs

按照Case的设计，首先编写spec。在Project中创建子目录`specs`。在specs目录中创建`welcomePage.gspec`文件，用来编写Welcome页面的布局规格：

```
@objects
    login_button        #welcome-page .button-login

@set
    login_button_text                   Login

= Login btn =
    login_button:
        text is "${login_button_text}"
    
    @on *
        login_button:
            height 45px

    @on mobile
        login_button:
             width 300 to 350 px

    @on tablet
        login_button:
             width 75 to 80 px

    @on desktop
        login_button:
             width 75 to 80 px
```
*Specs文件的编写方法不在本文介绍，详情请参考 - [Galen Specs Language Guide](http://galenframework.com/docs/reference-galen-spec-language-guide/)。*

#### Step 3. Galen Config

在Project根目录下执行命令`galen config`, 命令行输出如下内容:

```
➜  Galen-Demo galen config
Created config file: /home/Galen-Demo/galen.config
```
这时，在您的Project根目录下自动生成一个名为`galen.config`的文件，就是Galen的配置文件，你可以修改具体的配置信息，此处使用初始值。

#### Step 4. 执行测试并查看报告

命令行执行测试有两种命令方式：
- 第一种：执行test suite：`galen test <TestSuite_name> --htmlreport <ReportDirectory_name>`
- 第二种：Check spec文件：`galen check <File_name> --url <url> --size <dimension> --htmlreport <ReportDirectory_name>`

由于我们当前还没有test suite，所以这里选择第二种执行方式。
```
galen check specs/welcomePage.gspec --url http://testapp.galenframework.com/ --size 1024x768  --htmlreport Reports
```

这时，程序会按照config文件中的默认配置，自动launch firefox浏览器，打来测试网站。然后按照specs文件中的布局规格进行check，最终自动在Project根目录下生成一个名为Reports的文件目录，执行结果就记录在`report.html`文件中，它长这样：
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-012.png" align="center"></p>
</center>

就这样，我们Galen测试环境就Run起来了。

### 二：使用Test Suite
---
和大部分测试一样，我们可以把一组相关的测试封装成一个Test suite，比如一组具有相同测试目的或运行在同一个环境下的测试就可以组成一个Test suite。Galen有自己定义[Test Suite](http://galenframework.com/docs/reference-galen-test-suite-syntax/)的语法规则，本文选用JavaScript作为脚本语言，因此一个`.test.js`文件就是一个Test Suite。

在Suite中，我们设计一个测试Case：
```
分别验证页面在Mobile、Tablet和Desktop上的布局是否与spec中定义的布局规格一致。 
```
#### Step 1. 创建test目录
在工程`Galen-Demo`根目录下创建一个test文件夹，用来存放测试脚本。

#### Step 2. 添加test
在`test`文件夹下添加`test01.test.js`文件。编写如下测试代码：
```
function Device(deviceName, size, tags) {
    this.deviceName = deviceName;
    this.size = size;
    this.tags = tags;
}

this.devices = {
    mobile:  new Device("mobile", "450x700", ["mobile"]),
    tablet:  new Device("tablet", "600x800", ["tablet"]),
    desktop: new Device("desktop", "1024x768", ["desktop"])
};

forAll(devices, function () {
    test("Welocome page on ${deviceName}", function (device){
        var driver = createDriver("http://testapp.galenframework.com/",
            device.size,
            "chrome");

        checkLayout(driver, "specs/welcomePage.gspec", [device.tags]);         		 driver.quit();
    });
});
```
以上脚本用来测试同一个网页分别在mobile、Tablet和Desktop上的布局情况，因此作为一个test suite，保存在同一个`.test.js`文件中。

#### Step 3. 编写specs

这里已经有了`welcomePage.gspec`，用例暂时不对规格做出特殊要求，沿用之前的spec文件就好。

#### Step 4. 执行test suite并查看报告

使用以下命令执行test suite：
```
galen test test/test01.test.js --htmlreport Reports
```
程序会自动launch chrome浏览器，打来测试网站，执行 test01.test.js 中的代码，并按照specs文件中的规格进行check，最终自动在Project根目录下生成一个名为Reports的文件目录，执行结果就在`report.html`文件中，它长这样：
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-013.png" align="center"></p>
</center>



### 三：引入GalenPages
---
Galen提供了[GalenPages JavaScript API](http://galenframework.com/docs/reference-galenpages-javascript-api/)， 它是个轻量级的Selenium javascript框架。就是要将UI元素从Test cases中抽离，形成Page Object Model。这样，可读性更高，代码更易维护，同时亦可减少代码冗余。

与Selenium的Page Object不同的是，GalenPage有自己固定的格式： 
```
$page(pageName, primaryFields, [ secondaryFields ])
```

在此，我将设计两个测试Case：
```
Case 1：分别验证Login按钮在Mobile、Tablet和Desktop上的宽和高，以及按钮上的文字。
Case 2：验证Login按钮在Desktop上hover和没有hove时的颜色。
```

#### Step 1. 创建pages目录

在工程Galen-Demo根目录下创建一个pages文件夹，用来存放page object文件。

#### Step 2. 添加page object文件
在test文件夹下添加`welcomePage.js`文件，用来识别Login按钮元素，实现hover操作：

```
this.welcomePage = $page("welcome", {
    loginButton: "#welcome-page .button-login",

    hoverLoginButton: loggedFunction ("Hover login button", function (){
         this.loginButton.hover();
    })
});
```

#### Step 3. 添加pages spec文件
这里已经有了`welcomePage.gspec`，按照Case设计要求，更新spec文件，如下所示：

```
@objects
    login_button        #welcome-page .button-login

@set
    login_button_text                   Login

= Login btn =
    login_button:
        text is "${login_button_text}"

    @on *
        login_button:
            height 45px

    @on mobile
        login_button:
             width 300 to 350 px

    @on tablet
        login_button:
             width 75 to 80 px

    @on desktop
        login_button:
             width 75 to 80 px

    @on usual
        login_button:
            color-scheme 2% white, 0 to 1 % black, =79% #2d6ca2

    @on hovered
         login_button:
            color-scheme 2% white, 0 to 1 % black, < 30% #22A30B

```

#### Step 4. 在test文件中引入page
为了与二中的例子区分开，我们在test目录下新建一个test suite，命名为`test02.test.js`.

首先，来文件开头位置引入welcomePage.js文件。
```
load("../pages/welcomePage.js");
```

接着调用welcomePage.js中的变量和方法，实现Case 1：

```
forAll(devices, function () {
    test("Login Btn size of Welocome page on ${deviceName}", function (device){
        var driver = createDriver("http://testapp.galenframework.com/",
            device.size,
            "chrome");

        //测试中引用pageObject
        var welcomepage = new welcomePage(driver);
        if (!welcomepage.loginButton.exists()){
            console.log("loginButton element don't exist")
        }

        checkLayout(driver, "specs/welcomePage.gspec", [device.tags]);                             
        driver.quit();
    });

});
```

最后实现Case 2：

```
forOnly(devices.desktop, function () {
    test("Login Btn color of Welocome page on desktop", function (device){
        var driver = createDriver("http://testapp.galenframework.com/",
            device.size,
            "chrome");

        //测试中引用pageObject
        var welcomepage = new welcomePage(driver);
        logged("Checking color for login btn", function () {
            checkLayout(driver, "specs/welcomePage.gspec", ["usual"]);
        });

        logged("Checking color for highlighted login btn", function () {
            welcomepage.hoverLoginButton();
            checkLayout(driver, "specs/welcomePage.gspec", ["hovered"]);
        });

        driver.quit();
    });

});
```

#### Step 5. 执行test suite并查看报告
使用以下命令执行test suite：
```
galen test test/test02.test.js --htmlreport Reports
```
程序会自动launch chrome浏览器，打来测试网站，执行 test02.test.js 中的代码，并按照specs文件中的规格进行check，最终自动在Project根目录下生成一个名为Reports的文件目录，执行结果就在`report.html`文件中，它长这样：
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-015.png" align="center"></p>
</center>



### 四：数据与测试分离

在前面的介绍中，我们将`devices`定义在每个test suite中，并且在每个test Case中独立调用`createDriver`方法来创建Driver。如此代码冗余太多，并且当需要增加或修改device、broswer和url时，需要重新维护每一个test suite和test，维护成本太高。因此，我们需要将数据与测试分离。

#### Step 1. 创建devices文件

在test目录下创建`devices.js`, 将设备信息写进去。这样，以后无论是增加还是修改设备类型，都只需要维护这一个文件。

```
function Device(deviceName, size, tags) {
    this.deviceName = deviceName;
    this.size = size;
    this.tags = tags;
}

this.devices = {
    mobile:  new Device("mobile", "450x700", ["mobile"]),
    tablet:  new Device("tablet", "600x800", ["tablet"]),
    desktop: new Device("desktop", "1024x768", ["desktop"])
};
```

#### Step 2. Set Environment

在test目录下创建`env.js`, 将createDriver封装在这个单独的文件里。这样在Case中只需要调用这个文件。大大减少代码冗余。

```
load("devices.js");

var url = "http://testapp.galenframework.com/";
var browser = "chrome";

function setEnv(device) {
    return driver = createDriver(url,
        device.size,
        browser);
}
```

#### Step 3. 在Case中引入Device和Set Env

为了对比，这里我们将test02.test.js拷贝一份，命名为`test03.test.js`。并在test03.test.js中引入Device数据和Set Env方法。用例设计不变。

```
load("devices.js");
load("env.js");
load("../pages/welcomePage.js");

forAll(devices, function () {
    test("Login Btn size of Welocome page on ${deviceName}", function (device){
        var driver = setEnv(device);

        var welcomepage = new welcomePage(driver);
        if (!welcomepage.loginButton.exists()){
            console.log("loginButton element don't exist")
        }

        checkLayout(driver, "specs/welcomePage.gspec", [device.tags]);
        driver.quit();
    });

});

forOnly(devices.desktop, function () {
    test("Login Btn color of Welocome page on desktop", function (device){
        var driver = setEnv(device);

        var welcomepage = new welcomePage(driver);
        logged("Checking color for login btn", function () {
            checkLayout(driver, "specs/welcomePage.gspec", ["usual"]);
        });

        logged("Checking color for highlighted login btn", function () {
            welcomepage.hoverLoginButton();
            checkLayout(driver, "specs/welcomePage.gspec", ["hovered"]);
        });

        driver.quit();
    });

});
```

#### Step 5. 执行test suite并查看报告
使用以下命令执行test suite：
```
galen test test/test03.test.js --htmlreport Reports
```
不难发现，其运行方式和执行结果与之前完全一致：
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-016.png" align="center"></p>
</center>


### 五：使用Selenium Grid进行分布式测试
---

首先介绍一下grid ，selenium grid 是一种执行测试用例时使用的包含不同平台（windows、Linux、Android）的框架，并且

这些平台是由一个中心点控制，这个中心点称之为HUB，而那些不同的平台称之为NODE。


*未完待续。。。。。*

*本文使用JavaScript作为编码语言，详情请参考[《使用JavaScript 编写Galen 测试》](http://julysxy.com/blog/2018/01/17/galen-with-javascript/)*)。






