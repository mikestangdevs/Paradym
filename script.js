window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").classList.add("round");
  } else {
		document.getElementById("nav").classList.remove("round");
  }
}