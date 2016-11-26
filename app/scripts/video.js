$(document).ready(function(){
  // randomize splash video
  var numArray = [1, 1, 2, 3, 4, 5];
  var x = Math.floor(Math.random()*5) + 1;
  var y = numArray[x];
  var video = document.getElementById('#covervid');
  var source = "app/images/splashvid"+y+".mp4";

  console.log(y);
  $("#video-place").html('<video autoplay loop id="covervid" width="100%" src="'+source+'"><source type="video/mp4">The video is not working.</video><div id="cover-logo"><picture><source media="(min-width: 1350px)" srcset="app/images/vector_logo.png"><source media="(min-width: 1000px)" srcset="app/images/vector_logo_small.png"><img src="app/images/vector_logo.png"></picture><p id="cover-text">I make the stuff.<br />You look at the stuff.</p></div>');  
});
