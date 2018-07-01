---
layout: post
title: 使用JavaScript 编写Galen 测试
date: 2018-01-17
categories: blog
tags: [Web Responsive Testing]
description: Galen支持JavaScrpt和Java两种脚本语言。本文选用JavaScrpt编写Galen测试脚本，Galen提供了很多API，你可以去查看官方文档了解详情。当然，你也可以选择Java编写脚本。

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






