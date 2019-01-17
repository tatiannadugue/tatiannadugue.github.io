$(document).ready(function() {
  // $('p').on('mouseover', function() {
  //   $(this).css({
  //     color: "#42cbad",
  //     "font-weight": "700"
  //     "line-height": "40px"
  //   });
  // }
  // All JS code goes here!
  $('p').on('click', function() {
    $(this).css({
      "color": "#42cbad",
      "font-weight": "700",
      "line-height": "40px",
      // "attribute": "value",
    });
  });
});
