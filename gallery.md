---
layout: page
title: Gallery
permalink: /gallery/
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
    - image: 
        path: images/Gallery 3 Joshua L. Irwandi.jpg
        title: Spirit, 'The Tempest', Elysium Theatre Company. Photo © Joshua L. Irwandi
    - image: 
        path: images/Snark.jpg
        title: Isabella, 'The Hunting of the Snark', Burn the Curtain. Photo © Theo Moye
    - image: 
        path: images/Snark_2.jpg
        title: Isabella, 'The Hunting of the Snark', Burn the Curtain. Photo © Theo Moye
    - image: 
        path: images/The Gathering.jpg
        title: Tilly Cutler, 'The Gathering' (Verbatim), State of Play Arts. Photo © Alastair Nisbet
    - image: 
        path: images/Gallery 4.jpg
        title: Izzy, 'Tess of the d'Urbervilles', SISATA
    - image: 
        path: images/Gallery 5.jpg
        title: Hero, 'Much Ado About Nothing', Elysium Theatre Company. Photo © Joshua L. Irwandi 
---

<ul class="gallery">
    {%- for rawimage in page.images -%}
    {%- assign image = rawimage.image -%}
    <li>
        <img src="{{ site.url }}/{{ image.path }}" alt="{{ image.title }}" onclick="overlayImage(this)"/>
        <span>{{image.title}}</span>
    </li>
    {%- endfor -%}
</ul>

<div class="youtube-embed">
    <iframe src="https://player.vimeo.com/video/391805494?" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="" id="yui_3_17_2_1_1608744716903_103"></iframe>
</div>

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
