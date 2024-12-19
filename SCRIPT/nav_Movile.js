//
//
document.getElementById("btn-Menu").addEventListener("click", function () {
  let navMenu = document.getElementById("Nav-Manu-class");
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
    navMenu.style.display = "block";
  } else {
    navMenu.classList.add("hidden");
    navMenu.style.display = "none";
  }
});
