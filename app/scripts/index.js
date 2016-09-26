// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});

// new banner for recently published content
var items = $(".grid-item")

for (var i = 0; i <= items.length - 1; i++) {
  var item = items[i];
  var banner = $(item).find(".newbanner");

  var date = $(item).data("date");
  var pubDate = new Date(date);
  var nowDate = new Date();
  var msDay = 1000*60*60*24;
  var pubDay = pubDate / msDay;
  var nowDay = nowDate / msDay;

  if (nowDay - pubDay < 31) {
    $(banner).css("visibility", "visible")
  }
};