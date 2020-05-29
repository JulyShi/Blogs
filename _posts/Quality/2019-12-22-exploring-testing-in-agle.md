---
layout: post
title: “探索性测试”在敏捷项目中的运用
date: 2019-12-22
categories: blog
header-img: "../img/header/Home7.jpg"
tags: [质量的迷思]
description: “探索性测试”在敏捷项目中的运用

---

第一次接触”探索性测试“，是在三年前加入ThoughtWorks时的第一次QA社区活动上。同事妮子讲了一个很长的PPT，细致地将所有的探索性测试方法罗列了一遍。我只觉得有趣，却不完全记得住。但我了解到探索性测试的关键就是，打破常规套路，先去设计一部分测试，然后去执行，再基于执行的结果去发散一些新的测试思路。这不正是我平常的工作方式吗？我为自己的”野路子“居然有如此良好的理论依据而暗自窃喜。

后来，我逐渐参与了很多敏捷项目，从简单的单体应用到几十个微服务交互的大型复杂系统，探索性测试的思路帮我一路升级打怪，我发现探索性测试的思路与敏捷开发“小步迭代、快速反馈”的理念不谋而合。

---

# 什么是探索性测试

“探索性测试（Exploratory Testing）”作为一个技术术语，是测试专家Cem Kaner博士于1983年提出的。有人称其为一种”测试风格“、也有人称之为”测试方法“、还有人将其等价于手工测试，但我更倾向于将其定义为一种”测试思路“。它区别于某一种具体的测试技术（等价类划分、边界值测试、自动化测试等），强调依据当前的上下文选择合适的测试方法，因地制宜、避免南橘北枳。它可以用来帮助测试人员分析测试场景、制定测试策略、甚至指导自动化测试。

我们对”测试“常规的理解是，知道期待结果是什么，通过一些测试手段来验证实际结果是否与期待一致。有点像小时候玩过的“蒙娜丽莎拼图”：游戏的目标很明确，你只需要设计好拼图的步骤，再按照步骤移动，然后就能够看到著名的蒙娜丽莎的微笑。区别是，有经验的玩家能够做到以最快的速度、最少的步数完成拼图，而初级玩家则需要较多代价。

<center>
    <p><img src="{{site.baseurl }}/img/exploring-testing-in-agle/000.png" align="center"></p>
</center>

传统的测试方法是“先设计、再测试”。也就是说，先分析出测试点，然后针对测试点设计好测试用例，最后执行测试。这种方法在测试目标明确的情况下是可行的。然而在实际的项目中，我们面临的测试活动要复杂的多。它更像是”打地鼠“游戏，总体目标是将冒出头的地鼠给打回去，但你却不知道下一秒，它的小脑袋将从哪个洞里探出来。

<center>
    <p><img src="{{site.baseurl }}/img/exploring-testing-in-agle/001.png" align="center"></p>
</center>

与传统的测试方法相比，探索性测试**主张学习**，强调**同时展开测试设计、执行、并从结果中获得反馈，从而持续优化测试**。这是一种主张即兴发挥、快速试验、快速学习和动态调整的测试思维方式。

<center>
    <p><img src="{{site.baseurl }}/img/exploring-testing-in-agle/002.jpeg" align="center"></p>
</center>

就我看来，传统测试与探索性测试并无好坏之分，反而相辅相成。传统的测试方法强调有计划地进行，而探索性测试旨在带着使命在某个空间中漫游，但没有预先设定的路线，从而发现更多没有提前预见到的问题。

---

# 敏捷项目中如何运用探索性测试

这几年我参与了多个敏捷项目，我不断尝试学习和运用探索性测试，也逐渐对其有了更深刻的认识。探索性测试不仅有助于我们梳理测试策略，还能在测试过程中给予指导，对自动化测试的设计也起到至关重要的作用。

### 1. 运用探索性测试梳理测试策略

所谓测试策略，简单来讲，就是从”系统承载的业务“、”系统涉及的平台“及”系统架构“三个角度出发，综合解决”测什么“和”怎么测“的问题。

不同产品往往有不同的特征，如何合理的规划和分解被测产品，就是在解决”测什么“的问题。

