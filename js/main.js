

$(document).ready(function(){
  $(".automating_name").mouseover(function(){
   $(".automating_text").stop().slideDown();

  });
  $(".automating_text").mouseout(function(){
   $(".automating_text").slideUp();
  });
 });

 $(document).ready(function(){
   $(".ticketing_name").mouseover(function(){
    $(".ticketing_text").stop().slideDown();

   });
   $(".ticketing_text").mouseout(function(){
    $(".ticketing_text").slideUp();
   });
  });

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*
function setColor(){

  var backgroundColors =['#FFE7D6', '#DDF9F0', '#FFF4D5', "#F6D5FF"]
  var colorChoice=(backgroundColors[Math.floor(Math.random()*backgroundColors.length)])
  $(':root').css('--pop-color2', colorChoice);
} */
