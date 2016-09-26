$(function () { // wait for document ready
    // init

  if (!Modernizr.touchevents){
    var controller = new ScrollMagic.Controller();
    // image animation
    var hideAni = TweenMax.to('#second', 1, {autoAlpha: 0});
    var hideAni2 = TweenMax.to('#fourth', 1, {autoAlpha: 0});
    var hideAni3 = TweenMax.to('#sixth', 1, {autoAlpha: 0});

    // image animation
    var aniScene = new ScrollMagic.Scene({
        triggerHook: 0,
        triggerElement: '#reunion',
        offset: 50,
        duration: 150
      })
      .setTween(hideAni)
      .addTo(controller)
      .addIndicators();

    var aniScene2 = new ScrollMagic.Scene({
        triggerHook: 0,
        triggerElement: '#lmad',
        offset: 50,
        duration: 150
      })
      .setTween(hideAni2)
      .addTo(controller)
      .addIndicators();

    var aniScene3 = new ScrollMagic.Scene({
        triggerHook: 0,
        triggerElement: '#spnc',
        offset: -200,
        duration: 100
      })
      .setTween(hideAni3)
      .addTo(controller)
      .addIndicators();            

    // create scene to pin and link animation
    var slides = document.querySelectorAll("section.panel");

    for (var i = 0; i < slides.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: slides[i],
        triggerHook: 0
      })
      .setPin(slides[i])
      .addIndicators()
      .addTo(controller)
    };
  }

  });