---
layout: post
title: 关于QA快速上手一个遗留系统改造项目的10个建议
date: 2019-11-18
categories: blog
header-img: "../img/header/Home7.jpg"
tags: [测试锦囊]
description: 关于QA快速上手一个遗留系统改造项目的10个建议

---

下午收到同事小李这样一条微信：

    七姑娘，我能问你一个问题吗？
    我新加入项目A。A是基于B项目的，B项目是另外一个团队做的，现在TL让我先将B项目的功能测试一下，避免B项目的bug影响我们项目进度。我只是知道简单的上下文，不知道该如何入手。查了一下B项目的jira，内容很多，没法一个一个看。如何是好？
    
担心我对小李的问题理解有误，我立刻播了电话过去，才了解到真是的情况是这样的。

> 小李刚刚加入一个新项目，项目中有PM/BA/TL/Dev/QA角色，小李是QA。TL早几天入场、BA与小李几乎同一天到岗。从TL处了解到一些最基本的上下文，没有更多信息。这是一个遗留系统改造项目，未与之前的团队交接（之前的团队是其他公司的）。合同签订了本次改造的scope，也包含了一些修复缺陷的effort。但是TL担心遗留Bug超出预期，影响开发进度，所以让QA提前测一下。可是QA小李没有验收标准，不知该如何下手。

这是一个常见的关于遗留系统改造项目on boarding问题。

有一些项目，QA入场会比其他角色晚一两周，等到QA入场时，已经可以从团队成员处获得较多上下文，工作自然比较容易按照节奏展开。但也不乏一些项目，QA和和其他团队成员同时入场，大家的上下文都比较缺失，这个时候，QA该如何快手上手呢？我想就此来谈谈自己的一些经验。

作为一家专业服务公司，我们面临的项目大致分为两类：

* 第一类：to B 产品，客户即是用户。他们没有IT背景，相比开发过程，他们更关心交付的产品是否是他们真正想要的，能否帮助其实现业务价值，从而带来利润。

* 第二类：to B 或者to C 产品，客户是某个IT公司或部门，用户是该公司的业务部门（to B）或者广大消费者（to C）。他们有一套独有的开发流程和要求，他们关心所交付的产品能否满足业务部门的期望、质量是否良好、过程是否满足要求、团队是否容易些协作等等。

项目最开始的两周很关键，它决定了后续的活动能否顺利地开展。然而，作为专业服务公司，客户的成功才是我们的成功，我们不仅要交付高质量的产品，客户的满意度对我们也至关重要。然而，针对不同的项目类型，我们应该采取不同的策略，才能达到因地制宜的效果。不过，无论哪种类型，作为一个全新的项目，从这几个点下手就对了。

### 1. 产品的业务背景和业务价值是什么？
   
   了解业务背景和价值，有助于QA关注客户、从而更好的设计测试策略、排列测试优先级、区分缺陷的严重程度和优先级等等。
   
   倘若BA已提前入场，QA可以从BA处了解关于业务背景和业务价值的信息；如果BA和QA同时入场，QA可以一半时间协助BA，与前团队关键成员或客户进行访谈、或查看前团队输出的资料来获取相关信息，一半时间用来在系统中快速验证。这样不仅能快速熟悉业务价值，还能尽快整理出口头传递的业务盲点，为下次访谈提供素材。 

### 2. 系统是如何承载业务价值的？系统的关键路径有哪些？
   
   用思维导图的形式，可视化地梳理出系统的关键路径，并分享给团队成员。
   
   这样，不仅有助于QA快速熟悉系统，对整个团队都能起到至关重要的作用，比如，它可能与BA梳理的的User Journey有较好的Mapping关系、也可以帮助开发人员梳理代码流程。

### 3. 系统的用户对象是谁？

   了解系统的用户对象有哪些，梳理不同用户的功能权限和数据权限矩阵。 
   
   分析不同用户的数据量是否能对系统性能指标有指导意义。

### 4. 系统运行在什么样的设备和平台上？比如，一个web应用，支持哪些操作系统和浏览器？

了解系统运行在哪些设备和平台上，对后续制定兼容性测试策略有至关重要的作用。

### 5. 测试环境有哪些？

总的来说，测试环境分为几类：开发环境、QA测试环境、SIT测试环境、UAT验收环境、生产环境。但由于系统复杂度不同、客户不同，环境的设置也不太一样。

* 第一类项目：测试环境需要根据项目需要来设定。只需要与TL协商进行就好。

* 第二类项目：可能已经有多套完善的测试环境，需要找测试负责人了解各个测试环境的基本配置、用途、使用痛点，再根据项目需要，确定是否需要更新或定制。


### 6. 项目内外的干系人有哪些？

快速梳理项目内外的干系人，有助于后续快速精准的寻求帮助。

