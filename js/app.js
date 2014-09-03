$(function(){
    $('.carousel').slick({
        arrows : false,
        autoplay : false,
        dots : true,
        slidesToShow : 2,
        slidesToScroll : 2,
        responsive: [{
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });

    var quotes = ['Peter and the team were great throughout the build project',
       'Not only was their work delivered on time to a high standard, but it was really the simple things they did well that stood out',
       'The team added value with both cost saving and practical suggestions', 
       'Nice guys who took care and pride in their work making us trust them',
       'We would not hesitate to recommend them or to use them again for the next phase of our project'
       ], i = 0, sp = $('div.quote-inner'), nav = $('nav');

    sp.hide();

    function fadeInAndOut(){
        sp.text(quotes[i]);
        sp.fadeIn(300, function(){
            setTimeout(function(){
                i = (i === (quotes.length-1) ? 0 : (i+1));
                sp.fadeOut(300, fadeInAndOut);
            }, 4000);
        });
    }

    fadeInAndOut();

    $('a').click(function(e){
        var el = $(this),
            id = el.attr('data-scroll-to');
        if(!id)
            return;
        nav.removeClass('expanded');
        $("body").animate({scrollTop: $(id).offset().top - 40}, "200");
        $('.top-bar-section li').removeClass('active');
        el.parents('li:first').addClass('active');
        e.preventDefault();
    });
})
