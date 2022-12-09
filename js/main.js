$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});


$(".btn-burger").click(function () {
    $(this).toggleClass("close-burger");
    $(".mobile-menu").toggleClass("mobile-menu-show");
});

$(".header__block-bottom-left a").click(function () {
    $(".mobile-menu").toggleClass("mobile-menu-show");
});

$(".header__block-bottom-left a").each(function() {
    $(this).on("click", function() {
    $(".btn-burger").toggleClass("close-burger");
  });
});