
//navbar action
// var menuToggle = document.getElementById("menuToggle");
// var crossButton = document.getElementById("cross-button");
// var navBar = document.getElementById("navBarMenu");
// function changeNav(){
//   if (navBar.style.display === "block"){
//     navBar.style.display = "none";
//   }
//   else {
//     navBar.style.display = "block";
//   }
// }
// menuToggle.addEventListener("click",changeNav);
// crossButton.addEventListener("click",changeNav);
//
// var cssProperties = { width: '100%' };
// var cssProperties1 = { width: '0%' };
if (window.matchMedia('(max-width: 767px)').matches) {
  var cssProperties = { width: '100%' };
  var cssProperties1 = { width: '0%' };
} else {
  var cssProperties = { width: '25%' };
  var cssProperties1 = { width: '0%' };


}
window.onresize = function(event)
{
  document.location.reload(true);
}
$( ".menuToggle" ).click(function() {
  $(".navbar").show().animate(cssProperties);
  $(".menu-toggle").hide();
  $(".cross").show();


});
$( ".cross-button" ).click(function() {
  $(".navbar").animate(cssProperties1,function(){
    $(this).hide();
    $(".cross").hide();
    $(".menu-toggle").show();

  });
});
var sections = $('section')
  , nav = $('#mySidenav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height -300,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

$(window).load(function(){



  $('#container> div.item').hover(function(event){
    // mouseenter
    var $item = $(this),
      direction = $item.entry({e:event});

    // fix jquery slide issue when moving cursor too fast
    if($item.hasClass('opened')) $item.find('.hover-wrap').stop(true,true).show();

    $.when($item.find('.hover-wrap').stop(true, true).show("slide", { direction: direction}, 255, 'easeOutQuad')).done(function(){
      $item.addClass('opened');
    });

    // fix javascript missing events when moving cursor too fast.
    // hover may stay active if javascript miss mousemove event, simply hide them
    var inverted_direction = $item.entry({e:event, invert: true});
    $item.siblings('.opened').removeClass('opened')
      .find('.hover-wrap').hide("slide", { direction: direction}, 255, 'easeOutQuad');

  }, function(event){
    // mouseleave
    var $item = $(this),
      direction = $item.entry({e:event});
    $.when($item.find('.hover-wrap').stop(true, true).hide("slide", { direction: direction}, 255, 'easeOutQuad')).done(function(){
      $item.removeClass('opened');
    });

  });
});



// var cssProperties2 = { width: '25%' };
// var cssProperties3 = { width: '0%' };
//
// $( ".menuToggleBarList" ).click(function() {
//   $(".navbarButton").show().animate(cssProperties2);
// });
// $( ".cross-button-display" ).click(function() {
//   $(".navbarButton").animate(cssProperties3,function(){
//     $(this).hide();
//   });
// });
var typed2 = new Typed('#typed', {
  strings: ["Web Developer.","Graphic Designer.","Freelancer."],
  typeSpeed: 30,
  backSpeed: 30,
  fadeOut: true,
  loop: true
});
var typed3 = new Typed('#typing', {
  strings: ["Web Developer.","Graphic Designer.","Freelancer."],
  typeSpeed: 30,
  backSpeed: 30,
  fadeOut: true,
  loop: true
});
