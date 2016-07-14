$(function () {

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }
    ;

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }
    ;

    //Drag and move disable

    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });

});


    //Slider function

$(document).ready(function ($) {
    $('.my-slider').unslider({
        autoplay: true,
        speed: 900,
        arrows: false
    });
});

    //Window load

$(window).load(function () {

    $(".loader_inner").fadeOut();
    $(".loader").delay(300).fadeOut("slow");

});

    //Set equal height for blocks with products

function setEqualHeight(columns) {
    var tallestColumn = 0;
    columns.each( function () {
        var currentHeight = $(this).height();
        if (currentHeight > tallestColumn) {
            tallestColumn = currentHeight;
        }});
        columns.height(tallestColumn);
    }

$(document).ready(function () {
    setEqualHeight($(".product"));
});


    //Google map

function initialize() {
    var mapProp = {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
