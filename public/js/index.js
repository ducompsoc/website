/**
 * Created by Alistair on 17/09/2016.
 */

$(window).resize(function () {
    var windowWidth = $(window).width();
    if(windowWidth > 768) {
        resizeGT768();
    }
    else if(windowWidth < 769) {
        resizeLTE768(windowWidth);
    }
});

$(window).load($(window).resize);

$(document).ready(function() {

    var a = document.getElementsByClassName("banner")[0];

    a.addEventListener("load", function(){
        // get the inner DOM of alpha.svg
        var svgDoc = a.contentDocument;
        // get the inner element by id
        var delta = svgDoc.getElementById("Layer_1");
        delta.setAttribute("viewBox", "105 35 210 70");

        var windowWidth = $(window).width();

        if(windowWidth > 768) {
            resizeGT768();
        }
        else if(windowWidth < 769) {
            resizeLTE768(windowWidth);
        }
    });
});

function resizeGT768() {
    $(".banner-container > object").css("height", "auto");
    $(".banner-container").css("height", "auto");

    var a = document.getElementsByClassName("banner")[0];

    resizeSVGGT768(a);
}

function resizeLTE768(windowWidth) {
    $(".banner-container > object").css("height", ((windowWidth - 320)/5)*2.5 + 150);
    $(".banner-container").css("height", ((windowWidth - 320)/5)*2.5 + 150);
    var a = document.getElementsByClassName("banner")[0];
    // get the inner DOM of alpha.svg
    var svgDoc = a.contentDocument;
    // get the inner element by id
    var delta = svgDoc.getElementById("Layer_1");
    delta.setAttribute("viewBox", "105 35 210 70");
}

function resizeSVGGT768(a) {
    // get the inner DOM of banner svg
    var svgDoc = a.contentDocument;
    // get the inner element by id
    var delta = svgDoc.getElementById("Layer_1");
    delta.setAttribute("viewBox", "0 0 420 140");
}