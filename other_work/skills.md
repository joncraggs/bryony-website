---
layout: page
title: Archery & Horseriding
permalink: /skills/
images:
    - image:
        path: images/Gallery 1.jpg
        title: Macbeth in 'Macbeth' by Owen Horsley
    - image: 
        path: images/Gallery 2 Charlotte.jpg
        title: Sara, 'The Bris', Parkville Pictures. Photo © Parkville Pictures
    - image: 
        path: images//09_bodmin_stills_selects_Elizabeth_shoot.jpg
        title: Elizabeth Osbourne, Bodmin Jail project by Moonraker VFX
---

Bryony Reynolds is the current Oxfordshire JIN Champion in flatbow (traditional) archery. 

She is also trained in horseback archery, horse riding, and BADC stage and screen combat in unarmed, rapier and dagger.

<div class="youtube-embed">
    <iframe src="https://player.vimeo.com/video/696070099?" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="" id="yui_3_17_2_1_1608744716903_103"></iframe>
</div>

<ul class="gallery">
    {%- for rawimage in page.images -%}
    {%- assign image = rawimage.image -%}
    <li>
        <img src="{{ site.url }}/{{ image.path }}" alt="{{ image.title }}" onclick="overlayImage(this)"/>
        <span>{{image.title}}</span>
    </li>
    {%- endfor -%}
</ul>
<div class="gallery-overlay">
    <div class="gallery-image-container">
        <a href="javascript:void(0);" class="close-button" onclick="closeOverlay()">
            <span></span>
            <span></span>
            <span></span>
        </a>
        <img id="gallery-image"/>
        <a href="javascript:void(0);" class="prev-button" onclick="galleryPrev()">
            <span></span>
            <span></span>
            <span></span>
        </a>
        <a href="javascript:void(0);" class="next-button" onclick="galleryNext()">
            <span></span>
            <span></span>
            <span></span>
        </a>
    </div>
</div>
