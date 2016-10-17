$(function () { // wait for document ready
    
    $('#backtotop').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 'slow');
      return false;
    });

    // init controller
    var controller = new ScrollMagic.Controller();

    var scene2 = new ScrollMagic.Scene({
          triggerElement: "#trigger1",
        })
                .setTween("#backtotop", {autoAlpha:1})
                .addTo(controller);

    if (!Modernizr.touchevents) {
      
      $("#spotify").css("display", "block")    
      
      // build scene
        var scene = new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          duration: 400, 
          offset: 150
        })          
                .setPin("#pin1")
                .addTo(controller);

        $("#nametag-name").css("opacity", "0")

        var nameTween = TweenMax.to("#nametag-name", 1, {autoAlpha: 1})

        var nameScene = new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          duration: 400,
          offset: 150
        })
                .setTween(nameTween)
                .addTo(controller);

        var wipeScene = new ScrollMagic.Scene({
          triggerElement: "#r-trigger2",
          duration: 1000,
          offset: 300
        })
                .setPin("#reunion-pin2")
                .addTo(controller);

        var openScene = new ScrollMagic.Scene({
          triggerElement: "#trigger3",
          duration: 1500,
          offset: 350
        })
                .setPin("#pin3")
                .addTo(controller)

        var $d1 = $("#dweebs_1")
        var $d2 = $("#dweebs_2")
        var $d3 = $("#dweebs_3")
        var $d4 = $("#dweebs_4")
        var $d5 = $("#dweebs_5")
        var $d6 = $("#dweebs_6")
        var $d7 = $("#dweebs_7")
        var $d8 = $("#dweebs_8")
        var $d9 = $("#dweebs_9")
        var $d10 = $("#dweebs_10")
        var $d11 = $("#dweebs_11")
        var $d12 = $("#dweebs_12")
        var $d13 = $("#dweebs_13")
        var $d14 = $("#dweebs_14")                

        var dTween = new TimelineMax();

          dTween
            .to($d1, 1, {strokeDashoffset: 0})
            .to($d2, 1, {strokeDashoffset: 0})
            .to($d3, 1, {strokeDashoffset: 0})
            .to($d4, 1, {strokeDashoffset: 0})
            .to($d5, 1, {strokeDashoffset: 0})
            .to($d6, 1, {strokeDashoffset: 0})
            .to($d7, 1, {strokeDashoffset: 0})
            .to($d8, 1, {strokeDashoffset: 0})
            .to($d9, 1, {strokeDashoffset: 0})
            .to($d10, 1, {strokeDashoffset: 0})
            .to($d11, 1, {strokeDashoffset: 0})
            .to($d12, 1, {strokeDashoffset: 0})
            .to($d13, 1, {strokeDashoffset: 0})
            .to($d14, 1, {strokeDashoffset: 0})

        var dScene = new ScrollMagic.Scene({
          triggerElement: "#trigger3",
          duration: 500,
          offset: 400
        })
                .setTween(dTween)
                .addTo(controller)

        var $a1 = $("#assholes_1")
        var $a2 = $("#assholes_2")
        var $a3 = $("#assholes_3")
        var $a4 = $("#assholes_4")
        var $a5 = $("#assholes_5")
        var $a6 = $("#assholes_6")
        var $a7 = $("#assholes_7")
        var $a8 = $("#assholes_8")
        var $a9 = $("#assholes_9")
        var $a10 = $("#assholes_10")
        var $a11 = $("#assholes_11")
        var $a12 = $("#assholes_12")
        var $a13 = $("#assholes_13") 

        var aTween = new TimelineMax();

          aTween
            .to($a1, 1, {strokeDashoffset: 0})
            .to($a2, 1, {strokeDashoffset: 0})
            .to($a3, 1, {strokeDashoffset: 0})
            .to($a4, 1, {strokeDashoffset: 0})
            .to($a5, 1, {strokeDashoffset: 0})
            .to($a6, 1, {strokeDashoffset: 0})
            .to($a7, 1, {strokeDashoffset: 0})
            .to($a8, 1, {strokeDashoffset: 0})
            .to($a9, 1, {strokeDashoffset: 0})
            .to($a10, 1, {strokeDashoffset: 0})
            .to($a11, 1, {strokeDashoffset: 0})
            .to($a12, 1, {strokeDashoffset: 0})
            .to($a13, 1, {strokeDashoffset: 0})

        var aScene = new ScrollMagic.Scene({
          triggerElement: "#trigger3",
          duration: 500,
          offset: 875
        })
                .setTween(aTween)
                .addTo(controller)

        var $f1 = $("#freaks_1")
        var $f2 = $("#freaks_2")
        var $f3 = $("#freaks_3")
        var $f4 = $("#freaks_4")
        var $f5 = $("#freaks_5")
        var $f6 = $("#freaks_6")
        var $f7 = $("#freaks_7")
        var $f8 = $("#freaks_8")
        var $f9 = $("#freaks_9")
        var $f10 = $("#freaks_10")
        var $f11 = $("#freaks_11")
        var $f12 = $("#freaks_12")
        var $f13 = $("#freaks_13")

        var fTween = new TimelineMax();

          fTween
            .to($f1, 1, {strokeDashoffset: 0})
            .to($f2, 1, {strokeDashoffset: 0})
            .to($f3, 1, {strokeDashoffset: 0})
            .to($f4, 1, {strokeDashoffset: 0})
            .to($f5, 1, {strokeDashoffset: 0})
            .to($f6, 1, {strokeDashoffset: 0})
            .to($f7, 1, {strokeDashoffset: 0})
            .to($f8, 1, {strokeDashoffset: 0})
            .to($f9, 1, {strokeDashoffset: 0})
            .to($f10, 1, {strokeDashoffset: 0})
            .to($f11, 1, {strokeDashoffset: 0})
            .to($f12, 1, {strokeDashoffset: 0})
            .to($f13, 1, {strokeDashoffset: 0})

        var fScene = new ScrollMagic.Scene({
          triggerElement: "#trigger3",
          duration: 450,
          offset: 1350
        })
                .setTween(fTween)
                .addTo(controller)

        var $l1 = $("#losers_1")
        var $l2 = $("#losers_2")
        var $l3 = $("#losers_3")
        var $l4 = $("#losers_4")
        var $l5 = $("#losers_5")
        var $l6 = $("#losers_6")
        var $l7 = $("#losers_7")
        var $l8 = $("#losers_8")
        var $l9 = $("#losers_9")
        var $l10 = $("#losers_10")
        var $l11 = $("#losers_11")
        var $l12 = $("#losers_12")
        var $l13 = $("#losers_13")
        var $l14 = $("#losers_14")
        var $l15 = $("#losers_15")
        var $l16 = $("#losers_16")
        var $l17 = $("#losers_17")
        var $l18 = $("#losers_18")
        var $l19 = $("#losers_19")
        var $l20 = $("#losers_20")
        var $l21 = $("#losers_21")
        var $l22 = $("#losers_22")
        var $l23 = $("#losers_23")      

        var lTween = new TimelineMax();

          lTween
            .to($l1, 1.5, {strokeDashoffset: 0})
            .to($l2, 1.5, {strokeDashoffset: 0})
            .to($l3, 1.5, {strokeDashoffset: 0})
            .to($l4, 1.5, {strokeDashoffset: 0})
            .to($l5, 1.5, {strokeDashoffset: 0})
            .to($l6, 1.5, {strokeDashoffset: 0})
            .to($l7, 1.5, {strokeDashoffset: 0})
            .to($l8, 1.5, {strokeDashoffset: 0})
            .to($l9, 1.5, {strokeDashoffset: 0})
            .to($l10, 1.5, {strokeDashoffset: 0})
            .to($l11, 1.5, {strokeDashoffset: 0})
            .to($l12, 1.5, {strokeDashoffset: 0})
            .to($l13, 1.5, {strokeDashoffset: 0})
            .to($l14, 1.5, {strokeDashoffset: 0})
            .to($l15, 1.5, {strokeDashoffset: 0})
            .to($l16, 1.5, {strokeDashoffset: 0})
            .to($l17, 1.5, {strokeDashoffset: 0})
            .to($l18, 1.5, {strokeDashoffset: 0})
            .to($l19, 1.5, {strokeDashoffset: 0})
            .to($l20, 1.5, {strokeDashoffset: 0})
            .to($l21, 1.5, {strokeDashoffset: 0})
            .to($l22, 1.5, {strokeDashoffset: 0})
            .to($l23, 1.5, {strokeDashoffset: 0})           

        var lScene = new ScrollMagic.Scene({
          triggerElement: "#r-trigger2",
          duration: 1100,
          offset: 100
        })
                .setTween(lTween)
                .addTo(controller)

    }

  });
