$(document).ready(function() {
  var myElement = $('#unwrittenpoem');
  // $('p').on('mouseover', function() {
  //   $(this).css({
  //     color: "#42cbad",
  //     "font-weight": "700"
  //     "line-height": "40px"
  //   });
  // }
  // All JS code goes here!
  $('.text').on('mouseover', function() {
    $(this).css({
      "color": "#00008B",
      "font-weight": "700",
      "line-height": "55px",
      "attribute": "value",
    });
  });


  $(window).on('scroll', function() {
      var st = $(this).scrollTop();
      myElement.css({
          'opacity' : 1 - st/1200
      });
    });
});
