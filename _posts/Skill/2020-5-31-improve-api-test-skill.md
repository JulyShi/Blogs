---
layout: post
title: 四步教你变成API测试高手
date: 2020-05-20
header-img: "../img/header/Home6.jpg"
categories: blog
tags: [测试锦囊]
description: 四步教你变成API测试高手
---



>年夜饭时，我们每个人都要立下新年的Flag。
>
>好友sasha说，“我今年的目标是学好自动化测试。”大家不由地哈哈大笑（这是她连续三年立的Flag了，可从未实现）。她不好意思地说，“听了那么多道理，热血沸腾、感觉好有道理，可还是学不好自动化测试，为什么？” 
>
>“因为你只有Flag、没有行动计划、更没有行动呀~”我一针见血的补充到。

在制定计划时，我绝不允许时间跨度太大、反馈周期太长，因为我知道自己的劣根性。就像小时候老师布置的作业，不管假期是5天还是2天，我一定会拖到最后一天晚上才去做。所以一个季度的计划, 我是这样来做的：

* 分解任务：每个任务设计一个验收标准
* 分解时间：一个季度的计划，首先细分到月、再由月细分到周、最后由周细分到2-3天

以我之前引导毕业生小贾零基础学习API测试为例，学习总共分为4个阶段，每个过程都应该结合基础知识的学习、工具的使用、以及项目的实践：
<center>
    <p><img width="100%" src="{{site.baseurl }}/img/learning-skill/img-005.jpg" align="center"></p>
</center>

#### 第一阶段

学习HTTP的基础知识，推荐阅读[《图解HTTP》](https://book.douban.com/subject/25863515/)，这是一本200多页图文结合的书，既有趣又好啃。经过实际验证，项目上的Dev同学需一个周末就能读完全书，而小贾需要5个工作日。读书过程中，小贾用Xmind记录了读书笔记。之后，又用一个午饭的时间与团队同学进行了分享，同学们提出了很多问题，小贾发现，原来自己在读书过程中，有那么多问题没有思考透彻。

自动化工具分为很多种：①可视化工具；②DSL型脚本类工具；③编程类工具；⑤云平台。[Postman](https://learning.postman.com/docs/postman/launching-postman/introduction/)属于第一种，无论是用来做手工测试，还是自动化测试，它都是一个绝佳的选择。于是，我让小贾这样一步步深度学习Postman。

* 首先，用两天时间学习“用Postman进行手工测试的基本方法”，包括：安装、Navigating、常用HTTP请求的结构（Method/URL/Request Header/Reqest Body/Request/Params）、Response 、Save等
* 其次，用三天时间学习“Postman高阶使用方法”，包括：Authorization、Collection、全局变量、参数化、group、setting、Cookies等
* 接着，用两天时间学习“用Postman进行自动化测试的方法”，包括：Mock、pre-request脚本、test脚本、runner等
* 最后，用两天时间学习“通过newman将postman脚本集成到CI”

当然，学习工具万不可脱离实践。小贾通过用Chrome调试工具去抓取项目的API来反复练习postman的使用。最终不仅学会了Chrome Network和postman的使用，还帮项目编写了一个服务的API自动化测试。

这个过程一共花了9天时间。第10天，小贾以项目上的API为例，向团队同学分享了Postman的使用。团队小伙伴们惊呼“哇，原来postman这么强大！”

#### 第二阶段：

Tech Lead给小贾分享了一些HTTPS的材料，她大概花了两天时间读完，之后来跟我交流，发现其中很多知识点不是特别明白。作为一名毕业生QA，理解到一些基础已经很不错了。于是我让小贾暂时挂起了HTTPS的学习。

小贾说，postman不用写太多代码，完全没有自动化测试的感觉，不过瘾。于是，我帮她构建了一个编程类的支持BDD的API自动化框架（supertest+mocha+chai）。她用一个礼拜的时间，将之前写在postman上的自动化脚本迁移到新框架上来。看到脚本跑起来的那一刻，小贾面陋喜色地告诉我，原来虽然工具形式不同，测试的思想都是完全一样的，大致都分为：

1. 构造URL及参数（难点是环境管理）
2. 构造Method
3. 构造Request Header 
4. 构造Auth或Cookies
5. 构造Request Body（难点是数据管理）
6. 发送请求
7. 验证response status
8. 验证response body

可转眼又有问题了，“我现在会用这个框架，可我不能一直从你那儿clone呀，我怎样才能徒手搭建一个框架呢？”

于是，接下里的几天里，小贾从supertest/mocha/chai官网上学习如何搭建框架。后来，她还认真地写了一个详尽的Readme。

#### 第三阶段：

RESTful 作为目前最流行的 Web API 设计规范，是小贾不得不去了解的东西。我推荐她阅读了阮一峰的博客[《RESTful API 最佳实践》](http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html)，站在巨人的肩膀上，远比啃完一本厚厚的书来的方便快捷。

在第二个阶段中，小贾遇到了很多困惑：

* 为什么supertest可以发送http请求
* mocha如何实现BDD
* chai提供的api不够丰富，需要自己写一些js代码来验证返回结果，可她不会写太厉害的javascript代码
* npm和Nodejs又是个什么关系
* 如何将测试集成在CI上
* 测试应该每天启动一次，还是每次提交就启动

这些问题都是小贾第三个阶段的学习目标。学会使用自动化测试，只能算是在自动化测试的道路上走了一小半，学会工具背后的原理，才知如何变通、才能举一反三。

#### 第四阶段：

业界主流的自动化框架有很多，为什么要选择A而不是B, 绝不是喜好问题。我们需要对这些工具从不同维度做横向比较，了解每个工具的优劣势。才能在合适的场景选择最合适的自动化工具。下图就是我整理的一个样例（这不是本文的重点，所以直截取了一部分信息）。
<center>
    <p><img width="100%" src="{{site.baseurl }}/img/learning-skill/img-006.jpg" align="center"></p>
</center>

---

归纳和总结非常重要。积累的知识越多，越需要总结，比如：

* 功能型API 与 数据型API的测试有何不同？
* 服务内API 和 服务间API的测试有什么不同？
* 同步请求 和 异步请求 分别应该如何测试？
* API返回了结果，可如何才能确定结果是对的？
* 如何通过API组织业务场景的测试？


