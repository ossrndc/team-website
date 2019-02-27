/**
 * Created by Eleven on 27-02-2019.
 */

var $viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

//$visible determines how many tiles to show on the slider
    // depends upon $viewportWidth
var $visible;

//
var sliderList;

// calculateVisible() calculates the no. of tiles to show on the slider
function calculateVisible() {
    if($viewportWidth < 576) $visible = 1;
    if($viewportWidth >=576 && $viewportWidth < 768) $visible = 1;
    if($viewportWidth >=768 && $viewportWidth < 992) $visible = 3;
    if($viewportWidth > 992) $visible = 3;
}



var slider0 = [
    {title:2015, id:0, members:8},
    {title:2016, id:1, members:8},
    {title:2017, id:2, members:8}
];
var slider1 = [
    {title:"2010", members:"4"},
    {title:"2011", members:"1"},
    {title:"2012", members:"1"},
    {title:"2013", members:"8"},
    {title:"2014", members:"4"}
];
var members2011 = [
    {name: "Puneet Bansal", year:"2011-2015", image:'./assets/images/members/1.jpg'}
];
var members2012 = [
    {name: "Aman Rai", year:"2011-2015", image:'./assets/images/members/2.jpg'}
];
var members2013 = [
    {name: "Prashant", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Prashant2", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Prashant3", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Prashant4", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Prashant56", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Prashant7", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Prashant8", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Prashant2", year:"2011-2015", image:'./assets/images/members/3.jpg'}
];
var members2014 = [
    {name: "Ritik Raj", year:"2011-2015", image:'./assets/images/members/1.jpg'},
    {name: "Ritik Raj2", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Ritik Raj3", year:"2011-2015", image:'./assets/images/members/4.jpg'},
    {name: "Ritik Raj4", year:"2011-2015", image:'./assets/images/members/2.jpg'}
];
var members2010 = [
    {name: "Ritik Raj", year:"2011-2015", image:'./assets/images/members/1.jpg'},
    {name: "Ritik Raj2", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Ritik Raj3", year:"2011-2015", image:'./assets/images/members/1.jpg'},
    {name: "Ritik Raj4", year:"2011-2015", image:'./assets/images/members/2.jpg'}
];
var members2015 = [
    {name: "Anhul Sharma", year:"2011-2015", image:'./assets/images/members/1.jpg'},
    {name: "Anhul Sharma2", year:"2011-2015", image:'./assets/images/members/1.jpg'},
    {name: "Anhul Sharma3", year:"2011-2015", image:'./assets/images/members/1.jpg'},
    {name: "Anhul Sharma34", year:"2011-2015", image:'./assets/images/members/1.jpg'},
    {name: "Anhul Sharma4", year:"2011-2015", image:'./assets/images/members/1.jpg'},
    {name: "Anhul Sharma5", year:"2011-2015", image:'./assets/images/members/1.jpg'},
    {name: "Anhul Sharma6", year:"2011-2015", image:'./assets/images/members/1.jpg'},
    {name: "Anhul Sharma7", year:"2011-2015", image:'./assets/images/members/1.jpg'}
];
var members2016 = [
    {name: "Saurass", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Saurass2", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Saurass3", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Saurass4", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Saurass5", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Saurass6", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Saurass7", year:"2011-2015", image:'./assets/images/members/3.jpg'},
    {name: "Saurass8", year:"2011-2015", image:'./assets/images/members/3.jpg'}
];
var members2017 = [
    {name: "Juniors", year:"2011-2015", image:'./assets/images/members/2.jpg'},
    {name: "Juniors2", year:"2011-2015", image:'./assets/images/members/2.jpg'},
    {name: "Juniors3", year:"2011-2015", image:'./assets/images/members/2.jpg'},
    {name: "Juniors4", year:"2011-2015", image:'./assets/images/members/2.jpg'},
    {name: "Juniors5", year:"2011-2015", image:'./assets/images/members/2.jpg'},
    {name: "Juniors6", year:"2011-2015", image:'./assets/images/members/2.jpg'},
    {name: "Juniors7", year:"2011-2015", image:'./assets/images/members/2.jpg'},
    {name: "Juniors8", year:"2011-2015", image:'./assets/images/members/2.jpg'}
];

// checkControl() finds and sends data to check the next and previous buttons on slider
function checkControls() {
    $(".slider-prev")
        .addClass("d-none");
    $(".slider-next")
        .each(function () {
            var $children = $(this)
                .closest(".flat-slider")
                .find(".flat-slider-content")
                .children()
                .length;
            if($children <= $visible){
                $(this)
                    .addClass("d-none");
            }
        })
}

// Hide the next/previous icons
function hideIcon($this) {
    $this.addClass("d-none");
}

// Show the next/previous icons
function showIcon($this) {
    $this.removeClass("d-none");
}

//Checks condition for visibility of next icon
function checkNext($this,$count,$totalChildren) {
    if($count <= $totalChildren - $visible)
        showIcon($this);
    else hideIcon($this);
}

//Checks condition for visibility of prev icon
function checkPrev($this,$count,$totalChildren) {
    if($count > 1 && $totalChildren !== 1 && ($count <= $totalChildren))
        showIcon($this);
    else hideIcon($this);
}

function setActive($this, $index) {
    $this
        .find(".flat-slider-item")
        .eq($index)
        .addClass("active");
}
function setThisActive($this) {
    $this
        .siblings(".flat-slider-item.active")
        .removeClass("active");
    $this
        .addClass("active")
}

function showSliderData(iSlider) {

    var sliderIndex = "slider"+iSlider;
    var memberYear = "members"+window[sliderIndex][0].title;
    switchCarousel(sliderIndex, 0, iSlider, memberYear);

}


function showActiveData($this,$index) {
    var $iSlider = $this.closest(".flat-slider");
    var i,sliderClass;
    for(i=0; i<sliderList.length; i++){
        sliderClass = "slider-"+i;
        if($iSlider.hasClass(sliderClass)){
            $iSlider=i;
            break;
        }
    }
    var sliderIndex = "slider"+$iSlider;
    var memberYear = "members"+window[sliderIndex][$index].title;
    $(".flat-slider.slider-"+$iSlider)
        .find(".carousel-indicators")
        .html(" ");
    $(".flat-slider.slider-"+$iSlider)
        .find(".carousel-inner")
        .html(" ");

    switchCarousel(sliderIndex, $index, $iSlider, memberYear);



    // $(".flat-slider.slider-"+$iSlider)
    //     .find(".title-body")
    //     .fadeOut(function () {
    //         $(this)
    //             .find(".title")
    //             .html(window[sliderIndex][$index].title)
    //             .end()
    //             .find(".body")
    //             .html(window[sliderIndex][$index].body)
    //     })
    //     .fadeIn();

}
function switchCarousel(sliderIndex, $index, $iSlider, memberYear) {
    // slider-1 0 1 members2010
    var k=0;
    for(k=0; k<window[sliderIndex][$index].members; k++ ){
        $(".flat-slider.slider-"+$iSlider)
            .find(".carousel-indicators")
            .append('' +
                '<li data-target="'+"#slider-"+$iSlider+'" data-slide-to="'+k+'"></li> ');
        $(".flat-slider.slider-"+$iSlider)
            .find(".carousel-inner")
            .append('' +
                '<div class="carousel-item"> ' +
                    '<figure class="member-image"> ' +
                        '<img src="'+ window[memberYear][k].image +'"> ' +
                    '</figure> ' +
                '<div class="member-name">' +
                    '' + window[memberYear][k].name +
                '</div>' +
                '<div class="member-data">' + window[memberYear][k].year +
                '</div>' +
                '</div>'
            );
    }
    $(".flat-slider.slider-"+$iSlider)
        .find(".carousel-indicators li")
        .eq(0).addClass("active");
    $(".flat-slider.slider-"+$iSlider)
        .find(".carousel-inner .carousel-item")
        .eq(0).addClass("active");
}
$(document).ready(function () {
    var $val; //initialise count=1 as the first thing

    sliderList = $(".flat-slider");

    calculateVisible(); // Second Thing to do. Calculate Visible tiles
    checkControls(); // Check Controls Visibility after tiles visibility

    // these classes affect the $visibility of tiles
    $(".flat-slider-item").addClass("col-12 col-lg-4 col-md-4");

    var iSlider = 0;
    $(".flat-slider").each(function () {
        var $count = 1;
        var $totalChild = $(this)
            .find(".flat-slider-content")
            .children()
            .length;
        setActive($(this), 0);
        $(this)
            .addClass("slider-" + iSlider)
            .find(".slider-next")
            .on("click", function () {
                if ($count <= $totalChild - $visible) {
                    $val = $count * 100;
                    $(this)
                        .closest(".flat-slider")
                        .find(".flat-slider-item")
                        .animate({
                            left: '-' + parseInt($val / $visible) + '%'
                        });
                    if ($visible === 1) {
                        $(this)
                            .closest(".flat-slider")
                            .find(".item-group")
                            .eq($count)
                            .click();
                    }
                    $count++;
                    checkNext($(this), $count, $totalChild);
                    checkPrev($(this).closest(".flat-slider").find(".slider-prev"), $count, $totalChild);
                }
            })
            .end()
            .find(".slider-prev")
            .on("click", function () {
                if ($count > 1 && $totalChild !== 1 && ($count <= $totalChild)) {
                    $count--;
                    $val = 100;
                    $(this)
                        .closest(".flat-slider")
                        .find(".flat-slider-item")
                        .animate({
                            left: '+=' + $val / $visible + '%'
                        });
                    if ($visible === 1) {
                        $(this)
                            .closest(".flat-slider")
                            .find(".flat-slider-item")
                            .eq($count - 1)
                            .click();
                    }
                    checkPrev($(this), $count, $totalChild);
                    checkNext($(this).closest(".flat-slider").find(".slider-next"), $count, $totalChild);
                }
            })
            .end()
            .find(".flat-slider-item")
            .on("click", function () {
                if (!($(this).hasClass("active"))) {
                    setThisActive($(this));
                    showActiveData($(this), $(this).index());
                }
            });
        showSliderData(iSlider);
        iSlider++;
    });

});

$(window).resize(function () {
    $viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    calculateVisible();
});