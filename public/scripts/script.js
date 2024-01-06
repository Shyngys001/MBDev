let check0 = false;
document.querySelector(".header nav ul a:nth-child(2)").addEventListener("click", (event) => {
  event.preventDefault();
  if (!check0) {
    document.querySelector(".header-about").style.display = "flex";
    check0 = !check0;
  } else {
    document.querySelector(".header-about").style.display = "none";
    check0 = !check0;
  }
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".menu").style.left = "0";
  document.querySelector(".menu").style.right = "0";
})

document.querySelector(".menu-x").addEventListener("click", () => {
  document.querySelector(".menu").style.left = "100vw";
  document.querySelector(".menu").style.right = "-100vw";
});