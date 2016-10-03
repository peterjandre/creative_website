$(function () { // wait for document ready
    
    // init
    var $screenSVG = ("#movie-screen-svg")
    var $allSVG = ("#all-svg")
    var $rotator = ("#rotator")
    var $next = ("#right-button")
    var $prev = ("#left-button") 
    var $five = ("#five")
    var $four = ("#four")
    var $three = ("#three")
    var $two = ("#two")
    var $ratings1 = ("#ratings1")
    var $ratings2 = ("#ratings2")
    var $ratings3 = ("#ratings3")
    var $ratings = (".ratings")
    var $bars = ("#black-bars")
    var $ratingsNav = ("#nav-container")

    var tl = new TimelineMax()

    function resetRotation() {
      TweenLite.set($($rotator), {rotation:0});
    } 

    tl.to($rotator, 1.5, {rotation: 360, transformOrigin:"bottom 50%", ease: Power0.easeNone, onComplete: resetRotation})
      .to($five, 0.1, {autoAlpha: 1}, '-=1.4')
      .to($screenSVG, 0.1, {opacity: 0.94}, '-=1.5')
      .to($screenSVG, 0.1, {opacity: 0.98}, '-=1.3')
      .to($screenSVG, 0.1, {opacity: 0.93}, '-=1.1')
      .to($screenSVG, 0.1, {opacity: 0.99}, '-=0.9')
      .to($screenSVG, 0.1, {opacity: 0.90}, '-=0.7')
      .to($screenSVG, 0.1, {opacity: 0.98}, '-=0.5')
      .to($screenSVG, 0.1, {opacity: 0.89}, '-=0.3')
      .to($five, 0.1, {autoAlpha: 0}, '-=0.1')
      .to($rotator, 1.5, {rotation: 360, transformOrigin:"bottom 50%", ease: Power0.easeNone, onComplete: resetRotation})
      .to($four, 0.1, {autoAlpha: 1}, '-=1.4')
      .to($screenSVG, 0.1, {opacity: 0.94}, '-=1.5')
      .to($screenSVG, 0.1, {opacity: 0.90}, '-=1.3')
      .to($screenSVG, 0.1, {opacity: 0.97}, '-=1.1')
      .to($screenSVG, 0.1, {opacity: 0.92}, '-=0.9')
      .to($screenSVG, 0.1, {opacity: 0.90}, '-=0.7')
      .to($screenSVG, 0.1, {opacity: 0.98}, '-=0.5')
      .to($screenSVG, 0.1, {opacity: 0.87}, '-=0.3')
      .to($four, 0.1, {autoAlpha: 0}, '-=0.1')
      .to($rotator, 1.5, {rotation: 360, transformOrigin:"bottom 50%", ease: Power0.easeNone, onComplete: resetRotation})
      .to($three, 0.1, {autoAlpha: 1}, '-=1.4')
      .to($screenSVG, 0.1, {opacity: 0.90}, '-=1.5')
      .to($screenSVG, 0.1, {opacity: 0.96}, '-=1.3')
      .to($screenSVG, 0.1, {opacity: 0.95}, '-=1.1')
      .to($screenSVG, 0.1, {opacity: 0.92}, '-=0.9')
      .to($screenSVG, 0.1, {opacity: 0.90}, '-=0.7')
      .to($screenSVG, 0.1, {opacity: 0.86}, '-=0.5')
      .to($screenSVG, 0.1, {opacity: 0.89}, '-=0.3')
      .to($three, 0.1, {autoAlpha: 0}, '-=0.1')
      .to($rotator, 0.7, {rotation: 180, transformOrigin:"bottom 50%", ease: Power0.easeNone, onComplete: resetRotation})
      .to($two, 0.1, {autoAlpha: 1}, '-=0.6')
      .to($allSVG, 0.1, {opacity: 0}, '-=0.5')
      .to($bars, 0.1, {autoAlpha: 1})
      .to($ratings1, 0.5, {autoAlpha: 1})
      .to($allSVG, 0.1, {autoAlpha: 1})
      .to($ratingsNav, 0.5, {autoAlpha: 1});
                             
    var i = 0;
    var slides = $(".ratings");
    var length = slides.length - 1;

    function nextScreen () {

      if (i < length) {
        $(slides[i]).css("opacity", "0");
        $(slides[i+1]).css("opacity", "1");
        $("#left-button").css("visibility", "visible");
        i++;
        if (i < length) {
          return false;
        } else {
          $("#right-button").css("visibility", "hidden"); 
        }
      }

    }

    function prevScreen () {

      if (i != 0) {
        $(slides[i]).css("opacity", "0");
        $(slides[i-1]).css("opacity", "1");
        $("#right-button").css("visibility", "visible");
        i--;
      } if (i != 0) {
        return false;
      } else {
        $("#left-button").css("visibility", "hidden");
      }

    }    

    $("#left-button").click(function(){
      console.log("left clicked.");
      prevScreen();
    });

    $("#right-button").click(function(){
      console.log("right clicked.");
      nextScreen();
    });

  });