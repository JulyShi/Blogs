---
layout: post
title: 使用Galen进行Responsive Web自动化测试
date: 2018-01-15
categories: blog
tags: [Web测试]
description: Galen是一款开源的测试框架，最初是用来测试Web应用的页面布局的。但是到现在，Galen已经是一款完整的功能测试的自动化测试框架了。

---
### Galen是什么
---
[Galen](http://galenframework.com/) 是一款开源的测试框架，最初是用来测试Web应用的页面布局的。但是到现在，Galen已经是一款完整的功能测试的自动化测试框架了。它支持[Javascript](http://galenframework.com/docs/reference-javascript-tests-guide/) 和 [Java](http://galenframework.com/docs/reference-java-tests/)两种脚本语言.


### Galen是如何工作的
---
使用Galen进行[Responsive Web](http://julysxy.com/blog/2018/01/14/responsive-web-testing/)测试，其工作原理为以下几步：
1. 在浏览器打开Web页面
2. 调整浏览器窗口至目标尺寸
3. 根据Galen specs文件中预先定义的标准来测试页面布局
4. 输出测试报告


### 安装 Galen
---
在安装Galen之前，请确保您已经安装了Java version 1.8。

#### Step 1. 安装Galen
1. 通过npm安装：```sudo npm install -g galenframework-cli```
2. 在OS X 和 Linux平台手动安装：在[Galen官网](http://galenframework.com/download/)下载安装包，解压到你的目录。然后进入目录，执行以下命令：```sudo ./install.sh```
3. 在Windows系统安装Galen：在windows系统，为了执行<code>galen.bat</code>文件，你需要手动设置环境变量。详情请参考文档：[How to configure Galen in Windows](http://mindengine.net/post/2014-01-08-configuring-galen-framework-for-windows/#.Wlx7x1T1U0o)。

#### Step 2. 检查版本
安装完成后，请用`galen -v`命令确认Galen版本。



### Galen 测试 Level 1：编写第一个测试
---
在讲Galen之前，我们先小试牛刀，创建一个简单的测试。

#### Step 1. 创建Project目录

在本地创建目录，命名为`Galen-Demo1`。在Project中创建子目录`specs`。

#### Step 2. 编写specs

在specs中创建`home-page.gspec`文件。我们的测试对象为官方提供的[测试网页](http://samples.galenframework.com/tutorial1/tutorial1.html)，测试其header的height是否在30到100px之间。因此，`home-page.gspec`文件编写如下：

```
@objects
    header        id        header

= Main section =
    header:
        height 30 to 100px
```

#### Step 3. Galen Config

在Project根目录下执行命令`galen config`, 命令输出如下内容:

```
➜  Galen-Demo1 galen config
Created config file: /home/Galen-Demo1/galen.config
```
这时，在您的Project根目录下自动生成一个名为`galen.config`的文件，就是Galen的配置文件，你可以在里面修改配置信息（此处无需修改，使用初始值）。

#### Step 4. 执行测试并查看报告

在命令行执行测试有两种命令方式：
1. 执行test suite：`galen test <TestSuite_name> --htmlreport <ReportDirectory_name>`
2. check specwen文件：`galen check <File_name> --url <url> --size <dimension> --htmlreport <ReportDirectory_name>`

由于我们当前还没有test suite，所以这里选择第二种方式。
```
galen check specs/home-page.gspec 
  --url http://samples.galenframework.com/tutorial1/tutorial1.html 
  --size 1024x768 		
  --htmlreport Reports
```
自动launch firefox浏览器，打来测试网站，然后按照specs文件中的规格进行check，最终自动在Project根目录下生成一个名为Reports的文件目录，执行结果就在`report.html`文件中，它长这样：
<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-011.png" align="center"></p>
</center>

到这里，我们的第一个简单的测试就完成了。

### Galen 测试 Level 2：使用Test Suite
---
和大部分测试一样，我们需要把一组相关的测试封装成一个Test suite, 比如一组具有相同测试目的或运行在同一个环境下的测试就可以组成一个Test suite。对于Galen来说，一个`.test.js`文件就存放一个Test suite（*这里选的是JavaScript*）。更多详情，请参考官方文档 - [Galen Test Suite Syntax](http://galenframework.com/docs/reference-galen-test-suite-syntax/)。

#### Step 1. 创建test目录
在工程`Galen-Demo1`工程的根目录下创建一个test文件夹，用来存放测试脚本。

#### Step 2. 添加test
在test文件夹下添加`test.test.js`文件。（JavaScript脚本的具体写法不在本文详述，详情请参考[]())。

```
// Lets create a separate variable describing all devices 
// as it might be used by other tests as well
this.devices = {
  mobile: {
    deviceName: "mobile",
    size: "400x700"
  },
  tablet: {
    deviceName: "tablet",
    size: "600x800"
  },
  desktop: {
    deviceName: "desktop",
    size: "1024x768"
  }
};

forAll(devices, function (device) {
  test("Home page on ${deviceName}", function (device){
    var driver = createDriver("http://galenframework.com",
                              device.size, 
                              "chrome");
  });
});
```

<center>
    <p><img src="{{site.baseurl }}/img/responsive-web-testing/image-012.png" align="center"></p>
</center>

---
### 使用JavaScript 编写Galen 测试

Galen支持JavaScrpt和Java两种脚本语言。本文选用JavaScrpt编写Galen测试脚本，Galen提供了很多API，你可以去查看[官方文档](http://galenframework.com/docs/reference-javascript-tests-guide/)了解详情。当然，你也可以选择[Java编写脚本](http://galenframework.com/docs/reference-java-tests/)。

#### Preparation
* Step 1: 创建Project，命名为`Galen-Demo`。
* Step 2: 在工程`Galen-Demo`工程下创建一个test文件夹，用来存放测试脚本。
* Step 3: 所有的JavaScrpt脚本以`*.test.js`命名。

---
#### 1. 定义测试

使用`test`方法定义测试。第一个参数代表test name，第二个参数代表test callback。

```
test("First test", function () {
    // here goes a test code
    console.log('This is first test')
});
```
---
#### 2. 创建 Driver
Galen提供了创建 driver的API，来唤醒浏览器。

```
createDriver( [ url, browserSize, browserType ] )
```
举个🌰：

```
test("Home page test on mobile device", function () {
  var driver = createDriver("http://julysxy.com",
                            "640x480",
                            "chrome");
});
```
---
#### 3. 检查 Layout
Galen提供了检查 Layout的API，来check page的布局。

```
checkLayout( driver, specFile, [ tagsToInclude, tagsToExclude ] )
```

其中，specFile指`specs/home-page.gspec`文件

在脚本中调用checkLayout API如下：

```
test("Home page test on mobile device", function () {
  var driver = createDriver("http://julysxy.com",
                            "640x480",
                            "chrome");
  checkLayout(driver, "specs/home-page.gspec", [device.deviceName]);
});
```
---
#### 4. 使用参数
Galen提供了`forAll`的方法来给测试添加参数。有两种参数化的方式：二维数组和结构体。

使用二维数组的🌰：

```
forAll([
  ["mobile", "400x700"],
  ["tablet", "600x800"],
  ["desktop", "1024x768"]
], function (deviceName, size){
  test("Home page on " + deviceName + " device", function (deviceName, size){
    var driver = createDriver("http://julysxy.com",
                              size, 
                              "chrome");
  });
});
```
使用结构体的🌰：

```
// Lets create a separate variable describing all devices 
// as it might be used by other tests as well
this.devices = {
  mobile: {
    deviceName: "mobile",
    size: "400x700"
  },
  tablet: {
    deviceName: "tablet",
    size: "600x800"
  },
  desktop: {
    deviceName: "desktop",
    size: "1024x768"
  }
};

forAll(devices, function (device) {
  test("Home page on ${deviceName}", function (device){
    var driver = createDriver("http://galenframework.com",
                              device.size, 
                              "chrome");
  });
});
```
---
#### 5. Page Object Model

Galen提供了`GalenPages API`，来实现page object model。更多信息请参考[GalenPages API](http://galenframework.com/docs/reference-galenpages-javascript-api/)。举个🌰：

```
this.LoginPage = function (driver) {
  GalenPages.extendPage(this, driver, {
    emailTextfield: "input.email", // css locator
    passwordTextfield: "xpath: //input[@class='password']", // xpath locator
    submitButton: "id: submit", // id locator

    loginAs: function (userName, password) {
      this.emailTextfield.typeText(userName);
      this.passwordTextfield.typeText(password);
      this.submitButton.click();
    }
  });
};

var loginPage = new LoginPage(driver);
loginPage.loginAs("testuser@example.com", "password");

```

---
#### 6. Events

Galen提供的events handler有：

* Before test suite：在每个test suite执行之前执行
* After test suite：在每个test suite执行完之后执行
* Before test：在每个test执行之前执行
* After test：在每个test执行完后执行


```
beforeTestSuite(function () {
  // here goes the code
});

afterTestSuite(function () {
  // here goes the code
});

beforeTest(function (testInfo) {
  // here goes the code
});

afterTest(function (testInfo) {
  // here goes the code
});

```

---
#### 7. Report

Galen的Report是支持自定义的，可已经Report输出到控制台，也可以输出到文件。举个🌰：

```
test("Hierarchical reporting test", function () {
  logged("Doing some restful request", function (report) {
    report.info("POST http://example.com");
    // some code here
    logged("Got 200 response", function () {
      // ... some more code here
    });
  });
  
  this.report.info("Take a look at these attachments")
    .withAttachment("page.html", "/path/to/file/page.html");
});
```
---
#### 8. Data Providers

Galen的Report是支



---
#### 9. 截图
Galen提供了`takeScreenshot`方法来截图。

```
var screenshotFile = takeScreenshot(driver);
```


---
### Galen-Demo

请移驾到我的github下载[Galen-Demo](https://github.com/JulyShi/Galen-Demo)，开始你的Galen探索之旅吧。