《探索性测试实践之路》一书提到一种”漫游地图模型“，它将测试比拟为游客在城市中漫游，帮助测试人员将被测产品划分成不同的区域，再针对各个区域的特征，采取有针对性的测试方案。

<center>
    <p><img src="{{site.baseurl }}/img/exploring-testing-in-agle/003.jpeg" align="center"></p>
</center>

如上图所示，对于游客，旅游攻略帮助游客了解一个城市什么地方值得去、什么地方不值得去。那么，对于测试人员，可以运用”漫游地图模型“将软件从逻辑上进行划分：
<center>
    <p><img src="{{site.baseurl }}/img/exploring-testing-in-agle/004.jpeg" align="center"></p>
</center>

* **商业区**：用户花钱买软件就是因为软件的特性使得他们的业务得以完成。商业区测试类型着重于测试软件的主要特性，因此，需要频繁地进行回归测试，以持续保证这些主要特性的可用性。由于具有很高的重复性，”商业区“的测试将是自动化测试关注的重点。
* **旅游区**：对于软件，有些特性对新用户更有吸引力。这一点也涉及到部分用户权限的测试。
* **历史区**：软件也一样具有前版本的历史遗留代码，这个区域的测试目的就是测试遗留代码和遗留缺陷。这一点在遗留系统改造项目中体现的尤为明显。"新开发特性不影响原有特性"将成为测试重点。
* **旅馆区**：当软件“休息”时，它实际上还是非常忙碌的。旅馆区模型关注的是一些辅助功能，比如软件后台运行等。
* **娱乐区**：对于软件，比如一个购物网站，商业区是搜索商品、加入购物车、生成订单、付款等，而其娱乐区就是指漂亮美观的UI、友好的用户界面等。这就需要关注到用户体验和兼容性测试。
* **破旧区**：不同于旅游，软件的破旧区可能存在严重的缺陷、安全及性能问题。这部分可能是软件的重灾区，需要关注异常测试、性能测试和安全测试。

至于“怎么测”，每个项目实际情况都不太一样，项目的各个阶段也不尽相同。我们要依据当前的实际情况，运用测试分层理论、进行测试设计、做好工具选型。更重要的是，要根据测试执行给予的反馈及时调整策略、把控风险。

### 2. 运用探索性测试指导敏捷测试过程

在敏捷开发中，我们以小步迭代的方式逐步完成产品的研发。举个例子：我们在开发一个小型系统，该系统包含4个Feature（功能特性），每个Feature又被分解为若干个Story（用户故事），每个Story就是系统中最小的业务单元。
<center>
    <p><img src="{{site.baseurl }}/img/exploring-testing-in-agle/005.jpeg" align="center"></p>
</center>

* Feature 1：包含Story A、B、C、C、D、E、F
* Feature 2：包含Story G、H、I、J、K
* Feature 3：包含Story L、M、N、O、P、Q
* Feature 4：包含Story R、S、T、U

其中，Feature 1中的Story A和B相互交互；Feature 1中的Story E与Feature 2中的Story K相互依赖；Feature 2中的Story I与Fature 3中的Story N相互关联；Feature 3中的Story L与Fature 4中的Story R相互依赖。

假设按照产品计划，我们即将在4个迭代中完成开发，每两个迭代完成一次版本发布（Release）。那么，按照需求优先级、需求依赖关系、团队速率等因素，story被合理的安排到迭代1至迭代4，如下图所示。
<center>
    <p><img src="{{site.baseurl }}/img/exploring-testing-in-agle/006.jpeg" align="center"></p>
</center>

那么我们如何有效地运用探索性测试来帮助我们实施测试呢？

探索性测试中提到三种常见的测试方法：**单个特性测试**、**交互特性测试**、以及**系统交互测试**。运用到敏捷开发中是这样的：

