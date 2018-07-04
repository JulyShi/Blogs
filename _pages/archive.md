---
layout: page
title: "Archive"
description: "故事是这样发生的"
header-img: "../img/header/Home3.jpg"
permalink: /archive/
---


<ul class="listing">
{% for post in site.posts %}
  {% capture y %}{{post.date | date:"%Y"}}{% endcapture %}
  {% if year != y %}
    {% assign year = y %}
 
    <li class="listing-seperator">
    <strong>{{ y }}</strong></li>
  {% endif %}
  <li class="listing-item">
    <i class="datetime" datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%b %-d"}}</i>
    <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>