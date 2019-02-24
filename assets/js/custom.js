const allClass = "active-move-up inactive-move-up active-move-down inactive-move-down";
var divCount = $('.screen').length;
var scrollCounter = divCount;
var rebindTime = isMobileDevice() ? 100 : 1200;

$(document).ready(function () {
    bindEvents(10);
});

function isMobileDevice() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) {
        return true;
    }
    return false;
}

function bindEvents(timeout) {
    setTimeout(function () {
        $(window).bind('mousewheel', function (e) {
            if (e.originalEvent.wheelDelta / 120 > 0)
                scrollUpCase();
            else
                scrollDownCase();
        });

        $(window).bind('touchstart', function (e) {
            var swipe = e.originalEvent.touches,
                start = swipe[0].pageY;

            $(this).on('touchmove', function (e) {
                var contact = e.originalEvent.touches,
                    end = contact[0].pageY,
                    distance = end - start;
                if (distance < -30)
                    scrollDownCase();
                if (distance > 30)
                    scrollUpCase();
            })
        });

    }, timeout);
}

function scrollUpCase() {
    if (scrollCounter < divCount) {
        scrollCounter++;
        $(window).unbind();
        $('.active').addClass('active-move-down').prev(".screen").addClass("inactive-move-down");
        setTimeout(function () {
            $('.active').removeClass('active').prev(".screen").addClass("active");
            $(".screen").removeClass(allClass);
            bindEvents(rebindTime);
        }, 1000);
    }
}

function scrollDownCase() {
    if (scrollCounter > 1) {
        scrollCounter--;
        $(window).unbind();
        $('.active').addClass('active-move-up').next(".screen").addClass("inactive-move-up");
        setTimeout(function () {
            $('.active').removeClass('active').next(".screen").addClass("active");
            $(".screen").removeClass(allClass);
            bindEvents(rebindTime);
        }, 1000);
    }
}