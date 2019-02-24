const allClass = "active-move-up inactive-move-up active-move-down inactive-move-down";
var divCount = $('.screen').length;
var scrollCounter = divCount;
var rebindTime = isMobileDevice() ? 100 : 1200;
var lastY;

$(document).ready(function () {
    bindEvents(10);
});

function isMobileDevice() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
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

        // $(window).bind('touchstart', function (e) {
        //     var swipe = e.originalEvent.touches,
        //         start = swipe[0].pageY;
        //
        //     $(this).on('touchmove', function (e) {
        //         var contact = e.originalEvent.touches,
        //             end = contact[0].pageY,
        //             distance = end - start;
        //         if (distance < -30)
        //             scrollDownCase();
        //         if (distance > 30)
        //             scrollUpCase();
        //     })
        // });

        // $(document).bind('touchstart', function (e){
        //     ts = e.originalEvent.touches[0].clientY;
        // });
        //
        // $(document).bind('touchend', function (e){
        //     console.log("touchmove");
        //     var te = e.originalEvent.changedTouches[0].clientY;
        //     console.log(ts,te);
        //     if(ts > te){
        //         scrollDownCase();
        //     }else if(ts < te){
        //         scrollUpCase();
        //     }
        // });

        // $(document).bind('touchmove', function (e){
        //     var currentY = e.originalEvent.touches[0].clientY;
        //     if(currentY > lastY){
        //         scrollUpCase()
        //     }else if(currentY < lastY){
        //         scrollDownCase()
        //     }
        //     lastY = currentY;
        // });

        $(window).on('touchstart', function (e) {

            var swipe = e.originalEvent.touches,
                start = swipe[0].pageY;

            $(this).on('touchmove', function (e) {

                var contact = e.originalEvent.touches,
                    end = contact[0].pageY,
                    distance = end - start;

                if (distance < -30)
                    scrollDownCase()
                if (distance > 30)
                    scrollUpCase()
            })
                .one('touchend', function () {

                    $(this).off('touchmove touchend');
                });
        });

    }, timeout);
}

function scrollUpCase() {
    if (scrollCounter < divCount) {
        scrollCounter++;
        $(window).unbind();
        $('.screen.active').addClass('active-move-down').prev(".screen").addClass("inactive-move-down");
        setTimeout(function () {
            $('.screen.active').removeClass('active').prev(".screen").addClass("active");
            $(".screen").removeClass(allClass);
            bindEvents(rebindTime);
        }, 1000);
    }
}

function scrollDownCase() {
    if (scrollCounter > 1) {
        scrollCounter--;
        $(window).unbind();
        $('.screen.active').addClass('active-move-up').next(".screen").addClass("inactive-move-up");
        setTimeout(function () {
            $('.screen.active').removeClass('active').next(".screen").addClass("active");
            $(".screen").removeClass(allClass);
            bindEvents(rebindTime);
        }, 1000);
    }
}