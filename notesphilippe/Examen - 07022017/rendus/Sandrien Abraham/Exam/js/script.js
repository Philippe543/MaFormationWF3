
jQuery('#test').on('keyup', function() {
    jQuery(this).parent().append('<p>' + this.checkValidity() + ' ' +
    this.validity.patternMismatch + '</p>');
});