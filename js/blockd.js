/**
 * Created by Jackson on 7/31/16.
 */

$(document).ready(function () {
    var transparent = true;
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    var mainbottom = $('.top').offset().top + $('.top').height() - 250;

    // on scroll,
    $(window).on('scroll',function(){

        // we round here to reduce a little workload
        var stop = Math.round($(window).scrollTop());

        if (stop > mainbottom) {
            $('.navigation').addClass('nav-fixed');
            $('.brand').removeClass('hidden');
            $('.forums').removeClass('.col-md-offset-1');
        } else {
            $('.navigation').removeClass('nav-fixed');
            $('.brand').addClass('hidden');
            $('.forums').addClass('.col-md-offset-1');
        }

    });
});