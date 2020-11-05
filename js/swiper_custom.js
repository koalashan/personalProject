var swiper = new Swiper('.swiper-container', {
    // direction: horizontal,  // horizontal | vertical
    // initialSlide: 0,  // 初始幻燈片的索引號，預設為 0
    // speed: 300,  // 過渡持續時間(ms)
    // setWrapperSize: false,  // 啟用此選項，插件將在滑動包裝器上將寬度/高度設置為等於所有幻燈片的總大小。對於大多數不支持 Flexbox 佈局的瀏覽器，通常應將其用作兼容性後備選項，預設為 false
    spaceBetween: 156,  // 幻燈片之間的距離(px)，預設為 0
    // loop: false,  // 是否啟用循環，預設值為 false
    centeredSlides: true,
    // scrollbar:'.swiper-scrollbar' ,
    // scrollbarHide: false,
    loop: true,  // 是否啟用循環
    // slidesPerView: ,  // 每個視圖的幻燈片數量，與 loop：true 一起使用，設定值為 auto，會自動輪播，需要指定 loopedSlides 參數以及要循環的幻燈片數量。
    // autoplay: {  // 自動輪播效果，須搭配 delay
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});