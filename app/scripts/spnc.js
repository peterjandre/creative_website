$(function () { // wait for document ready

    var modalCookie = Cookies.get("readModal")

    if (modalCookie == "yes") {
      console.log("cookie is on system")
    } else {
      Cookies.set('readModal', 'yes', {expires: 7});
      $('#playModal').modal("show");
      console.log("cookie has been set, modal is shown")
    };

    $('#backtotop').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 'slow');
      return false;
    });


    // create stars - each star its own unique div
    for (x = 0; x < 150; x++) {
      var flashBang = document.createElement('div');
      var starWidth = window.innerWidth;
      var starHeight = window.innerHeight/2;

      flashBang.className = "flashy";
      flashBang.id = "flashy" + x;
      flashBang.style.top = (Math.random() * starHeight) + "px"
      flashBang.style.left = (Math.random() * starWidth) + "px"
      document.getElementById('pin-spnc').appendChild(flashBang);
    }

    // animation for flashing stars
    var $flash1 = $(".flash")
    var $vanish = $("#white-screen")
    var $title = $("#spnc-title")       

    var flashLights = new TimelineMax({repeat: -1});

    flashLights
      .to($flash1, 0.2, {autoAlpha: Math.random()})
      .to($flash1, 0.1, {autoAlpha: Math.random()})
      .to($flash1, 0.2, {autoAlpha: Math.random()})
      .to($flash1, 0.1, {autoAlpha: Math.random()})
      .to($flash1, 0.1, {autoAlpha: Math.random()})
      .to($flash1, 0.1, {autoAlpha: Math.random()})
      .to($flash1, 0.2, {autoAlpha: Math.random()})

    for (var x = 0; x < 150; x++) {
      var $flash = $("#flashy" + x)

      flashLights
        .to($flash, 0.2, {autoAlpha: Math.random()}, "-=1")
        .to($flash, 0.1, {autoAlpha: Math.random()}, "-=0.8")
        .to($flash, 0.2, {autoAlpha: Math.random()}, "-=0.7")
        .to($flash, 0.1, {autoAlpha: Math.random()}, "-=0.5")
        .to($flash, 0.1, {autoAlpha: Math.random()}, "-=0.4")
        .to($flash, 0.1, {autoAlpha: Math.random()}, "-=0.3")
        .to($flash, 0.2, {autoAlpha: Math.random()}, "-=0.1")
        .to($flash, 0.3, {scale: 1.5}, "-=0.3")
    };

    flashLights
      .to($vanish, 5.5, {opacity: 1}, "-=4")
      .to($title, 5.5, {backgroundColor: "white", boxShadow: "0px 0px 0px white"}, "-=5.5")

// init controller
      var controller = new ScrollMagic.Controller();
      
    // pinned cover image and back-to-top button for non-touch devices only
    if (!Modernizr.touchevents) {
        
      
      // build scene for pinned cover page
        var scene = new ScrollMagic.Scene({
          triggerElement: "#trigger-spnc",
          duration: 400,
          offset: 370
        })          
                .setPin("#pin-spnc")
                .addTo(controller);
                                                  
    }
      // build scene for back-to-top button
        var scene3 = new ScrollMagic.Scene({
          triggerElement: "#trigger-spnc",
          offset: 1200
        })
                .setTween("#backtotop", {autoAlpha:1})
                .addTo(controller);        
  });