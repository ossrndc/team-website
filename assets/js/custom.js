const allClass = "active-move-up inactive-move-up active-move-down inactive-move-down";
var canScroll = true;
var scrollCounter = $('.screen').length;

var lastY;

$(document).ready(function () {

});

$(window).bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 120 > 0)
        scrollUpCase();
    else
        scrollDownCase();
});

$(window).bind('touchmove', function (e) {
    var currentY = e.originalEvent.touches[0].clientY;
    if (currentY < lastY)
        scrollUpCase();
    else
        scrollDownCase();

    lastY = currentY;
});

function scrollUpCase() {
    if (canScroll && scrollCounter < 7) {
        scrollCounter++;
        resetCanScroll();
        $('.active').addClass('active-move-down').prev(".screen").addClass("inactive-move-down");
        setTimeout(function () {
            $('.active').removeClass('active').prev(".screen").addClass("active");
            $(".screen").removeClass(allClass);
        }, 1000);
    }
}

function scrollDownCase() {
    if (canScroll && scrollCounter > 1) {
        scrollCounter--;
        resetCanScroll();
        $('.active').addClass('active-move-up').next(".screen").addClass("inactive-move-up");
        setTimeout(function () {
            $('.active').removeClass('active').next(".screen").addClass("active");
            $(".screen").removeClass(allClass);
        }, 1000);
    }
}

function resetCanScroll() {
    canScroll = false;
    setTimeout(function () {
        canScroll = true;
    }, 2500);
}