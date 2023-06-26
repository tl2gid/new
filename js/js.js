window.onload = function(){

    //스크롤 이벤트
    AOS.init();
    
    $(".menu-btn").click(function(){
        $(".site-navigation").toggleClass("showMenu");
        $(".menu-bg").toggle();
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
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        infinite: false,
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

    $(function(){ //info page4 modal
        $('.thumbs>img').on({
            "click" : function(){
                var imgSrc = $(this).attr('src');
                $('#mainImg>img').attr('src',imgSrc);
            }
        });          
    });

    //모달창에서 뒤로가기 버튼 클릭시 모달 꺼지기
    $(".modal").on("shown.bs.modal", function()  {
        var urlReplace = "#" + $(this).attr('id');
        history.pushState(null, null, urlReplace);
    });
    
        $(window).on('popstate', function() {
        $(".modal").modal('hide');
    });


    //연혁 스크롤 이벤트
    $(window).scroll(function () {   
    
        var scrT = $(this).scrollTop(),
            winM = $(window).height() / 2,
            historyContT = $('.history').offset().top,
            historyItem = $('.st'),
            historyLine = $('.history-line .line');

        historyItem.each(function () {
            if (scrT + winM >= $(this).offset().top) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        if (scrT + winM > historyContT) {
            var activeItem = $('.st.active').last().position().top,
                lastItem = $('.history').last().find('.st').last(),
                lastItemH = lastItem.height();

            historyLine.css('height', activeItem - 7);

            if (lastItem.hasClass('active')) {
                historyLine.css('height', activeItem + lastItemH+200);
            }
        } else {
            historyLine.css('height', 0);
        }
    });

}