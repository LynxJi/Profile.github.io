let logo = document.getElementById("logo-toTop");
logo.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left:0 ,
    behavior: "smooth"
  });
});