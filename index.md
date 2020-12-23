---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---
![Bryony Reynolds]({{ site.url}}/images/Home Page.jpg){:class="home-image"}

<div class="home-image-text">
    <span>A</span>
    <span>C</span>
    <span>T</span>
    <span>O</span>
    <span>R</span>
</div>

{%- assign social = site.social_links -%}

<ul class="social-media-list-home">
  {%- if social.spotlight -%}<li><a rel="me" href="https://www.spotlight.com/profile/{{ social.spotlight | cgi_escape | escape }}" title="{{ social.spotlight | escape }}"><svg class="svg-icon grey"><use xlink:href="{{ '/assets/minima-social-icons.svg#spotlight' | relative_url }}"></use></svg></a></li>{%- endif -%}
  <li><a href="javascript:void(0);" title="Equity"><svg class="svg-icon grey wide"><use xlink:href="{{ '/assets/minima-social-icons.svg#equity' | relative_url }}"></use></svg></a></li>
  {%- if social.twitter -%}<li><a rel="me" href="https://twitter.com/{{ social.twitter | cgi_escape | escape }}" title="{{ social.twitter | escape }}"><svg class="svg-icon grey"><use xlink:href="{{ '/assets/minima-social-icons.svg#twitter' | relative_url }}"></use></svg></a></li>{%- endif -%}
</ul>