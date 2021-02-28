function search(){
  let element = document.getElementById("search");
  element.classList.toggle("visualy-hidden");
    
}
function closeSearch(){
    document.getElementById('search').classList.add("visualy-hidden")
}
function openMenu(){
  let element = document.getElementById("menu");
  element.classList.toggle("visualy-hidden");
}
function closeMenu(){
  document.getElementById('menu').classList.add("visualy-hidden")
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("hero-slider-list__item");
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


