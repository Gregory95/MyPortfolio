$('#contact-submit').submit(function(e) {
    var name = document.getElementById('#inputName'),
        email = document.getElementById('#inputEmail'),
        subject = document.getElementById('#inputSubject'),
        message = document.getElementById('#inputMessage');

    if (!name.value || !email.value || !message.value) {
        alerify.error('Please check your entries')
    } else {
        $.ajax({
            url: "https://formspree.io/kokozides.g@outlook.com",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });
        e.preventDefault()
        $(this).get(0).reset()
        alerify.success('Message sent')
    }
});