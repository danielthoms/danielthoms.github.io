var slideIndex = 1;
var timeout;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    clearTimeout(timeout);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndex-1].style.display = "block"; 
    timeout = setTimeout(circleSlides, 7000); // Change image every 7 seconds
}

function circleSlides(){
    var slides = document.getElementsByClassName("mySlides");
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    showSlides();
    
}

function plusAuSlides(n){
  var slides = document.getElementsByClassName("mySlides");
  slideIndex++;
  if (slideIndex> slides.length) {slideIndex = 1}
  if (slideIndex< 1) {slideIndex = slides.length}
  showSlides(slideIndex += n);
}
