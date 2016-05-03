$(document).ready(function() {
    setTimeout(function () {
        initFullPage();
        console.log('initialised');
        $('#teknovHomepage').css("display", "block");
        console.log('displayed!');
    }, 600);


});


var initFullPage = function(){
    $('#teknovHomepage').fullpage({
        anchors: ['home', 'services', 'aboutUs', 'team', 'contactUs'],
        afterLoad: function (anchorLink, index) {
            $(".nav").find(".active").removeClass("active");
            $('li[data-menuanchor="'+ anchorLink + '"]').addClass("active");
        }
    });

    //for navigation active class
    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
}