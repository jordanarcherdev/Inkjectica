$(document).ready(function(){

  $("#twitter").hover(function() {
		$(this).attr("src","img/social1Colour.png");
			}, function() {
		$(this).attr("src","img/social1.png");
	});

  $("#instagram").hover(function() {
    $(this).attr("src","img/social2Colour.png");
      }, function() {
    $(this).attr("src","img/social2.png");
  });

  $("#facebook").hover(function() {
    $(this).attr("src","img/social3Colour.png");
      }, function() {
    $(this).attr("src","img/social3.png");
  });

  $("#tumblr").hover(function() {
    $(this).attr("src","img/social4Colour.png");
      }, function() {
    $(this).attr("src","img/social4.png");
  });


});
