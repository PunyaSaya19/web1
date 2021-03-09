// header
// menu
const menu = document.querySelector('header .container .head .menu');
const closeNavbar = document.querySelector('header .container .head .navbar .nav-close');
const navbar = document.querySelector('header .container .navbar');

menu.onclick = function(){
  navbar.style.marginLeft = '0';
};
closeNavbar.addEventListener('click', function(){
  navbar.style.marginLeft = '-100%';
});

//slideshow
const slides = document.querySelectorAll('header .container .slideshow .slide');
const contenSlide = document.querySelectorAll('header .container .slideshow .slide .conten-slide');
let indexSlide = 0;
function ubahSlide(a, b, c, d){
  slides[a].style.display = 'block';
  slides[b].style.display = 'none';
  slides[c].style.display = 'none';
  slides[a].style.animation = 'slideshow-muncul 1.2s';
  contenSlide[a].style.animation = '1s ' + d + ' forwards';
}
setInterval(function(){
  if (indexSlide == slides.length -1) {
    indexSlide = 0;
  } else{
    indexSlide++;
  }
  if (indexSlide == 0){
    if (window.innerWidth < 720){
      ubahSlide(0, 1, 2, "Mconten-slide1");
    } else {
      ubahSlide(0, 1, 2, "conten-slide1");
    }
  } else if(indexSlide == 1){
    if (window.innerWidth < 720){
      ubahSlide(1, 2, 0, "Mconten-slide2");
    } else{
      ubahSlide(1, 2, 0, "conten-slide2");
    }
  } else if(indexSlide == 2){
    if (window.innerWidth < 720){
      ubahSlide(2, 0, 1, "Mconten-slide3");
    } else{
      ubahSlide(2, 0, 1, "conten-slide3");
    }
  }
}, 5000);

// background head 
const head = document.querySelector('header .container .head');
window.addEventListener('scroll', function(){
  let offsite = window.pageYOffset;
  if (window.innerWidth > 720){
    if ( offsite >= 500){
      head.style.backgroundColor = "#3393f4";
    } else{
      head.style.backgroundColor = "rgb(0,0,0,.2)";
   }
  } else {
    if ( offsite >= 230){
      head.style.backgroundColor = "#3393f4";
    } else {
      head.style.backgroundColor = "rgba(0,0,0,.15)";
    }
  }
});

// bagian galery 
const images = document.querySelectorAll('.galery .container img');
const image = document.querySelector('.galery .active img');
const active = document.querySelector('.galery .active');
let imageIndex;

images.forEach(function(e, i){
  e.addEventListener('click', function(){
    imageIndex = i;
    active.style.animation = "galery-muncul .8s";
    active.style.display = "flex";
    image.src = e.src;
  });
});
active.addEventListener('click', function(e){
  if (e.target.className === "close"){
      active.style.animation = "galery-hilang .5s";
      setTimeout(function() {
       active.style.display = 'none';
      }, 250);
      
  } else if (e.target.className === "next"){
    if ( imageIndex == images.length - 1){
      imageIndex = 0;
    } else {
      imageIndex++;
    }
    image.src = images[imageIndex].src;
    image.style.animation = "galery-munculs .25s";
  } else if (e.target.className === "prev"){
    if (imageIndex === 0){
      imageIndex = images.length - 1;
    } else{
      imageIndex--;
    }
    image.src = images[imageIndex].src;
    image.style.animation = "galery-munculs .25s";
  }
  setTimeout(function(){
    active.style.animation = "none";
    image.style.animation ="none";
  }, 250);
});






window.addEventListener('load', function(){
  const loading = document.getElementById('loading');
  loading.style.display = "none";
});























