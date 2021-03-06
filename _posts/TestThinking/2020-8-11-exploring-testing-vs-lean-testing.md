---
layout: post
title: 探索性测试 VS 精益测试
date: 2020-8-11
categories: blog
header-img: "../img/header/Home7.jpg"
tags: [测试锦囊]
description: 探索性测试 VS 精益测试

---

2020年7月底，客户方的十几位产品人来ThoughtWorks进行经验交流，公司准备了好几个议题，我有幸负责《ThoughtWorks测试方法论与实践的交流》。在方法论部分，我着重分享了“探索性测试”和“精益测试”；在实践部分，我分享了在敏捷和DevOps开发模式下该如何测试。

这次的分享出乎意料地成功，过程中引发了很多有趣的讨论，会议持续了1.5小时，大家仍意犹未尽。

不料，前两天，客户又邀请我们再做一次线上交流，欲将以上内容分享给公司更多的同事。于是，我就“探索性测试”和“精益测试”两个方法论的部分写一写，来进一步推敲其中的细节，希望能给第二次的分享带来更多不一样的体验。

---

## 探索性测试

我于2019年12月22日发表了一篇名为《[“探索性测试”在敏捷项目中的运用](https://mp.weixin.qq.com/s?__biz=MzIwMjY0NzgwNQ==&mid=2247484403&idx=1&sn=51bf7b30c49d112883e8711b4f162ce5&chksm=96da3261a1adbb77c23aaf6b8ec6ecc9017c4078c5c383362e7d39fb1365ff7bcea82a93288e&token=856926690&lang=zh_CN#rd)》的公众号推文。后来，这篇文章有幸被“清华大学出版社”、“水木IT社区”、“DevOps”、及“ThoughtWorks洞见”公众号申请转载。可当我再次细读文章时，却发现部分例证其实可以更精准，无奈公众号推文无法修改，我只好借这篇文章重新阐述。不过本文只从部分视角入手，更多内容，仍建议阅读[上一篇文章](https://mp.weixin.qq.com/s?__biz=MzIwMjY0NzgwNQ==&mid=2247484403&idx=1&sn=51bf7b30c49d112883e8711b4f162ce5&chksm=96da3261a1adbb77c23aaf6b8ec6ecc9017c4078c5c383362e7d39fb1365ff7bcea82a93288e&token=856926690&lang=zh_CN#rd)。

### 如何理解探索性测试

​举个例子，为了7月底的这次经验交流会，ThoughtWorks计划专门为参会人员定制一款马克杯。供应商设计并研发好了样品，提供给我们验收。

​<center>
    <img width="50%" src="{{site.baseurl }}/img/exploring&lean-testing/img-001.jpg" align="center">
</center>

传统测试会如何验收呢？

首先，阅读产品需求规格说明，理解需求。

> **材质** ：陶瓷
> 
> **容量** ：250ml
>  
> **外观** ：(外)绿色釉面、(里)米色釉面、米色Logo、标注容量 
> 
> **功能**：可盛白开水、茶、咖啡、牛奶等一般热饮

然后，根据需求规格设计测试用例。我们运用“等价类”和“边界值”测试方法设计了三组测试用例，然后用仪器检测材质；用眼睛观察UI；用实际装水、咖啡、茶、牛奶的过程来验证功能。最后，逐一执行测试用例，我们发现，有一条UI的用例测试不通过。

| Test Suite          | Test No.  | Test Cases                                   |Test Result             |
|:------------- |:-------:| :----------------------------:|:--------------:|
| 材质测试            | 1             | 材质为陶瓷                                    | Passed                 |
| UI测试               | 1             | 外观为绿色釉面+米色Logo+容量标记 | Passed                 |
|                         | 2            | 里面为米色釉面                               | Failed                 |
| 功能测试            | 1             | 能盛白开水250ml                          | Passed                 |
|                         | 2            | 能盛咖啡249ml                             | Passed                 |
|                         | 3            | 能盛茶251ml                                | Passed                 |
|                         | 4            | 能盛牛奶并加热                             | Passed                 |


对于这个例子，我们如何运用探索性测试验收呢？

和传统测试一样，首先需要根据需求设计测试、然后逐一执行。然而，探索性测试到这里并没有结束。

* 在测试执行过程中，我们有了新的发现，进而引发出一些思考：

	* 现象：盛完茶水，杯子里好多茶渍
	* 思考：能不能刷干净？

* 与此同时，我们忽然想到一些特殊的场景：

	* 上班的时候，我常常要端着杯子辗转于各个会议室，会一开就是一个多小时。  250ml容量够不够？没有盖子，水会不会容易撒出来？

这些过程中想到的点都还没有得到验证，因此需要将其添加到测试用例中。**与传统测试不同的是，设计用例的时候，我们并不一定清楚期待结果，而是要根据实际发生的结果去判断能否接受**。比如，盛完茶水，杯子里好多茶渍，可是稍微一刷便焕然一新，那么就是可接受的结果。而如果，我使劲了浑身解数，茶渍依然纹丝不动，那这个马克杯只能当做一次性的了，着实可惜、不可接受。而对于第二个特殊场景，250ml容量的确不够，没有盖子，水也的确会容易洒出来。可它们真的是问题吗？针对用户的特殊需求，换个容量大一点儿的、带盖子的杯子，或许才是解决问题的最佳选择。

相比之下，传统测试的过程是线性发生的，“先设计、再测试”，很多公司甚至要求在设计用例的时候就达到100%覆盖。而探索性测试是环状的，**主张学习**，强调**同时展开测试设计、执行、并从结果中获得反馈，从而持续优化测试**。这是**一种主张即兴发挥、快速试验、快速学习和动态调整的测试思维方式**，而不是某一种具体的测试技术。
​<center>
    <img width="100%" src="{{site.baseurl }}/img/exploring&lean-testing/img-002.jpg" align="center">
</center>
​
传统测试帮助我们交付满足要求的产品；而**探索性测试则是为了交付更高质量的产品**。
​
### 运用“漫游地图模型”梳理测试策略
​
《探索性测试实践之路》一书提到一种“漫游地图模型”，它将测试比拟为游客在城市中漫游，将其分为商业区、历史区、旅游区、破旧区、娱乐区、及旅馆区。

*  商业区：人们在商业区完成一天的工作
*  历史区：很多城市都有历史古迹，很多游客往往为了追随历史古迹而来
*  旅游区：旅游区大部分只有游客才去，而当地人会尽量避开这些拥堵的地方
*  破旧区：破旧区是一个城市最不受欢迎的地方，可能存在违法乱纪的现象
*  娱乐区：游客经历了景点和名胜古迹的游览之后，需要在娱乐区休闲和放松一下，从而使假期变的张弛有度
*  旅馆区：游客经过了繁忙的旅程之后，需要在旅馆区休息，恢复体力


“漫游地图模型”帮助测试人员规划和分解被测产品、制定测试策略。

*  ​首先，在白纸上画出商业区、历史区、旅游区、破旧区、娱乐区、及旅馆区，代表软件系统的6各区域
*  接着，整理出软件的功能，将每个功能写在一张卡片上
*  ​最后，将功能卡片贴到对应的区域
​​<center>
    <img width="100%" src="{{site.baseurl }}/img/exploring&lean-testing/img-003.jpg" align="center"></center>

​
产品分解之后，究竟该如何测试呢？

* **商业区**：用户花钱买软件就是因为软件的特性使得他们的业务得以完成。商业区测试类型着重于测试软件的主要特性，因此，需要频繁地进行回归测试，以持续保证这些主要特性的可用性。由于具有很高的重复性，“商业区”的测试将是自动化测试关注的重点
* **旅游区**：对于软件，有些特性对新用户更有吸引力。这一点也涉及到部分用户权限的测试
* **历史区**：软件也一样具有前版本的历史遗留代码，这个区域的测试目的就是测试遗留代码和遗留缺陷。这一点在遗留系统改造项目中体现的尤为明显。”新开发特性不影响原有特性”将成为测试重点
* **旅馆区**：当软件“休息”时，它实际上还是非常忙碌的。旅馆区模型关注的是一些辅助功能，比如软件后台运行等
* **娱乐区**：对于软件，比如一个购物网站，商业区是搜索商品、加入购物车、生成订单、付款等，而其娱乐区就是指漂亮美观的UI、友好的用户界面等。这就需要关注到用户体验和兼容性测试
* **破旧区**：不同于旅游，软件的破旧区可能存在严重的缺陷、安全及性能问题。这部分可能是软件的重灾区，需要关注异常测试、性能测试和安全测试

### 运用探索性测试指导自动化测试
​
自动化测试，是指将人为驱动的测试行为转化成机器、工具或者代码执行的一种测试方法。

我们通常将需求明确的、业务稳定的、需要重复回归测试的部分用自动化测试来实现；而将需求不明确、变动频繁的、无需重复测试的、或者需要日志等特殊形式验证结果的部分，配合探索性测试思路，通过手工测试来完成。

但自动化测试与手工测试并不是相互割裂的，而存在一个相互转化的过程。​仍然以上面定制的马克杯为例：
​
​​​<center>
    <img width="100%" src="{{site.baseurl }}/img/exploring&lean-testing/img-004.jpg" align="center"></center>
​
* 首先，需求规格中明确提到的点往往是软件的核心功能，需求明确、业务稳定、也需要通过反复测试来保证这些功能的可用性，因此是自动化测试的首选
* 其次，如上面讲到的，在测试过程中，我们有了新的发现，或者想到一些特殊场景。在最开始，我们并不清楚这些新学习到的点的实际结果会是怎么样的，因此需要手工测试，测试的步骤和期待结果都需要探索
* 接着，在手工执行的过程中，我们最终证实了一些用例。比如，盛完茶的杯子，确定是能被刷干净的。那么，我们就可以直接将这个已经确定的点添加到自动化测试脚本中
* 最后，有一些思考被证明的确是问题，但我们并不需要去解决它，也无需再去关注，直接舍弃就好了

---

## 精益测试

“精益测试”是ThoughtWorks 资深 QA 咨询师林冰玉提出的概念，她曾专门写过一篇博客《[精益测试](https://mp.weixin.qq.com/s/8UqbCZNmXttZhVvtXrFoiQ)》，也讲过直播课程[《ThoughWorks敏捷测试第三讲：精益测试》](https://app.ma.scrmtech.com/meetings-api/sapIndex/SapSourceData?pf_uid=7019_1254&sid=16238&source=2&pf_type=3&channel_id=779&channel_name=insights&tag_id=7066157a5b2dd0c0&appid=wx4bd00f95dd7c7ca1)。想要了解原汁原味的内容，建议回看录播。

而我，不仅是知识的搬运工，更希望阐述一些自己对于“精益测试”的理解。

### 如何理解精益测试

“精益测试”的理念是将“精益生产”与“测试”相结合。

精益生产来源于丰田的生产方式，其目标是控制库存量，减少生产过程中的浪费；旨在按需生产、用最少工作，创造价值。

测试要做到精益，就是要减少测试中的浪费，不能一味的追求测试覆盖率，大而全的测试覆盖本身就是一种浪费。因此，精益测试并不是一种具体的测试方法，而是一种思维，其价值主要是为了帮助团队制定合适的测试策略，让测试更有效。

对于“精益测试”的定义，我们应该这样理解：

>对能体现业务价值的点，做到有效的测试覆盖，减少浪费，从而以尽量少的成本交付高质量的软件。
    
​测试如何才能做到精益，如何才能避免浪费呢？

这就不得不提到精益测试的核心原则，我们将其总结为TAT：适时（Time）、适量（Amount）、精准（Target）。
​​​​<center>
    <img width="90%" src="{{site.baseurl }}/img/exploring&lean-testing/img-005.jpg" align="center"></center>

* **适时（Time）**：敏捷测试要求测试全程参与，让测试活动发生在敏捷软件开发生命周期的每个环节，而让每种类型的测试发生在它最该发生的时刻。比如，开发人员在开始实现一个故事卡之前，召集BA和QA一起做Kick Off，以帮助各个角色对需求达成一致的理解，避免在开始开发前就对需求产生误解。而在完成一张需求卡的开发之后、提交测试之前，一起做Desk check，按照故事卡上的验收标准逐条演示，这样就能避免问题要等到QA人员正式开始测试之后才被发现。
* **适量（Amount）**：不再盲目地追求100%测试覆盖，需要权衡利弊，把时间花在真正有价值的事情上，这也是精益的体现。我见过一些公司，将测试覆盖率作为QA人员的KPI，要求达到100%覆盖。最终花费了太多精力去测试一些并不那么重要的模块、或者花了更多精力在一些并不重要的自动化测试脚本的维护上。这必然造成极大的浪费。
* **精准（Target）**：精准测试通常是指根据代码改动所影响到的范围去针对性的测试。比如，当开发修复一个Bug之后，我们并不需要将整个系统重新测试一遍。正确的做法是，精准地分析出Bug本身、及Bug的影响范围，然后针对性地测试。其中，Bug本身的回归测试就是High level的测试，而影响范围则是Medium的测试。

### 如何做到精益测试

林冰玉提到了两个测试指导框架：测试四象限和测试分层。在这里，我想重点阐述自己对测试分层的理解。想要了解测试四象限，请阅读林冰玉的[原文](https://mp.weixin.qq.com/s/8UqbCZNmXttZhVvtXrFoiQ)。

要理解测试分层，首先要理解软件分层。阮一峰在他的博客中介绍过O'Reilly 出版过一本免费的小册子[《Software Architecture Patterns》](https://www.oreilly.com/programming/free/files/software-architecture-patterns.pdf)，里面介绍了软件分层架构。
<center>
    <img width="100%" src="{{site.baseurl }}/img/exploring&lean-testing/img-007.jpg" align="center"></center>

软件分层架构将软件分成若干个水平层，每一层都有清晰的分工，不需要知道其他层的细节。层与层之间通过接口通信。

* 表现层（Presentation Layer）：用户界面，负责视觉和用户互动
* 业务层（Business Layer）：实现业务逻辑
* 持久层（Persistence Layer）：提供数据，SQL 语句就放在这一层
* 数据库（Database Layer） ：保存数据

用户的请求依次通过这四层的处理，不能跳过其中任何一层。

软件分层架构为软件开发带来一定的好处，比如，不同技能的程序员可以独立分工，负责不同层的开发，这就是为什么我们会有前端开发和后端开发等多种开发角色；开发顺序也不受限制、只需要在各个层完成独立开发之后进行集成。

既然每一层可以独立开发，就必然能够独立测试。其他层的接口如果已经完成，可以直接与其集成进行测试；如果尚未完成，也可以通过模拟来解决，这就是测试分层。

<center>
    <img width="100%" src="{{site.baseurl }}/img/exploring&lean-testing/img-008.jpg" align="center"></center>

与软件分层不同的是，在分析测试时，我们将持久层和数据库层统一称为“数据层”。

* **表现层测试**：关注用户界面的互动和视觉，我们将其称为“UI测试”。

	* UI测试常常需要一些工具来辅助测试，比如，使用Galen进行响应式测试，验证页面是否能够根据浏览器窗口或屏幕大小等作出响应；使用一些图片或像素对比工具来测试UI是否与设计一致
	* UI测试还需要及时获得用户的反馈，我们可以通过给用户Showcase等形式，尽早地获取用户对于交互习惯的反馈

* **业务层测试**：关注业务逻辑的正常和异常情况。

	* 通过接口测试来验证业务逻辑。接口通常分为功能性接口和数据性接口，功能性接口主要为了实现某个业务功能，接口背后都是独立的业务逻辑块，通常我们需要画出模块业务流程图，然后通过给接口配置多组不同的测试数据来覆盖流程图中的不同路径；而数据接口更多地是为了数据传输，测试需要关注数据传输中的正确性、完整性、及加密等特殊场景
	* 由于接口测试需要在整个业务逻辑完成之后才能进行，因此，建议提前引入“单元测试”，即从一个方法、一个函数等程序中的最小可测单元开始测试

* **数据层**：数据层往往不需要单独测试，而是与接口集成在一起测试。举个例子：系统有两个接口，A用来创建表单，表单包含4个字段信息。B用来查看表单，其中1个字段加密显示。而在数据库中，除了表单的4个字段之外，还有2个新字段作为业务逻辑的过程值。因此，测试时，首先，我们需要测试A接口的创建逻辑，当接口返回成功时，去数据库查看存储的4个数据是否与接口入参一致，中间值的2个字段是否与预期一致。其次，测试B接口的查看逻辑，接口返回数据时，与数据库中的数据进行比较，以验证数据的逻辑处理效果。

除了对每一层单独进行测试，我们还需要测试各层之间的集成，这被称为端到端测试。

* **基于UI的端到测试**：模拟用户在页面进行一次操作引发的请求，验证请求从表现层最终到达数据层的过程中，业务逻辑、数据传输与存储的正确性。它更像一种前后端之间的集成测试。
* **基于业务流程的端到端**：测试用户从某个业务起点到终点所引发的一系列请求，从表现层到数据层的处理过程逻辑及数据转换
   
那么，在使用测试分层框架指导测试时，如何才能做到适时、适量、精准呢？
<center>
    <img width="100%" src="{{site.baseurl }}/img/exploring&lean-testing/img-009.jpg" align="center"></center>

* **适时**：就是指我们在完成每一层的代码开发之后，立即开始这一层的测试，而在完成每一层的集成之后，立即开始集成测试或端到端测试
* **适量**：从业务逻辑层到表现层，随着测试的依赖越来越多、逻辑和数据越来越复杂，测试的成本会逐渐增高，测试进度也相对滞后，因此要尽可能对较细颗粒度的测试进行更高程度的覆盖，而不是每一层都追求100%覆盖
* **精准**：越往底层的测试越接近代码，测试成本更低、执行速度更快、定位问题也更准确，但是不能突显出完整的价值链；越往上层的测试越接近业务，更能反应业务价值，但有着不够稳定、执行速度慢、问题定位难等不足。因此，要明确每一层的特点和测试目标，避免各层之间对相同的点进行重复测试，产生冗余。比如，一个用来做除法的功能，我们在接口测试中进行了分母为0的异常测试，就没有必要在基于UI的端到端测试中重新测试一遍

虽然理想情况下，我们希望分层测试的覆盖情况呈金字塔结构，但随着技术架构、系统特点、质量要求、团队技能水平等因素的不同，每种测试的比例也不尽相同，它很有可能呈现出蜂巢等其它结构。因此，需要根据项目具体情况，来确定每层测试的比例。 

--- 

## 总结
 
探索性测试和精益测试都可以被认为是一种测试思想，而并非某一种具体的测试项目或测试技术。既然是思想，就完全可以被应用于编写测试策略、设计自动化测试、或者进行功能测试、性能测试、兼容性测试等某一种具体的测试项中。

探索性测试帮助测试人员发散和拓展思路，发现更多关于产品的质量问题。而精益测试恰好帮助其进行有效收敛，将测试做到适时、适量和精准，让测试做到恰到好处以减少浪费。两者相辅相成、起到良好的杠杆作用。

在我看来，对于To B类型的产品，系统用户只有几个人，他们更关心的是产品能不能帮助他完成业务、从而来带利润。他们对产品质量的容忍性高、对系统易用性的诉求也不够强烈。因此，运用精益测试，有助于更高效地交付产品。而对于To C类的产品，用户往往千奇百怪，诉求也天马行空，产品中任何一个不太好用的点甚至都可能导致你失去一个用户。因此，To C类产品就是探索性测试大展身手地时候了。

---
延伸阅读：
* 《[“探索性测试”在敏捷项目中的运用](https://mp.weixin.qq.com/s?__biz=MzIwMjY0NzgwNQ==&mid=2247484403&idx=1&sn=51bf7b30c49d112883e8711b4f162ce5&chksm=96da3261a1adbb77c23aaf6b8ec6ecc9017c4078c5c383362e7d39fb1365ff7bcea82a93288e&token=856926690&lang=zh_CN#rd)》
* 《[精益测试](https://mp.weixin.qq.com/s/8UqbCZNmXttZhVvtXrFoiQ)》
* 《[ThoughWorks敏捷测试第三讲：精益测试](https://app.ma.scrmtech.com/meetings-api/sapIndex/SapSourceData?pf_uid=7019_1254&sid=16238&source=2&pf_type=3&channel_id=779&channel_name=insights&tag_id=7066157a5b2dd0c0&appid=wx4bd00f95dd7c7ca1)》