$(function () { // wait for document ready
    // init

  if (!Modernizr.touchevents){
    var controller = new ScrollMagic.Controller();
    // image animation
    var hideAni = TweenMax.to('#eighth', 1, {autoAlpha: 0});

    // image animation
    var aniScene = new ScrollMagic.Scene({
        triggerHook: 0,
        triggerElement: '#ratings',
        offset: 50,
        duration: 150
      })
      .setTween(hideAni)
      .addTo(controller);            

    // create scene to pin and link animation
    var slides = document.querySelectorAll("section.panel");

    for (var i = 0; i < slides.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: slides[i],
        triggerHook: 0
      })
      .setPin(slides[i])
      .addTo(controller)
    };
  }

  });