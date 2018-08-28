var $contactForm = $('#contactform');
$contactForm.submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: 'https://formspree.io/xajrbpzm',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    beforeSend: function() {
      $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
    },
    success: function(data) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--success">Message sent!</div>');
    },
    error: function(err) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--error">Oops, there was an error.</div>');
    }
  });
});