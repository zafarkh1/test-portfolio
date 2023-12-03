let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

function openTab(tabName) {
  console.log("as");
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

let sideMenu = document.getElementById("sideMenu");

function closeMenu() {
  sideMenu.style.right = "-200px";
}
function openMenu() {
  sideMenu.style.right = "0";
}

let portfolioMore = document.querySelectorAll(".portfolioMore");
let btnMore = document.getElementById("btnMore");

for (let portMore of portfolioMore) {
  btnMore.addEventListener("click", () => {
    portMore.classList.toggle("hidden");
  });
}
