// $('#modal-container').removeAttr('class').addClass('one');
// $('body').addClass('modal-active');

$('#modal-container').click(function() {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});