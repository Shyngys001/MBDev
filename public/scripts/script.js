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

document.querySelectorAll(".menu-link a").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector(".menu").style.left = "100vw";
    document.querySelector(".menu").style.right = "-100vw";
  });
});


let mode = document.documentElement.style.getPropertyValue("--white") === "#FFFFFF";

document.addEventListener("DOMContentLoaded", () => {
  // localStorage.clear(); 
  console.log("mode: " + mode);
  const white = localStorage.getItem("white");
  const black = localStorage.getItem("black");
  const grey1 = localStorage.getItem("grey1");
  const grey = localStorage.getItem("grey");

  if (white && black && grey1 && grey) {
    document.documentElement.style.setProperty("--white", white);
    document.documentElement.style.setProperty("--black", black);
    document.documentElement.style.setProperty("--grey-1", grey1);
    document.documentElement.style.setProperty("--grey", grey);
    console.log("works");
  } else {
    document.documentElement.style.setProperty("--white", "#FFFFFF");
    document.documentElement.style.setProperty("--black", "#000000");
    document.documentElement.style.setProperty("--grey-1", "#1E1E1E");
    document.documentElement.style.setProperty("--grey", "#ECECEC");
  }
});

let white = document.documentElement.style.getPropertyValue("--white");
let black = document.documentElement.style.getPropertyValue("--black");
let grey1 = document.documentElement.style.getPropertyValue("--grey-1");
let grey = document.documentElement.style.getPropertyValue("--grey");

switchTheme();

document.querySelector(".mode").addEventListener("click", () => switchTheme());

document.querySelector(".mode-menu").addEventListener("click", () => switchTheme());

function switchTheme() {
  if (mode) {
    mode = !mode;
    switchToLight();
  } else {
    mode = !mode;
    switchToDark();
  }
}

function switchToLight() {
  document.querySelector(".dark").classList.remove("switch-mode");
  document.querySelector(".light").classList.add("switch-mode");

  document.querySelector(".dark-menu").classList.remove("switch-mode");
  document.querySelector(".light-menu").classList.add("switch-mode");
  
  for (let i of document.getElementsByClassName("service-content")) {
    i.classList.remove("service-content-mode");
  }

  document.querySelector("#gif1").src = "public/images/5.gif";
  document.querySelector("#gif2").src = "public/images/6.gif";
  document.querySelector("#gif3").src = "public/images/3.gif";
  document.querySelector("#gif4").src = "public/images/4.gif";

  document.documentElement.style.setProperty("--white", "#FFFFFF");
  document.documentElement.style.setProperty("--black", "#000000");
  document.documentElement.style.setProperty("--grey", "#ECECEC");
  document.documentElement.style.setProperty("--grey-1", "#1E1E1E");

  localStorage.clear();
  localStorage.setItem("white", "#000000");
  localStorage.setItem("black", "#FFFFFF");
  localStorage.setItem("grey1", "#1E1E1E");
  localStorage.setItem("grey", "#ECECEC");
}

function switchToDark() {
  document.querySelector(".dark").classList.add("switch-mode");
  document.querySelector(".light").classList.remove("switch-mode");
  document.querySelector(".dark-menu").classList.add("switch-mode");
  document.querySelector(".light-menu").classList.remove("switch-mode");

  for (let i of document.getElementsByClassName("service-content")) {
    i.classList.add("service-content-mode");
  }

  document.querySelector("#gif3").src = "public/images/dark1.gif";
  document.querySelector("#gif1").src = "public/images/dark2.gif";
  document.querySelector("#gif2").src = "public/images/dark4.gif";
  document.querySelector("#gif4").src = "public/images/dark3.gif";

  document.documentElement.style.setProperty("--white", "#2F2F2F");
  document.documentElement.style.setProperty("--black", "#FFFFFF");
  document.documentElement.style.setProperty("--grey", "#1E1E1E");
  document.documentElement.style.setProperty("--grey-1", "#ECECEC");

  localStorage.clear();
  localStorage.setItem("white", "#FFFFFF");
  localStorage.setItem("black", "#000000");
  localStorage.setItem("grey1", "#ECECEC");
  localStorage.setItem("grey", "#1E1E1E");
}

console.log(localStorage.getItem("white"));
console.log(localStorage.getItem("black"));
console.log(localStorage.getItem("grey1"));
console.log(localStorage.getItem("grey"));