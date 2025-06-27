const firstPage = document.querySelector(".wrapFirstPage");
const aboutPage = document.querySelector(".wrapAboutPage");
const listOfOptions = document.querySelectorAll(".headerMenu li a");
const footerOfOptions = document.querySelectorAll(".headerMenu li a");
const moveItems = document.querySelectorAll(".move");
const moveItemsRight = document.querySelectorAll(".moveRight");
const leftBurger = document.querySelector(".leftBurger");
const bugerMenu = document.querySelector(".burger");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

// bugerMenu.addEventListener("click", function () {
//   if (leftBurger.style.left === "-100%") {
//     leftBurger.style.left = "0";
//   } else {
//     leftBurger.style.left = "-100%";
//   }
// });

moveItems.forEach((el) => observer.observe(el));
moveItemsRight.forEach((eli) => observer.observe(eli));

// for (let i = 0; i < listOfOptions.length; i++) {
//   listOfOptions[i].addEventListener("click", function () {
//     if (listOfOptions[i] === 0) {
//       //   aboutPage.style.display = "none";
//       alert("Portfolio masih dalam pengembangan ya");
//     } else if (listOfOptions[i] === 1) {
//       alert("Portfolio masih dalam pengembangan ya");
//     } else if (listOfOptions[i] === 2) {
//       alert("Portfolio masih dalam pengembangan ya");
//       //   firstPage.style.display = "none";
//       //   aboutPage.style.display = "block";
//     }
//   });
// }

// listOfOptions[0].addEventListener("click", function () {
//   if (firstPage.style.display == "none") firstPage.style.display = "block";
//   aboutPage.style.display = "none";
//   firstPage.style.display = "block";
//   //   alert("Portfolio masih dalam pengembangan ya");
// });

// listOfOptions[2].addEventListener("click", function () {
//   aboutPage.style.display = "block";
//   firstPage.style.display = "none";
//   //   alert("Portfolio masih dalam pengembangan ya");
// });
