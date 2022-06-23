---
layout: archive
title: "News"
permalink: /news/
author_profile: true
---

{% include base_path %}

{% assign news_list = site.news | sort: "date" | reverse %}

{% capture written_year %}'None'{% endcapture %}
<ul>
{% for news in news_list %}
  {% capture year %}{{ news.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  <li><b>{{ news.date | date: '%-d %B, %Y'}}:</b> {{ news.info }}</li>
{% endfor %}
</ul>





