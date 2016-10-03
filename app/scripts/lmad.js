$(function () { // wait for document ready

    $('#backtotop').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 'slow');
      return false;
    });    

    var width = $(window).width()/2
    var height = $(window).height()/2+100

    var $preston = $("#preston")
    var $ryan = $("#ryan")
    var $cathee = $("#cathee")
    var $lisa = $("#lisa")
    var $waitress = $("#waitress")
    var $maleTable = $("#male-table-pic")
    var $femaleTable = $("#female-table-pic")

    var tableWidth = $maleTable.width()/2
    var pieceWidth = $preston.width()/2    

    var controller = new ScrollMagic.Controller();

    TweenLite.defaultOverwrite = false;

    var scene = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger01"
    })
            .setTween("#backtotop", {autoAlpha:1})
            .addTo(controller);    

    var tween01 = new TimelineMax();

    tween01.fromTo($preston, 1, {left:width/4-pieceWidth, top:0, autoAlpha:0}, {left:width/4-pieceWidth, top:height/1.5, autoAlpha:0.2})
      .fromTo($cathee, 1, {right:width/4-pieceWidth, top:0, autoAlpha:0}, {right:width/4-pieceWidth, top:height/1.5, autoAlpha:0.2}, "-=1")
      .fromTo($maleTable, 1, {top:0, left:width/2-tableWidth, autoAlpha:0}, {top:height/1.5, left:width/2-tableWidth, autoAlpha:0.2}, "-=1")
      .fromTo($femaleTable, 1, {top:0, right:width/2-tableWidth, autoAlpha:0}, {top:height/1.5, right:width/2-tableWidth, autoAlpha:0.2}, "-=1")

    var scene01 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger01"
    })

            .setTween(tween01)
            .addTo(controller);

    var tween02 = new TimelineMax();

    tween02.fromTo($ryan, 1.5, {autoAlpha:0, left: -300, top: height/4}, {autoAlpha:0.2, left: (width/4)*3-pieceWidth, top: height/1.5})
      .fromTo($lisa, 1.5, {autoAlpha:0, right: -300, top: height/4}, {autoAlpha:0.2, right: (width/4)*3-pieceWidth, top: height/1.5}, "-=1.3")

    var scene02 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger02",
      offset: 250
    })

            .setTween(tween02)
            .addTo(controller);

    var tween03 = new TimelineMax();

    tween03.fromTo($waitress, 1.5, {right: width, top: -300, autoAlpha: 0}, {right: width/2-pieceWidth, top: height/2.5, autoAlpha:0.2})
      .fromTo($maleTable, 1, {autoAlpha:0.2}, {autoAlpha:0.3, immediateRender: false}, "-=0.5")
      .fromTo($preston, 1, {autoAlpha:0.2}, {autoAlpha:0.3, immediateRender: false}, "-=1")
      .fromTo($ryan, 1, {autoAlpha:0.2}, {autoAlpha:0.3, immediateRender: false}, "-=1")

    var scene03 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger03"
    })

            .setTween(tween03)
            .addTo(controller);

    var tween04 = new TimelineMax();

    tween04.fromTo($waitress, 2.5, {right:width/2-pieceWidth}, {right: width+width/2-pieceWidth, immediateRender: false})
      .fromTo($maleTable, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "-=0.5")
      .fromTo($preston, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "-=1")
      .fromTo($ryan, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "-=1")
      .fromTo($femaleTable, 1, {autoAlpha:0.2}, {autoAlpha:0.3, immediateRender: false})
      .fromTo($cathee, 1, {autoAlpha:0.2}, {autoAlpha:0.3, immediateRender: false}, "-=1")
      .fromTo($lisa, 1, {autoAlpha:0.2}, {autoAlpha:0.3, immediateRender: false}, "-=1")

    var scene04 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger04"
    })

            .setTween(tween04)
            .addTo(controller);    

    var tween05 = new TimelineMax();

    tween05.fromTo($waitress, 1.5, {right: width+width/2-pieceWidth, top: height/2.5}, {right: width, top: -300, immediateRender: false})
      .fromTo($femaleTable, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false})
      .fromTo($cathee, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "-=1")
      .fromTo($lisa, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "-=1")

    var scene05 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger05"
    })

            .setTween(tween05)
            .addTo(controller);                           

    var tween06 = new TimelineMax();

    tween06.fromTo($cathee, 1.5, {right: width/4-pieceWidth, top: height/1.5, autoAlpha:0.2}, {right: -300, top: height/2.5, autoAlpha:0.0, immediateRender: false})
      .fromTo($lisa, 1.3, {right: (width/4)*3-pieceWidth, top: height/1.5, autoAlpha:0.2}, {right: -300, top: height/2.5, autoAlpha:0.0, immediateRender: false}, "-=1.1")
      .fromTo($maleTable, 1, {autoAlpha:0.2}, {autoAlpha: 0.3, immediateRender: false})
      .fromTo($preston, 1, {autoAlpha:0.2}, {autoAlpha: 0.3, immediateRender: false}, "-=1")
      .fromTo($ryan, 1, {autoAlpha:0.2}, {autoAlpha: 0.3, immediateRender: false}, "-=1")

    var scene06 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger06"
    })

            .setTween(tween06)
            .addTo(controller);   

    var tween07 = TweenLite.fromTo($waitress, 1.5, {right: width, top: -300, autoAlpha:0.2}, {right: width+width/2-pieceWidth, top: height/2.5, autoAlpha: 0.3, immediateRender: false})

    var scene07 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger07"
    })

            .setTween(tween07)
            .addTo(controller); 

    var tween08 = new TimelineMax();

    tween08.fromTo($maleTable, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false})
      .fromTo($waitress, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "-=1")
      .fromTo($preston, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "-=1")
      .fromTo($ryan, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "-=1")
      .fromTo($lisa, 1.5, {right: -300, top: height/2.5, autoAlpha:0.0}, {right: (width/4)*3-pieceWidth, top: height/1.5, autoAlpha: 0.3, immediateRender: false}, "-=1")
      .fromTo($cathee, 1.5, {right: -300, top: height/2.5, autoAlpha:0.0}, {right: width/4-pieceWidth, top: height/1.5, autoAlpha: 0.3, immediateRender: false}, "-=1.5")
      .fromTo($femaleTable, 1, {autoAlpha:0.2}, {autoAlpha:0.3, immediateRender: false}, "-=0.7")

    var scene08 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger08"
    })

            .setTween(tween08)
            .addTo(controller);

    var tween09 = new TimelineMax();

    tween09.fromTo($waitress, 2, {right: width+width/2-pieceWidth, top: height/2.5, autoAlpha: 0.2}, {right: width/2-pieceWidth, top: height/2.5, autoAlpha: 0.3, immediateRender: false})
      .fromTo($cathee, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "+=0.5")
      .fromTo($femaleTable, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "-=1")
      .fromTo($lisa, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "-=1")
      .fromTo($waitress, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "-=1")
      .fromTo($preston, 1, {autoAlpha:0.2}, {autoAlpha:0.3, immediateRender: false})
      .fromTo($maleTable, 1, {autoAlpha:0.2}, {autoAlpha:0.3, immediateRender: false}, "-=1")
      .fromTo($ryan, 1, {autoAlpha:0.2}, {autoAlpha:0.3, immediateRender: false}, "-=1")

    var scene09 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger09"
    })

            .setTween(tween09)
            .addTo(controller);      

    var tween10 = new TimelineMax();

    tween10.fromTo($waitress, 1.5, {right: width/2-pieceWidth, top: height/2.5, autoAlpha: 0.3}, {right: width, top:-300, autoAlpha:0.0, immediateRender: false})
      .fromTo($preston, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "-=0.5")
      .fromTo($maleTable, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "-=1")
      .fromTo($ryan, 1, {autoAlpha:0.3}, {autoAlpha:0.2, immediateRender: false}, "-=1")

    var scene10 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger10"
    })

            .setTween(tween10)
            .addTo(controller);      

    var tween11 = new TimelineMax();

    tween11.fromTo($ryan, 1, {scale:1, autoAlpha:0.2, left:(width/4)*3-pieceWidth}, {scale: 1.5, autoAlpha:0.3, left: (width/4)*3.5-pieceWidth, immediateRender: false})
      .fromTo($lisa, 1, {scale:1, autoAlpha:0.2, right:(width/4)*3-pieceWidth}, {scale: 1.5, autoAlpha:0.3, right: (width/4)*3.5-pieceWidth, immediateRender: false}, "-=1")

    var scene11 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger11"
    })

            .setTween(tween11)
            .addTo(controller);  

    var tween12 = new TimelineMax();

    tween12.fromTo($ryan, 1, {rotation:0}, {rotation:45, immediateRender: false})
      .fromTo($lisa, 1, {rotation:0}, {rotation:-45, immediateRender: false}, "-=1")
      .fromTo($ryan, 1, {rotation:45}, {rotation:0, immediateRender: false}, "+=0.5")
      .fromTo($lisa, 1, {rotation:-45}, {rotation:0, immediateRender: false}, "-=1")

    var scene12 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger12"
    })

            .setTween(tween12)
            .addTo(controller);

    var tween13 = new TimelineMax();

    tween13.fromTo($preston, 1, {left:width/4-pieceWidth}, {left:-300, immediateRender: false})
      .fromTo($preston, 1, {left:-300}, {left:width/4-pieceWidth, immediateRender: false})

    var scene13 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger13"
    })

            .setTween(tween13)
            .addTo(controller);

    var tween14 = new TimelineMax();

    tween14.fromTo($cathee, 0.7, {right:width/4-pieceWidth}, {right:-300, immediateRender: false})
      .fromTo($waitress, 1.2, {right: width, top:-300, autoAlpha:0}, {right:width, top:height/2.5, autoAlpha:0.2, immediateRender: false}, "-=0.5")

    var scene14 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger14"
    })

            .setTween(tween14)
            .addTo(controller);  

    var tween15 = new TimelineMax();

    tween15.fromTo($preston, 0.8, {rotation:0, left:width/4-pieceWidth}, {rotation:45, left:width*2+300, immediateRender: false})
      .fromTo($ryan, 1, {left:(width/4)*3.5-pieceWidth}, {left:-300, immediateRender: false})
      .fromTo($lisa, 0.8, {right:(width/4)*3.5-pieceWidth}, {right:width*2+300, immediateRender: false}, "-=1")

    var scene15 = new ScrollMagic.Scene({
      triggerElement: "#lmad-trigger15"
    })

            .setTween(tween15)
            .addTo(controller);                                                                                                    

  });