* 首先，由于每个Story为最小业务单元，每个Story都需要在当前迭代独立完成测试，这就是所谓的**单个特性测试**；
* 其次，由于部分Story之间有依赖关系，比如迭代1中的Story A和Story B、当A和B独立完成测试之后，我们要关注这两个Story之间交互的测试。一个典型例子就是，A为某个页面的UI、B为后端实现。测试Story A时，我们关心前端展示、校验、交互等；测试Story B时，很可能A还没有完成开发，我们需要通过API测试，人为地通过控制入参来完成后端逻辑的验证。然而，我们如何保证前端在与后端交互时，传递给后端的入参是正确的呢？对于开发同学来说，“联调”就是在解决这个问题，对于测试人员，这便是最小**交互特性测试**。
* 再者，通过迭代1和迭代2，我们基本完成了Feature 1和Feature 2的所有story的开发和测试，可以完成第一次Release啦。在Release之前，我们需要完成一轮回归测试，测试范围为Feature 1和Feature 2。假设Feature 1为“注册”、Feature 2为“登录”，我们已经分别完成了注册和登录功能的验收，但是“新注册的账号是否能够正常登录”并没有完全得到验证。这就是**交互特性测试**，旨在发现特性在各个特性在交互时的潜在缺陷。
* 然后，在迭代3中，Story N与已经发布在生产环境的Story I发生关联，为了更好地是适配，很有可能Story N的需要被重构。那么我们在测试Story I时，要同同时关注与Story N的交互。
* 最后，在迭代4以后，我们完后了全部4个Feature的开发和测试，又要进行一次上线发布啦。同样，在上线之前，我们又要进行一轮回归测试。不过这次的回归测试范围不仅包括迭代3和迭代4新开发的内容，还要包含之前所有已经发布在线上的特性，也就是截至目前整个系统的测试。这就是**系统交互测试**，以便发现整个系统中各业务单元之间交互的潜在缺陷。

当然，这只是个比较理想的例子，在真正的敏捷开发中，我们不仅要关注功能的单点测试和回归测试，还要关注性能、安全、及兼容性测试。但是无论哪种测试类型，测试范围都是从“单个特性 -- 交互特性 -- 系统交互”逐渐演进的过程。

### 3. 运用探索性测试完善自动化测试

由于敏捷开发节奏快，几乎每个迭代、每个版本都需要完成或大或小的回归测试。系统演进得越来越大，回归测试的量也与日俱增。而在敏捷全功能团队中，往往是四五个Dev配备一名QA，就算是千手观音，恐怕也很难纯粹靠手工完成所有的回归测试，那么自动化测试就该登台亮相了。

* 将需求明确的、业务稳定的、需要重复回归测试的部分用**自动化测试**来实现；
* 将需求不明确、变动频繁的、无需重复测试的、或者需要日志等特殊形式验证结果的部分，配合探索性测试思路，通过**手工测试**来完成；

在手工测试的过程中，也可以逐渐抽取出一些新的测试点补全到自动化测试当中，这将极大地提高测试效率。

在敏捷开发中，我们运用测试金字塔的分层思想来制定自动化测试策略：
<center>
    <p><img src="{{site.baseurl }}/img/exploring-testing-in-agle/007.jpeg" align="center"></p>
</center>


* **单元测试**：旨在测试程序中的最小可测单元，隔离性很高、无需其他依赖、执行速度较快，因此建议在每次提交完代码并且通过编译之后、部署测试环境之前完成”单元测试“。

* **API测试**：主要关注在系统架构的业务逻辑层，我们通过工具或代码方式去调用特定的API，给定输入、获取输出，验证响应结果。API测试不仅要关注正常场景，更要关注异常场景。API测试执行效率比较高，可以根据项目环境稳定情况，设置每次部署环境之后启动测试，也可以每天在固定的时间执行测试。

* **UI测试**：UI测试关注用户界面及用户体验。通过代码或工具模拟用户通过键盘输入或鼠标操作等行为来与系统交互。由于UI测试执行效率相对较低，建议在每天环境相对稳定的时间段执行测试。

* **E2E测试**：端到端测试应该覆盖那些业务价值最高的路径，并不关注异常场景。要做到这一点，需要在设计测试时，从最终用户的角度来考虑，通过用户画像和User Journey来确定测试场景。E2E测试是回归测试的好帮手，可能会在版本发布前的一段时间频繁执行。

* **冒烟测试**：冒烟测试是一种针对软件版本包的快速验证策略，如果冒烟测试没有通过，则不必进行更深入的测试。因此，我们可以从E2E测试中抽取两到三条最核心的场景设置为冒烟测试，在每次环境部署之后启动测试，从而快速验证本次版本的可用性。

