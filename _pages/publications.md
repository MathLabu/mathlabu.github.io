---
layout: archive
title: "Publications, Talks, Softwares & Datasets"
permalink: /publications/
author_profile: true
---
_______________________________

# Publications

> You can also find my articles on <a href="https://scholar.google.com/citations?user=dF23NHwAAAAJ&hl=en">my Google Scholar profile</a>.

{% assign publications = site.publications | sort: "year" | reverse %}

## Upcoming
<ol>
{% for pub in publications %}
 {% if pub.type == 'unpublished' or pub.type == 'preprint' %}
 <li>
 <div class="pubitem">
   <div class="pubauthors">
     {{ pub.authors }},
   </div>
   <div class="pubtitle">
     <b>{{ pub.title }}</b>,
   </div>
   <div class="pubinfo">
     <i>{{ pub.publication }}, {{ pub.year}}</i>.
   </div>
   {%if pub.doi %}
   <div class="pubdoi">
     <u>DOI</u>: <a href="https://doi.org/{{ pub.doi }}">{{ pub.doi }}</a>
   </div>
   {% endif %}
 </div>
 <div class="publinks">
   <i class="fas fa-link"></i> <a href="{{pub.url}}">Article Page</a>&nbsp;&nbsp;
   {% if pub.file %}
   <i class="fas fa-file-pdf"></i> <a href="{{pub.file}}">Preprint</a>&nbsp;&nbsp;
   {% endif %}
   {% if pub.codesource %}
   <i class="fab fa-github"></i> <a href="{{ pub.codesource }}">Source Code</a>&nbsp;&nbsp;
   {% endif %}
   {% if pub.dataset != "none" %}
   <i class="fa fa-database"></i> <a href="{{ pub.dataset }}">Datasets</a>&nbsp;&nbsp; 
   {% endif %}
 </div>
 </li>
 {% endif %}
{% endfor %}
</ol>

## International Journals
<ol>
{% for pub in publications %}
 {% if pub.type == 'journal' or pub.type == 'article'%}
 <li>
 <div class="pubitem">
   <div class="pubauthors">
     {{ pub.authors }},
   </div>
   <div class="pubtitle">
     <b>{{ pub.title }}</b>,
   </div>
   <div class="pubinfo">
     <i>{{ pub.publication }}, {{ pub.year}}</i>.
   </div>
   {%if pub.doi %}
   <div class="pubdoi">
     <u>DOI</u>: <a href="https://doi.org/{{ pub.doi }}">{{ pub.doi }}</a>
   </div>
   {% endif %}
 </div>
 <div class="publinks">
   <i class="fas fa-link"></i> <a href="{{pub.url}}">Article Page</a>&nbsp;&nbsp;
   {% if pub.file %}
   <i class="fas fa-file-pdf"></i> <a href="{{pub.file}}">PDF</a>&nbsp;&nbsp;
   {% endif %}
   {% if pub.codesource %}
   <i class="fab fa-github"></i> <a href="{{ pub.codesource }}">Source Code</a>&nbsp;&nbsp;
   {% endif %}
   {% if pub.dataset %}
  <i class="fa fa-database"></i>  <a href="{{ pub.dataset }}">Datasets</a>&nbsp;&nbsp; 
   {% endif %}
 </div>
 </li>
 {% endif %}
{% endfor %}
</ol>

## International Conferences
<ol>
{% for pub in publications %}
 {% if pub.type == 'conference' %}
 <li>
 <div class="pubitem">
   <div class="pubauthors">
     {{ pub.authors }}
   </div>
   <div class="pubtitle">
     <b>{{ pub.title }}</b>
   </div>
   <div class="pubinfo">
     <i>{{ pub.publication }}, {{ pub.year}}</i>.
   </div>
   {%if pub.doi %}
   <div class="pubdoi">
     <u>DOI</u>: <a href="https://doi.org/{{ pub.doi }}">{{ pub.doi }}</a>
   </div>
   {% endif %}
 </div>
 <div class="publinks">
   <i class="fas fa-link"></i> <a href="{{pub.url}}">Article Page</a>&nbsp;&nbsp;
   {% if pub.file %}
   <i class="fas fa-file-pdf"></i> <a href="{{pub.file}}">PDF</a>&nbsp;&nbsp;
   {% endif %}
   {% if pub.video %}
   <i class="fas fa-video"></i> <a href="{{ pub.video }}">Spotlight</a>&nbsp;&nbsp;
   {% endif %}
   {% if pub.codesource %}
   <i class="fab fa-github"></i> <a href="{{ pub.codesource }}">Source Code</a>&nbsp;&nbsp;
   {% endif %}
   {% if pub.dataset %}
   <i class="fa fa-database"></i> <a href="{{ pub.dataset }}">Datasets</a>&nbsp;&nbsp; 
   {% endif %}
 </div>
 </li>
 {% endif %}
{% endfor %}
</ol>

