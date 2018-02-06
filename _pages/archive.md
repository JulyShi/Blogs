---
layout: page
title: "Archive"
description: "故事是这样发生的"
header-img: "img/image8.jpg"
permalink: /archieve/
---


<ul class="listing">
{% for post in site.posts %}
  {% capture y %}{{post.date | date:"%Y"}}{% endcapture %}
  {% if year != y %}
    {% assign year = y %}
 
    <div class="listing-seperator"><i class="fa fa-archive" aria-hidden="true"></i>
    <strong>{{ y }}</strong></div>
  {% endif %}
  <li class="listing-item">
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>