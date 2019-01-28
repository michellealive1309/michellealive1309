$(function() {
    $('.cerinfo').on('mousemove', function(e){
        centerX = $(this).width()/2;
        var moveX = centerX - e.offsetX;
        $(this).css({
            'transform': 'perspective(500px) rotateY(' + moveX/20 + 'deg)'
        });
    });
});