let check1 = false;
let check2 = false;
document.querySelector(".language").addEventListener("click", () => {
  if (!check1) {
    document.querySelector(".languages").style.display = "flex";
    check1 = !check1;
  } else {
    document.querySelector(".languages").style.display = "none";
    check1 = !check1;
  }
});

document.querySelector(".language-ru").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".current-language").textContent = document.querySelector(".language-ru").textContent;
  document.querySelector(".languages").style.display = "none";
  check1 = false;
});
document.querySelector(".language-kz").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".current-language").textContent = document.querySelector(".language-kz").textContent;
  document.querySelector(".languages").style.display = "none";
  check1 = false;
});
document.querySelector(".language-en").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".current-language").textContent = document.querySelector(".language-en").textContent;
  document.querySelector(".languages").style.display = "none";
  check1 = false;
});

document.querySelector(".languagee").addEventListener("click", () => {
  if (!check2) {
    document.querySelector(".languagess").style.display = "flex";
    check2 = !check2;
  } else {
    document.querySelector(".languagess").style.display = "none";
    check2 = !check2;
  }
});

document.querySelector(".languagee-ru").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".current-languagee").textContent = document.querySelector(".languagee-ru").textContent;
  document.querySelector(".languagess").style.display = "none";
  check2 = false;
});
document.querySelector(".languagee-kz").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".current-languagee").textContent = document.querySelector(".languagee-kz").textContent;
  document.querySelector(".languagess").style.display = "none";
  check2 = false;
});
document.querySelector(".languagee-en").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".current-languagee").textContent = document.querySelector(".languagee-en").textContent;
  document.querySelector(".languagess").style.display = "none";
  check2 = false;
});