$('.sk').hide()
$('.sk2').hide()

$('.ls').click(function() {
    $('.sk').show();
    $('.sk1').hide()
    $('.sk2').hide()
})

$('.tp').click(function() {
    $('.sk').hide();
    $('.sk1').show()
    $('.sk2').hide()
})

$('.mk').click(function() {
    $('.sk').hide();
    $('.sk1').hide()
    $('.sk2').show()
})