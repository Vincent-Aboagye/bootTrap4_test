$(document).ready(function(){
    $("#myCarousel").carousel({interval: 2000});
    $("#carouselButton").onclick(function(){
        if ($("#carouselButton").children("span").hasClass("fa-pause")){
            $("#myCarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }
        else {
            $("#myCarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        }
        
    });

    $("#loginButton").onclick(function(){
        $("#loginModal").modal('toggle');
    });
    $("#reserveButton").onclick(function(){
        $("#reservationModal").modal('toggle');
    });

});