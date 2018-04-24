$(window).scroll(function() {
var theta = $(window).scrollTop() / 200 % Math.PI;
$('#logo').css({ transform: 'rotate(' + theta + 'rad)' });
$('#brand').css({ transform: 'rotate(' + theta + 'rad)' });
$('#webdes').css({ transform: 'rotate(' + theta + 'rad)' });
$('#ecom').css({ transform: 'rotate(' + theta + 'rad)' });
$('#socialm').css({ transform: 'rotate(' + theta + 'rad)' });


});