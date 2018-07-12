---
layout: page
title: "Topic"
description: "哈哈，你找到了我的所有的文章"  
header-img: "../img/header/Home7.jpg" 
header-bg: '#6497B9'
permalink: /tags/
---

<div id='tag_cloud'>

<!--{% for tag in site.tags %}
<a href="#{{ tag[0] }}" title="{{ tag[0] }}" rel="{{ tag[1].size }}">
  <strong>{{ tag[0] }}</strong>
</a>
{% endfor %}
</div>
---
-->
<ul class="listing taglist">
{% for tag in site.tags %}

  
  <div class="listing-seperator hidden" data-blongs="{{tag[0] | slugify: 'pretty' }}">
    <strong>{{ tag[0] }}</strong>
  </div>

{% for post in tag[1] %}
  <li class="listing-item hidden" data-blongs="{{tag[0] | slugify: 'pretty' }}">
  <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
  <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
{% endfor %}
</ul>





