$("document").ready(function(){
    $("label").click(function(){
        $(".m-box").slideToggle(400);
    }) //햄버거

    
    $(".main-content .content-item .item").click(function(){
        const i = $(this).index()
        $(".main-content .content-item .item").removeClass("on").eq(i).addClass("on")
        $(".content .item-wrap .menu .i").hide().eq(i).show()
    })
    $(".main-content .content-item .item").removeClass("on").eq(0).addClass("on")
    $(".content .item-wrap .menu .i").hide().eq(0).show()

    //메인 컨텐츠

    $(".content .menu .item-new .text ul li").click(function(){
        const i = $(this).index()
        $(".content .menu .item-new .text ul li").removeClass("on").eq(i).addClass("on")
        $(".content .menu .item-new .product").hide().eq(i).css('display','flex')
        $(".content .menu .item-new .selected").hide().eq(i).show()   
    })
    $(".content .menu .item-new .text ul li").removeClass("on").eq(0).addClass("on")
    $(".content .menu .item-new .product .product-item img").show()
    $(".content .menu .item-new drake").show()
    //new arrival

    $(".content .menu .item-journal .txt-day .day ul li").click(function(){
        const i = $(this).index()
        $(".content .menu .item-journal img").fadeOut().eq(i).fadeIn()
    })

    const swiper1 = new Swiper(".swiper.swiper-model",{
        effect: "cards",
        grabCursor: true,
    });

    $(".sub-content .sub-txt ul li").click(function(){
        const i = $(this).index()
        $(".sub-content .sub-txt ul li").removeClass("on").eq(i).addClass("on")
        $(".sub-content .sub-txt ul li span").removeClass("on").eq(i).addClass("on")
    })
    const swiper2 = new Swiper(".swiper.sub-product", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
})