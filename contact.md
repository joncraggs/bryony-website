---
layout: page
title: Contact
permalink: /contact/
---

If you would like to contact Bryony Reynolds, please fill in your details in the form below.
{:class="contact-message"}

<form id="contact-us" enctype="multipart/form-data">
    <div class="input-group">
        <input type="text" name="name" id="name" required>
        <label for="name">Name</label>
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
    <input type="hidden" id="captchaResponse" name="g-recaptcha-response" />
    <button type="submit" class="btn-submit">Submit</button>
</form>
<script>loadFormCarry()</script>
<script>
	grecaptcha.ready(function() {
		grecaptcha.execute('6LeAaToaAAAAAIAKnhdykrSQyzTF3GdpufIxlNbY', {action: 'homepage'})
		.then(function(token) {
			document.getElementById('captchaResponse').value = token;
		});
	});
</script>