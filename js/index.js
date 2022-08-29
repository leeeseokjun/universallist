$("document").ready(function(){
    $("label").click(function(){
        $(".m-box").slideToggle(400);
    }) //햄버거

    
    $(".main-content .content-item .item").click(function(){
        let i = $(this).index()
        $(".main-content .content-item .item").removeClass("on").eq(i).addClass("on")
        $(".content .item-wrap .menu .i").hide().eq(i).show()
    })
    $(".main-content .content-item .item").removeClass("on").eq(0).addClass("on")
    $(".content .item-wrap .menu .i").hide().eq(0).show()

    //메인 컨텐츠

    $(".content .menu .item-new .text ul li").click(function(){
        let i = $(this).index()
        $(".content .menu .item-new .text ul li").removeClass("on").eq(i).addClass("on")
        $(".content .menu .item-new .product").hide().eq(i).css('display','flex')
        $(".content .menu .item-new .selected").hide().eq(i).show()   
    })
    $(".content .menu .item-new .text ul li").removeClass("on").eq(0).addClass("on")
    $(".content .menu .item-new .product .product-item img").show()
    $(".content .menu .item-new drake").show()
    //new arrival

    const swiper = new Swiper(".swiper.swiper-model",{
        effect: "cards",
        grabCursor: true,
    });
})