// auto refresh/////////
window.onresize = function(event)
{
  document.location.reload(true);
}

///////////////mobile and tablet device navigation menu///////////////////



if (window.matchMedia('(max-width: 767px)').matches) {
  var cssProperties = { width: '100%' };
  var cssProperties1 = { width: '0%' };
} else {
  var cssProperties = { width: '25%' };
  var cssProperties1 = { width: '0%' };

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

///////////////////////// about page side nav/////////////////////////

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

 /////////////////hover action in project gallery/////////////////////

 $(window).load(function(){

  $('#container> li.item').hover(function(event){
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



