function moveDiv() {
    var $span = $("#random");

    $span.fadeOut(270, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))

        $span.css({ left: leftPos, top: topPos }).fadeIn(270);
    });
};

moveDiv();
setInterval(moveDiv, 750);
