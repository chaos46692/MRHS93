

 var isMobile = ('ontouchstart' in document.documentElement && /mobi/i.test(navigator.userAgent));

 function rsz() {
    var h = $(window).height() / 2.0;
    var hlf = h / 2.0;
    var thrd = 0.3 * h;
    var arr =  h - 60;

    $(".container").css('min-height',h + 'px')
    $(".containersm").css('min-height',hlf + 'px')
    $(".fill").css('margin-top',thrd + 'px')
    $(".fillsm").css('margin-top',thrd+ 'px')
    $(".down-arrow").css('top',arr + 'px')
 }

$( document ).ready(function() {
    if (isMobile) {
      rsz();
    }

    $( window ).resize(function() {
        if (isMobile) {
          rsz();
        }
      });
});
