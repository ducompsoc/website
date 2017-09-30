/**
 * Created by Alistair on 17/09/2016.
 */

$(document).ready(function() {

    var a = document.getElementsByClassName("banner")[0];

    $(window).resize(function () {
        var windowWidth = $(window).width();

        if(windowWidth > 768) {
            resizeGT768(a);
        }
        else if(windowWidth < 769) {
            resizeLTE768(a, windowWidth);
        }
    });

    $(window).load($(window).resize());

    a.addEventListener("load", function(){
        var windowWidth = $(window).width();

        if(windowWidth > 768) {
            resizeGT768(a);
        }
        else if(windowWidth < 769) {
            resizeLTE768(a, windowWidth);
        }
    });

    function resizeGT768(a) {
        $(".banner-container > object").css("height", "auto");
        $(".banner-container").css("height", "auto");
        // get the inner DOM of banner svg
        var svgDoc = a.contentDocument;
        // get the inner element by id
        var delta = svgDoc.getElementById("Layer_1");
        delta.setAttribute("viewBox", "0 0 420 140");
    }

    function resizeLTE768(a, windowWidth) {
        $(".banner-container > object").css("height", ((windowWidth - 320)/5)*2.5 + 150);
        $(".banner-container").css("height", ((windowWidth - 320)/5)*2.5 + 150);
        // get the inner DOM of alpha.svg
        var svgDoc = a.contentDocument;
        // get the inner element by id
        var delta = svgDoc.getElementById("Layer_1");
        delta.setAttribute("viewBox", "105 35 210 70");
    }

});