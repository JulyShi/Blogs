---
layout: page
title: "Tags"
description: "哈哈，你找到了我的所有的文章"  
header-img: "img/image6.jpg"  
header-bg: '#96b97d'
permalink: /tags/
---

<div id='tag_cloud'>

{% for tag in site.tags %}
<a href="#{{ tag[0] }}" title="{{ tag[0] }}" rel="{{ tag[1].size }}">
  <i class="fa fa-tag" aria-hidden="true"></i>
  <strong>{{ tag[0] }}</strong>
</a>
{% endfor %}
</div>
---
<ul class="listing">
{% for tag in site.tags %}

  
  <div class="listing-seperator" id="{{ tag[0] }}">
    <i class="fa fa-tag" aria-hidden="true"></i>
    <strong>{{ tag[0] }}</strong>
  </div>

{% for post in tag[1] %}
  <li class="listing-item">
  <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
  <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
{% endfor %}
</ul>





