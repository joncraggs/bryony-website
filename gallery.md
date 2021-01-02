---
layout: page
title: Gallery
permalink: /gallery/
images:
    - image:
        path: images/Gallery 1.jpg
        title: This is where the title would go
    - image: 
        path: images/Gallery 2 Charlotte.jpg
        title: This is where the title would go
    - image: 
        path: images//09_bodmin_stills_selects_Elizabeth_shoot.jpg
        title: This is where the title would go
    - image: 
        path: images/Gallery 3 Joshua L. Irwandi.jpg
        title: This is where the title would go
    - image: 
        path: images/Snark.jpg
        title: SNARK!!!!!
    - image: 
        path: images/Snark_2.jpg
        title: This is where the title would go
    - image: 
        path: images/The Gathering.jpg
        title: This is where the title would go
    - image: 
        path: images/Gallery 4.jpg
        title: This is where the title would go
    - image: 
        path: images/Gallery 5.jpg
        title: This is where the title would go
---

<ul class="gallery">
    {%- for rawimage in page.images -%}
    {%- assign image = rawimage.image -%}
    <li>
        <img src="{{ site.url }}/{{ image.path }}" alt="{{ image.title }}"/>
        <span>{{image.title}}</span>
    </li>
    {%- endfor -%}
</ul>

<iframe src="https://player.vimeo.com/video/391805494?" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="" id="yui_3_17_2_1_1608744716903_103"></iframe>
