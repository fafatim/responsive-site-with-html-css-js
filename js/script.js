
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