无论什么样的自动化测试，都需要设定特定的输入，有明确的输出。但是敏捷开发是个演进式开发的过程，一些验收条件在这个迭代是这个样子，在下个迭代很可能就是截然不同的了；此外，我们对系统的理解也必将经历一个逐渐深入的过程。因此，探索性测试中的一些方法正好可以帮我们弥补这个过程。

探索性测试方法有很多，这里对我帮助最大的是《探索式软件测试》一书中定义的四个分类：

**1. 自由风格的探索性测试**

自由风格的探索性测试（Freestyle Exploratory Testing）对一个应用程序以任意次序和方法进行随机测试，不提前设定测试范围和规则，也无需大量准备工作。

在上面我们提到，冒烟测试是从E2E测试中提取的基本场景。但是，E2E测试实际上是整个测试中最困难的，它很大程度的依赖于环境，而一个完整的环境的创建与维护可能需要花费很大的精力，特别是当有多个不同的团队在独立开发时。因此，当自动化冒烟测试无法进行时，我们就可以通过这种自由风格的探索性测试来指导手工冒烟测试，以快速验证软件包是否存在重大崩溃或严重缺陷。

**2. 基于场景的探索性测试**

基于场景的探索性测试（Scenario-based exploratory testing）和传统的测试方法有些类似，要有明确的测试的起点和终点。比如在E2E测试中，它可能基于基于user journal、用户故事、程序的生命周期等。不同的是，它不限制路线。好比我们设定的场景是，从西安到北京，但并不限制出行方式和路线，你可以乘坐汽车、高铁、飞机，你甚至可以绕地球一圈，只要最终能够到达。

**3. 基于测试策略的探索性测试**

基于策略的探索性测试（Strategy-based exploratory testing）是指将自由式探索与经验、方法、技能和第六感结合，它属于但不完全等同于自由式探索，它是在经验和技能的指导下完成，比较适合有经验的玩家。

已有的测试策略是基于测试策略的探索性测试成功的关键，测试人员的测试知识和经验越丰富，测试效率就会越高、效果越好。测试新人可以从测试老手的测试路径中学习和提取一些新的测试场景，补充到自动化测试中。

**4. 基于反馈的探索性测试**

基于反馈的探索性测试（Feedback-based exploratory testing）是指测试人员基于”上一次“或”上一条“测试的结果来动态调整自己的测试。

举个例子，你由于肚子疼去医院检查，大夫轻轻按你压腹部某个部位，如果你没有反应，他会试着调整部位；如果你轻微”啊“一声，大夫便知道这个部位存在嫌疑，他很可能会再按一次，并且力道稍大一些。”啊“一声就是你给予大夫本次测试的反馈。

再举个例子，团建的时候，大家常常玩一个”猜数字游戏“。法官在纸上写下一个0-100的数字，由剩余的人从左往右依次猜数字，猜中的人将作为”幸运儿“接受惩罚。这完全符合基于反馈的探索性测试。

    Case 1：第一个人猜”66“，法官回答”大了“。

那么第二个人便推测这个数字位于0-66之间。于是他调整自己的数字。
    
    Case 2：第二个人猜”63“，法官回答”小了“。

那么测试范围就被缩小到64-66之间，很显然，答案就在64和65当中，那么第三位或第四位将会是那个”中奖“的人，最精彩的部分也就来了。

测试中我们也常常碰到类似的情况，一开始我们并不知道期待结果具体应该是什么，因此无法通过自动化脚本来完成测试。所以我们按照自己的经验或推测先进行一组测试、再通过测试结果分析和设定下一组测试，依次循环直到找到最终结。等到所有的步骤和结果明确之后，就可以通过自动化脚本去完成了。

最后，由于探索性测试只是一种思路，并不是特定的测试方法，在实际运用起来并没有固定的套路，每个人也对它有不同的理解。但希望我们在完成测试工作的同时，能够时不时停下来总结和思考，从而使得测试更完善、也更高效。

---

参考：

* 《探索性软件测试》James A. Whittaker
* 《探索性测试实践之路》史亮、高翔






