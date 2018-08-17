---
layout: post
title: Android APP性能测试浅析
date: 2017-7-25
header-img: "../img/header/Home1.jpg"
categories: blog
tags: [APP测试]
description: APP性能问题一般分为：连接超时、闪退、卡顿、崩溃、黑白屏、网络劫持、交互性能差、CPU使用率问题、内存泄露等。针对这些性能问题，Android App性能测试应该覆盖......
---
### Android APP性能测什么？
APP性能问题一般分为：连接超时、闪退、卡顿、崩溃、黑白屏、网络劫持、交互性能差、CPU使用率问题、内存泄露等。针对这些性能问题，Android App性能测试应该覆盖以下测试项：
1. 资源消耗
2. 内存泄露
3. 网络流量消耗
4. APK安装及启动耗时
5. 电量功耗
6. 移动终端相关资源利用率
7. 帧率
8. 渲染

<center>
    <p><img src="{{site.baseurl }}/img/app-performance/image-001.png" align="center"></p>
</center>

详细分析如下：
<center>
    <p><img src="{{site.baseurl }}/img/app-performance/image-002.png" align="center"></p>
</center>

除此之外，还有一些参考指标。
<center>
    <p><img src="{{site.baseurl }}/img/app-performance/image-003.png" align="center"></p>
</center>

### Android APP性能测试工具：

基于Android APP测试，有很多性能测试工具，有Android官方的，也有第三方的。但是工具的原理都是基于调用android底层的一些api来获取测试数据。
<center>
    <p><img src="{{site.baseurl }}/img/app-performance/image-004.png" align="center"></p>
</center>

### Android APP性能测试步骤：

1. 设计场景 ：手工或自动化工具
2. 获取数据：可获取的数据包括：内存、CPU、电量功耗、hprof (内存泄露分析文件)、响应时间等。配合手工或自动化工具来获取数据（最好多取几次，并且每次配合不同的设备取平均值）作为最后的对比分析。
3. 结果分析 ：拿到数据后，分析哪些模块的数据异常，再去Check code来定位问题

### Android APP测试方法：

#### 1. 压力测试：

APP压力测试是在强负载（大数据量、大量并发用户等）下，模拟APP的软硬件环境的测试，查看APP在峰值使用情况下操作行为，从而有效地发现APP的功能隐患、测试系统是否具有良好的容错能力和可恢复能力。压力测试分为高负载下的长时间（如24小时以上）的稳定性压力测试和极限负载情况下导致系统崩溃的破坏性压力测试。通过压力测试，可以更快地发现内存泄漏问题，还可以更快地发现影响系统稳定性的问题。压力测试法用来测试目标系统在一定饱和状态下，例如CPU、内存等在饱和状态下、系统能够处理的session的能力，以及系统是否会出现错误。

例如：测试Android APP，耗时2小时，通过Google原生测试工具monkey对APP进行模拟用户随机操作测试，根据用户选择的频率输入大量点击，滑动等操作事件及导航事件等伪随机事件，让APP在一个稳定的压力负荷下运行，同时检测应用的各项运行参数。

#### 2. 遍历测试：

Android APP最常见的测试就是菜单遍历，就是反复遍历菜单N次，可以理解为遍历APP的每个activity。Activity是Android应用层开发的四大组件之一，主要负责和用户交互部分，有自己的生命周期，在其上可以布置按钮，文本框等各种控件，简单来说就是Android的UI部分。遍历activity就是每次获取当前activity所有的view，然后每个view都有若干操作，基于这些操作生成树状结构，进行遍历，每次执行一个操作后，update当前activity的view。

例如：耗时2小时，通过脚本以用户选择的操作对APP进行循环遍历APP菜单进行测试，同时检测APP的各项运行参数。

#### 3. 空载测试：

空载测试是指不介入负载的情况下，对APP进行测试。APP的空子测试常常是为了测试APP后台运行期间的CPU占有率，内存消耗，流量及电量消耗等。

例如：耗时30分钟，启APP后按HOME键退出，让应用在后台运行，同时检测应用的各项运行参数。

