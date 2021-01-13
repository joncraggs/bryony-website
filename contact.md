---
layout: page
title: Contact
permalink: /contact/
---

If you would like to contact Bryony Reynolds, please fill in your details in the form below.
{:class="contact-message"}

<form id="contact-us">
    <div class="input-group">
        <input type="text" name="firstName" id="firstName" required>
        <label for="firstName">First Name</label>
        <div class="bar"></div>
    </div>
    <div class="input-group">
        <input type="text" name="lastName" id="lastName" required>
        <label for="lastName">Surname</label>
        <div class="bar"></div>
    </div>
    <div class="input-group">
        <input type="email" name="email" id="email" required>
        <label for="email">Email</label>
        <div class="bar"></div>
    </div>
    <div class="input-group">
        <textarea name="message" id="message" required resize="false" rows="5"></textarea>
        <label for="message">Message</label>
        <div class="bar"></div>
    </div>
    <input type="hidden" name="_gotcha">
    <button type="submit" class="btn-submit">Submit</button>
</form>