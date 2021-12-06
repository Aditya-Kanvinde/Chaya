
//Preload Animation
var myTimeline = anime.timeline();

myTimeline.add({
  
  targets:'.preload-logo',
  scale:[0,1,1.5,1],
  opacity:[0,1],
  translateZ: 0,
  easing:'spring', 
})
.add(
  {
    targets: '#preload-text path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    fill: '#FFFFFF',
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
    complete: function(anim) {
      console.log('Animation complete');
      setTimeout(()=>{
        
        preload.classList.add('preload-finish');
        afterload.classList.add('afterload-start');
      },2000)
    }
  },'-=2000'
)


window.onload = ()=>{
  preload = document.querySelector('.preload');
  afterload = document.querySelector('.afterload');
  var controlBtn = document.getElementById('play-pause');

    var mySwiper = new Swiper("#swiper", {
    speed: 400,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    loop: true,
    preloadImages: false,
    lazy: true,
    autoplay: true,
    updateOnImagesReady: false,
    lazyLoadingInPrevNextAmount: 0, 
    autoplayDisableOnInteraction: false,
    onLazyImageReady(s) {
      if (!s.params.autoplay) {
        s.params.autoplay = 2500;
        s.startAutoplay();
      }
    },
  });
  

 const scroll = new SmoothScroll('.navbar a[href*="#"]', {
	speed: 300,
  offset:60,
});


  var lazyLoadInstance = new LazyLoad({
    
  });


  
 
  function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});
  
}







  

