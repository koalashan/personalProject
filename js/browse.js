// ---------------  carousel  ------------------
$(document).ready(function(){
    $('.slider').each(function() {
        var $this = $(this);
        var $group = $this.find('.slide_group');
        var $slides = $this.find('.slide');
        var bulletArray = [];
        var currentIndex = 0;
        var timeout;
        
        // move function
        function move(newIndex) {
          var animateLeft, slideLeft;
          
          advance();  // 控制圖片推進的function
          
          // choose any div that is animated OR ...
          // 如果在if句型中使用return，這些條件語句必須放在函數中，否則會報錯
          // return 從當前的方法中退出，返回該呼叫的方法的語句處，繼續執行 ==> ？
          if ($group.is(':animated') || currentIndex === newIndex) {  // 當前點點索引 等於 下一個索引點點
            return;
          }
          
          // bulletArray => 點點陣列
          // 移除當前索引點點的'active' class => 加上黃色&pointer
          bulletArray[currentIndex].removeClass('active');  
          // newIndex為其他索引點點 => 在哪裡告訴他newIndex是誰？
          bulletArray[newIndex].addClass('active');
          
          if (newIndex > currentIndex) {  // 如果下一個點點索引 > 當前點點索引
            slideLeft = '100%'; 
            animateLeft = '-100%';  // 哪裡寫到slideLeft, animateLeft要執行的動作？(上方有宣告
          } else {  // 當前點點在最後一個時
            slideLeft = '-100%';
            animateLeft = '100%';
          }
          
          // $(selector).eq(index) 傳回指定索引號的元素
          // 抓到的.slide(img)的下個索引值(下個img)的css
          $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
          });
          // animate({properties}[, duration, easing, complete])
          $group.animate({
            left: animateLeft}, function() {
            $slides.eq(currentIndex).css({
              display: 'none'
            });
            $slides.eq(newIndex).css({
              left: 0
            });
            $group.css({
              left: 0
            });
            currentIndex = newIndex;
          });
        }
        
        // 控制計時器的function
        function advance() {
          clearTimeout(timeout);  // 每次都清除timeout
            // setTimeout(控制函數, 間隔時間);
          timeout = setTimeout(function() {
            if (currentIndex < ($slides.length - 1)) {  // 當前點點索引 < (此例為)4 - 1 => 3 => 可以是0, 1, 2
              move(currentIndex + 1);  // 移動當前索引 + 1
            } else {  // 當索引為3的時候
              move(0);  // 0為索引值 => move(i)的方法？
            }
          }, 4000);
        }
        
        
        $('.next_btn').on('click', function() {
          if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
          } else {
            move(0);
          }
        });
        
        $('.previous_btn').on('click', function() {
          if (currentIndex !== 0) {
            move(currentIndex - 1);
          } else {
            move(3);
          }
        });

        // 動態新增<a class="slide_btn">&bull;</a>
        $.each($slides, function(index) {  // $.each指的是？
          var $button = $('<a class="slide_btn">&bull;</a>');
          
          if (index === currentIndex) {
            $button.addClass('active');
          }
          $button.on('click', function() {
            move(index);
          }).appendTo('.slide_buttons');  // 子appendTo父
          bulletArray.push($button);  // 點點陣列中最後方加上<a class="slide_btn">&bull;</a>
        });
        
        advance();  // 控制圖片推進的function
      });
});

// ---------------  AOS  ------------------
// offset: 120, // 以像素(px)為單位，水平移動
// delay: 0, //延遲時間，範圍：0~ 3000
// duration: 400, //動畫時間，範圍：0~ 3000
// easing: ‘ease’, // 動畫速率效果
// once: false, // 是否重複觸發動畫
// mirror: false, // 是否超過滾動範圍時，做移出的動畫效果
// anchorPlacement: ‘top-bottom’, // 滾動方向觸發動畫，預設由上到下

$(function(){
  AOS.init({
    delay: 0,
    duration: 1000,
    easing: 'ease',
    once: true,
    mirror: false,
    // anchorPlacement: 'top-bottom',
  });
})