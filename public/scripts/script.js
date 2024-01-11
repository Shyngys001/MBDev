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

    document.documentElement.style.setProperty("--white", "#2F2F2F");
    document.documentElement.style.setProperty("--black", "#FFFFFF");
    document.documentElement.style.setProperty("--grey", "#1E1E1E");
    document.documentElement.style.setProperty("--grey-1", "#ECECEC");

    for (let i of document.getElementsByClassName("service-content")) {
      i.classList.add("service-content-mode");
    }

    document.querySelector("#gif3").src = "public/images/dark1.gif";
    document.querySelector("#gif1").src = "public/images/dark2.gif";
    document.querySelector("#gif2").src = "public/images/dark4.gif";
    document.querySelector("#gif4").src = "public/images/dark3.gif";

    document.querySelector(".technologies:nth-child(4) img").style.filter = "invert(100%)";
    document.querySelector(".technologies:nth-child(8) img").style.filter = "invert(100%)";
    document.querySelector(".technologies:nth-child(12) img").style.filter = "invert(100%)";

    document.querySelector(".technologies:nth-child(4) img").addEventListener("mouseout", () => {
      document.querySelector(".technologies:nth-child(4) img").style.filter = "invert(100%)";
    });
    document.querySelector(".technologies:nth-child(8) img").addEventListener("mouseout", () => {
      document.querySelector(".technologies:nth-child(8) img").style.filter = "invert(100%)";
    });
    document.querySelector(".technologies:nth-child(12) img").addEventListener("mouseout", () => {
      document.querySelector(".technologies:nth-child(12) img").style.filter = "invert(100%)";
    });

    document.querySelector(".technologies:nth-child(4) img").addEventListener("mouseover", () => {
      document.querySelector(".technologies:nth-child(4) img").style.filter = "invert(0)";
    });
    document.querySelector(".technologies:nth-child(8) img").addEventListener("mouseover", () => {
      document.querySelector(".technologies:nth-child(8) img").style.filter = "invert(0)";
    });
    document.querySelector(".technologies:nth-child(12) img").addEventListener("mouseover", () => {
      document.querySelector(".technologies:nth-child(12) img").style.filter = "invert(0)";
    });
    
    mode = !mode;
  } else {
    document.querySelector(".dark").classList.remove("switch-mode");
    document.querySelector(".light").classList.add("switch-mode");
    
    document.documentElement.style.setProperty("--white", "#FFFFFF");
    document.documentElement.style.setProperty("--black", "#000000");
    document.documentElement.style.setProperty("--grey", "#ECECEC");
    document.documentElement.style.setProperty("--grey-1", "#1E1E1E");
    
    for (let i of document.getElementsByClassName("service-content")) {
      i.classList.remove("service-content-mode");
    }

    document.querySelector("#gif3").src = "public/images/3.gif";
    document.querySelector("#gif1").src = "public/images/5.gif";
    document.querySelector("#gif2").src = "public/images/6.gif";
    document.querySelector("#gif4").src = "public/images/4.gif";
    
    mode = !mode;
  }
});

document.querySelector(".mode-menu").addEventListener("click", () => {
  if (!mode) {
    document.querySelector(".dark-menu").classList.add("switch-mode");
    document.querySelector(".light-menu").classList.remove("switch-mode");

    document.documentElement.style.setProperty("--white", "#2F2F2F");
    document.documentElement.style.setProperty("--black", "#FFFFFF");
    document.documentElement.style.setProperty("--grey", "#1E1E1E");
    document.documentElement.style.setProperty("--grey-1", "#ECECEC");

    for (let i of document.getElementsByClassName("service-content")) {
      i.classList.add("service-content-mode");
    }

    document.querySelector("#gif3").src = "public/images/dark1.gif";
    document.querySelector("#gif1").src = "public/images/dark2.gif";
    document.querySelector("#gif2").src = "public/images/dark4.gif";
    document.querySelector("#gif4").src = "public/images/dark3.gif";

    document.querySelector(".technologies:nth-child(4) img").style.filter = "invert(100%)";
    document.querySelector(".technologies:nth-child(8) img").style.filter = "invert(100%)";
    document.querySelector(".technologies:nth-child(12) img").style.filter = "invert(100%)";

    document.querySelector(".technologies:nth-child(4) img").addEventListener("mouseout", () => {
      document.querySelector(".technologies:nth-child(4) img").style.filter = "invert(100%)";
    });
    document.querySelector(".technologies:nth-child(8) img").addEventListener("mouseout", () => {
      document.querySelector(".technologies:nth-child(8) img").style.filter = "invert(100%)";
    });
    document.querySelector(".technologies:nth-child(12) img").addEventListener("mouseout", () => {
      document.querySelector(".technologies:nth-child(12) img").style.filter = "invert(100%)";
    });

    document.querySelector(".technologies:nth-child(4) img").addEventListener("mouseover", () => {
      document.querySelector(".technologies:nth-child(4) img").style.filter = "invert(0)";
    });
    document.querySelector(".technologies:nth-child(8) img").addEventListener("mouseover", () => {
      document.querySelector(".technologies:nth-child(8) img").style.filter = "invert(0)";
    });
    document.querySelector(".technologies:nth-child(12) img").addEventListener("mouseover", () => {
      document.querySelector(".technologies:nth-child(12) img").style.filter = "invert(0)";
    });
    
    mode = !mode;
  } else {
    document.querySelector(".dark-menu").classList.remove("switch-mode");
    document.querySelector(".light-menu").classList.add("switch-mode");
    
    document.documentElement.style.setProperty("--white", "#FFFFFF");
    document.documentElement.style.setProperty("--black", "#000000");
    document.documentElement.style.setProperty("--grey", "#ECECEC");
    document.documentElement.style.setProperty("--grey-1", "#1E1E1E");
    
    for (let i of document.getElementsByClassName("service-content")) {
      i.classList.remove("service-content-mode");
    }

    document.querySelector("#gif3").src = "public/images/3.gif";
    document.querySelector("#gif1").src = "public/images/5.gif";
    document.querySelector("#gif2").src = "public/images/6.gif";
    document.querySelector("#gif4").src = "public/images/4.gif";
    
    mode = !mode;
  }
});