团队内的干系人自然不用做过多解释，对于ThoughtWorks来说，全功能团队中的每一个角色都有明确的定义，大家知道该如何高效地协作。外部干系人则截然不同，仍然以上面提到的两种项目类型为例。

* 第一类项目：

首先，客户是需求的主要来源，任何与需求相关的问题，都需要与客户达成一致。

其次，除了客户，也可能存在另外的干系人。我曾经参加过一个交付项目，开发一款广告管理系统，客户就是该系统的真实用户。与此同时，有一个集成的合同管理系统，开发团队是其他供应商，客户(用户)都是该公司的其他部门。那么，该系统的客户(用户)和开发团队都将是这个项目重要的干系人, 保持良好的合作关系、建立高效的沟通机制都能为项目的顺利开展起到关键作用。

* 第二类项目：

首先，业务部门承载着需求，开发团队通常不会与其直接对接，中间会有产品经理作为中间人，作为QA，要与项目内外负责需求的角色保持良好的沟通。

其次，这类公司大都有独立的开发部门、测试部门、和运维部门，各自背负着各自的KPI，部门之间有严重的壁垒。ThoughtWorks这种敏捷团队的QA显然在这里不占优势，容易处在客户部门墙的夹缝中。了解这些干系人之间的微妙关系，满足不同部门的要求，才能够做到适者生存。

最后，一个复杂的大型系统，常常有几十个对接系统，每个系统都有对应的开发团队和测试团队。提前梳理出这些外部系统的干系人，有助于我们在对的时间找到对的人，从而解决问题。

### 7. 客户对产品质量 和 交付物的诉求有哪些？

不同客户对产品质量 和 交付物的诉求一般是不一样的。

* 第一类项目：客户大多是结果导向的。对于“产品质量”的要求并没有那么苛刻，允许有部分不太严重的bug，只要在发现的时候能够快速修复。对于“交付物”也没有过多限制。将一些过程和结果信息透明地、可视化地传递给客户，能够良好的增加客户满意度。比如，完善的用户手册、上线前的测试报告，都是一颗良好的定心丸。但为了避免“想当然的经验”引起的麻烦，建议在项目最开始就与客户约定好必要的交付物。

* 第二类项目：客户不仅关注结果，还关注过程。过程不完善，很可能会导致直接客户面临上级的指责、或者跨部门的挑战；结果不理想，又会使他们面临业务部门的投诉。他们有一套成熟的开发过程和标准，开发流程中的每个阶段，都会对质量和交付物有明确的要求。因此，QA需要找测试负责人了解这些要求，并与其协商裁剪、达成明确的一致性，会为后续的工作带来事半功倍的效果。

### 8. 开发流程是什么样的？QA在流程各个阶段应该有怎样的定位？

和上一点有异曲同工之妙，了解客户对开发流程的定义，明确QA在各个阶段的职责和定位，有助于我们的产出与客户的要求快速match起来，少走弯路。

不过，第一种项目类型客户大都对流程没有太多要求，这就是我们体现专业性的时候了，用最佳实践来影响客户是不二选择。

### 9. 系统当前质量状态是怎样的？

这是个有趣的话题，遗留系统改造项目，自然免不了潜在的缺陷。在签订合同时，客户也为这些缺陷的修复买了单，为什么还要了解系统当前的质量状态呢？

这的点在第一类项目上更加突出。客户相当于将产品新的一期全权打包给我们负责。那么我完全有必要知道，我们接到的时候是什么样子，最终交付的又是什么样子。

首先，尽可能完整地测试一遍被测系统，找出“疑似缺陷”。将这些缺陷进行归类，比如需求类、编码类、环境类、性能类、安全类、UI交互类等，再与客户逐一确认。一方面，有助于QA更深入的了解系统，另一方面，能够有效的排出“非缺陷”和“不需要修复的缺陷”。

其次，这样也能避免后期开发过程中发现的遗留缺陷超乎预期、或者分不清责任的问题。

### 10. 系统外部依赖有哪些？

一个复杂的系统，常常有多个外部对接系统，有的已经完全停止开发，有的仍然在开发中。哪些系统将是未来改造会涉及的部分，是否需要mock测试，如何进行集成测试？测试数据如何管理？谁是提供方，谁是使用方？这些问题都需要搞清楚。


----
**写在最后：**

以上10个点是我在大量交付项目中积累的经验，但至于做到什么成都，依然取决于项目的进度本身。

另外，也是最重要的，你不是一个人在战斗，良好的团队合作，可以产生1+1>2的效果。掌握的信息，要及时与团队分享，也要学会从团队其他角色那里共享知识。分享文化，使得我们七八个人的团队，在2个礼拜的时间内，迅速上手了国内某大型电商中台微服务改造项目，硕果累累。
