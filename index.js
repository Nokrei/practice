let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("toTop").style.visibility = "hidden";
  } else {
    document.getElementById("navbar").style.top = "-150px";
    document.getElementById("toTop").style.visibility = "visible";
  }
  prevScrollpos = currentScrollPos;
}
