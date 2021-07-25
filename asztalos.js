// var prevScrollpos = window.pageYOffset;
//
// window.onscroll = function() {
// 	var currentScrollPos = window.pageYOffset;
// 	if (prevScrollpos > currentScrollPos) {
// 		document.getElementsByClassName("navbar").style.top="0";
// 	} else {
// 		document.getElementsByClassName("navbar").style.top = "-14vh";
// 	}
// 	prevScrollpos = currentScrollPos;
// };

document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');

  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if (scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    });
  }
});
