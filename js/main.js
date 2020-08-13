var typed2 = new Typed('#typed', {
  strings: ["Web Developer.","Graphic Designer.","Freelancer."],
  typeSpeed: 30,
  backSpeed: 30,
  fadeOut: true,
  loop: true
});
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

var cssProperties = { width: '100%' };
var cssProperties1 = { width: '0%' };

$( ".menuToggle" ).click(function() {
  $(".navbar").show().animate(cssProperties);
});
$( ".cross-button" ).click(function() {
  $(".navbar").animate(cssProperties1,function(){
    $(this).hide();
  });
});
