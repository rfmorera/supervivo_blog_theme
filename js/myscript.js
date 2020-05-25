/*$(document).ready(function(){
    var lastSection = $(".nav li.active > a").attr('href');

    $(".navbar").on("activate.bs.scrollspy", function(){
        var x = $(".nav li.active > a").attr('href');

        $(lastSection+" .btncommentsHide").css({"display" : "none"});

        var estado = $(x + " .comments").css("display");
        console.log(estado);
        if(estado != "none"){
            $(x+" .btncommentsHide").css({"display" : "inherit"});
        }
        lastSection = x;
    })
});
*/
$(".fade-out-modal").on("click", function(){
    $(this).parent().fadeOut();
});

$(".btncomments").on('click', function () {
    var target = $(this).attr('data-target');
    $(target.toString()).slideDown(1200);
});

$(".btncommentsHide").on('click', function () {
    var target = $(this).attr('data-target');
    $(target.toString()).slideUp(1200);
});

$("header #btn-sidenav").on("click", function(){
    $(".sidenav").css({"display" : "flex"})/*
        .removeClass("animate-left")
        .addClass("animate-left-hide")*/;
    //alert("as");
});

$("#btn-sidenavHide").on("click", function(){
    $(".sidenav").css({"display" : "none"})/*
    .removeClass("animate-left-hide")
    .addClass("animate-left")*/;
    //alert("as");
});

$(document).ready(function(){
    // Get the modal
  var modal = $("#imgModal");
  
    // Get the <span> element that closes the modal
    var span = $(".close-img");
  
    // When the user clicks on <span> (x), close the modal
    span.on("click", function(){
        $(modal).css({"display" : "none"});
    });
  
    // Get all images and insert the clicked image inside the modal
    // Get the content of the image description and insert it inside the modal image caption
    var images = $(".img-frank > img");
    var modalImg = $("#img01");
    var captionText = $("#caption-img");
    var i;
    $(".img-frank > img").each(function(){
        $(this).on("click", function(){
            $(modal).css({"display" : "block"});
            $(modalImg).attr("src", $(this).attr("data-src"));
            $(modalImg).attr("alt", $(this).attr("alt"));
            modalImg.focus();
            $(captionText).html( $(this).next().html());
            
            //alert("found " + $(modal).css("position"));
        }); 
    });

    $("[data-img-tesis]").on("click", function(){
        //alert($("meta[property='og:image']").attr("content") );
        $("meta[property='og:image']").attr("content", $(this).attr("data-img-tesis").toString());
    });
});