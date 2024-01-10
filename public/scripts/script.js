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

document.querySelectorAll('.menu-link a').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.menu').style.left = '100vw';
    document.querySelector('.menu').style.right = '-100vw';
  });
});

let mode = false;
document.querySelector(".mode").addEventListener("click", () => {
  if (!mode) {
    document.querySelector(".dark").classList.add("switch-mode");
    document.querySelector(".light").classList.remove("switch-mode");

    document.documentElement.style.setProperty("--white", "#000000");
    document.documentElement.style.setProperty("--black", "#FFFFFF");
    document.documentElement.style.setProperty("--grey", "#1E1E1E");
    document.documentElement.style.setProperty("--grey-1", "#ECECEC");

    mode = !mode;
  } else {
    document.querySelector(".dark").classList.remove("switch-mode");
    document.querySelector(".light").classList.add("switch-mode");
    
    document.documentElement.style.setProperty("--white", "#FFFFFF");
    document.documentElement.style.setProperty("--black", "#000000");
    document.documentElement.style.setProperty("--grey", "#ECECEC");
    document.documentElement.style.setProperty("--grey-1", "#1E1E1E");

    mode = !mode;
  }
});