## Workshops and National Conferences
<ol>
{% for pub in publications %}
 {% if pub.type == 'workshop' %}
 <li>
 <div class="pubitem">
   <div class="pubauthors">
     {{ pub.authors }}
   </div>
   <div class="pubtitle">
     <b>{{ pub.title }}</b>
   </div>
   <div class="pubinfo">
     <i>{{ pub.publication }}, {{ pub.year}}</i>.
   </div>
   {%if pub.doi %}
   <div class="pubdoi">
     <u>DOI</u> :<a href="https://doi.org/{{ pub.doi }}">{{ pub.doi }}</a>
   </div>
   {% endif %}
 </div>
 <div class="publinks">
   <i class="fas fa-link"></i> <a href="{{pub.url}}">Article Page</a>&nbsp;&nbsp;
   {% if pub.file %}
   <i class="fas fa-file-pdf"></i> <a href="{{pub.file}}">PDF</a>&nbsp;&nbsp;
   {% endif %}
   {% if pub.codesource %}
   <i class="fab fa-github"></i> <a href="{{ pub.codesource }}">Source Code</a>&nbsp;&nbsp;
   {% endif %}
   {% if pub.dataset %}
   <i class="fa fa-database"></i> <a href="{{ pub.dataset }}">Datasets</a>&nbsp;&nbsp; 
   {% endif %}
 </div>
 </li>
 {% endif %}
{% endfor %}
</ol>

## Thesis
<ul>
{% for pub in publications %}
 {% if pub.type == 'thesis' %}
 <li>
 <div class="pubitem">
   <div class="pubauthors">
     {{ pub.authors }}
   </div>
   <div class="pubtitle">
     <b>{{ pub.title }}</b>
   </div>
   <div class="pubinfo">
     <i>{{ pub.publication }}, {{ pub.year}}</i>.
   </div>
   {%if pub.doi %}
   <div class="pubdoi">
     <u>DOI</u>: <a href="https://doi.org/{{ pub.doi }}">{{ pub.doi }}</a>
   </div>
   {% endif %}
 </div>
 <div class="publinks">
   <i class="fas fa-link"></i> <a href="{{pub.url}}">Article Page</a>&nbsp;&nbsp;
   <i class="fas fa-file-pdf"></i> <a href="{{pub.file}}">PDF</a>&nbsp;&nbsp;
   {% if pub.codesource %}
   <i class="fab fa-github"></i> <a href="{{ pub.codesource }}">Source Code</a>&nbsp;&nbsp;
   {% endif %}
   {% if pub.dataset %}
   <i class="fa fa-database"></i> <a href="{{ pub.dataset }}">Datasets</a>&nbsp;&nbsp; 
   {% endif %}
 </div>
 </li>
 {% endif %}
{% endfor %}
</ul><br/>

_______________________________

# Talks

{% assign talks = site.talks | sort: "year" | reverse %}
<ul>
{% for talk in talks %}
  <li>
  <div class="pubitem">
    <div>
      <b>{{ talk.date | date: "%B %d, %Y" }}</b>.
    </div>
    <div>
      <i>{{talk.title}}</i>.
    </div>
  </div>
  <div class="publinks">
    <i class="fa fa-fw fa-map-marker" aria-hidden="true"></i>
    {% if talk.online %}<b>(online)&nbsp;</b>{% endif %}
    {{talk.location}}&nbsp;{% if talk.video or talk.file %}-&nbsp;{% endif %}
    
    {% if talk.video %}
    <i class="fas fa-video"></i> <a href="{{ talk.video }}">Spotlight</a>&nbsp;&nbsp;
    {% endif %}
    {% if talk.file %}
    <i class="fas fa-file-pdf"></i> <a href="{{talk.file}}">PDF</a>&nbsp;&nbsp;
    {% endif %}
  </div>
  </li>
{% endfor %}
</ul><br/>

_______________________________

# Softwares

All my code sources have been made publicly available on the lab’s
GitHub page, <https://github.com/comsee-research>, for reproducibility
and broad accessibility, and licensed under the GNU General Public
License v3.0. It includes:

* `libpleno`: an open-source `C++` computer-vision library for dplenoptic cameras modeling and processing\
    Available on <i class="fab fa-github"></i> <https://github.com/comsee-research/libpleno>

* `compote`: a set of tools to pre-calibrate and calibrate (multi-focus) plenoptic cameras\
    Available on <i class="fab fa-github"></i> <https://github.com/comsee-research/compote>
    
* `prism`: a set of tools to generate and simulate raw images from (multi-focus) plenoptic cameras\
    Available on <i class="fab fa-github"></i> <https://github.com/comsee-research/prism>
    
* `blade`: a set of tools to estimate depth map from raw images obtained by (multi-focus) plenoptic cameras\
    Available on <i class="fab fa-github"></i> <https://github.com/comsee-research/blade>
    
* ...


<br/>

_______________________________

# Datasets

All my datasets have been made publicly available on the lab’s
GitHub page, <https://github.com/comsee-research>, for reproducibility
and broad accessibility, and licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. It includes:

* `plenoptic-datasets`: severals plenoptic camera datasets for calibration and depth estimation\
    Available on <i class="fab fa-github"></i> <https://github.com/comsee-research/libpleno>
    
* ...

<br/>

> See the [Projects](/projects) for more details on Softwares and Datasets!

