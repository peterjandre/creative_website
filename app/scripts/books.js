$(function () { // wait for document ready
      // init controller
      var controller = new ScrollMagic.Controller();

      // build tween

      var tween2 = TweenMax.to("#box1", 2, {borderRadius:"25px", borderColor:"rgb(205,83,104)"})
      var tween3 = TweenMax.to("#box2", 2, {borderRadius:"25px", borderColor:"rgb(205,83,104)"})
      var tween4 = TweenMax.to("#box3", 2, {borderRadius:"25px", borderColor:"rgb(205,83,104)"})
      var tween5 = TweenMax.to("#box4", 2, {borderRadius:"25px", borderColor:"rgb(205,83,104)"})
      var tween6 = TweenMax.to("#box5", 2, {borderRadius:"25px", borderColor:"rgb(205,83,104)"})                        

      // build scene

      var scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        duration: 100,
        offset: 100
      })
          .setTween(tween2)
          .addTo(controller);

      var scene3 = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        duration: 100,
        offset: 100
      })
          .setTween(tween3)
          .addTo(controller);

      var scene4 = new ScrollMagic.Scene({
        triggerElement: "#trigger4",
        duration: 100,
        offset: 100
      })
          .setTween(tween4)
          .addTo(controller);

      var scene5 = new ScrollMagic.Scene({
        triggerElement: "#trigger5",
        duration: 100,
        offset: 100
      })
          .setTween(tween5)
          .addTo(controller);

      var scene6 = new ScrollMagic.Scene({
        triggerElement: "#trigger6",
        duration: 100,
        offset: -100
      })
          .setTween(tween6)
          .addTo(controller);                                        
  });