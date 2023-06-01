window.onload = function(){

    AOS.init();

    //scroll smooth

    
    $(".menu-btn").click(function(){
        $(".site-navigation").toggleClass("showMenu");
        $(this).toggleClass("close-btn",1000);
    })

    $(".link_site").click(function(){
        $(".link_site ul").toggle()
    })

    $(".slide").click(function(){
        $(this).find('a').addClass('active');
        $(".slide").not($(this)).find('a').removeClass('active');
    })

    //반응형 슬라이드
    $('.slider-wrap').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 740,
                settings: 'unslick'
            }
        ]
    });
    $(window).on('resize', function() {
        $('.slider-wrap').slick('resize');
    });

    
              
   
}