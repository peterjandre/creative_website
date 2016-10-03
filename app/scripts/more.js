$("#more-button").on("click", function(){
  console.log("button clicked");
  $(".modal2").fadeIn("slow");
});

$("#closebox").on("click", function () {
  console.log("close clicked");
  $(".modal2").fadeOut("fast");
  $(".modal3").fadeOut("fast");
});

$("#ph").on("click", function () {
  console.log("ph clicked");
  if ($(".modal3").css("display") == "none") {
    $(".modal3").slideDown();
  } else {
    $(".modal3").slideUp();
  };
});

$(".modal3").on("click", function() {
  console.log("modal3 clicked");
  $(".modal3").slideUp();
});