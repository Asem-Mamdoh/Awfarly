let slider = document.querySelector(".slider");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let mainDrop = document.getElementById("mainDrop");
let drop = document.getElementById("drop");
let isDropdownOpen = false; //انا عملت ده علشان اتحكم في العنصر

// دالة  لفتح القائمة
mainDrop.addEventListener("click", () => {
  isDropdownOpen = !isDropdownOpen;
  if (isDropdownOpen) {
    drop.style.display = "block";
  } else {
    drop.style.display = "none";
  }
});

let menuIcon = document.getElementById("menu-icon");
let dropMenu = document.getElementById("drop-menu");
let listMenu = document.getElementById("list-menu");

menuIcon.addEventListener("click", ()=>{
  isDropdownOpen = !isDropdownOpen;
  if (isDropdownOpen) {
    menuIcon.style.color = "#007bff"
    dropMenu.style.display = "block";
  } else {
    menuIcon.style.color = "#333333"
    dropMenu.style.display = "none";
  }
})


// افضل العروض
let currentIndex = 0;
let cardWidth = 220; // عرض الكارت + المسافة بين الكروت

nextBtn.addEventListener("click", () => {
  currentIndex++;
  updateSliderPosition();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  updateSliderPosition();
});

function updateSliderPosition() {
  slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
  checkButtons();
}

function checkButtons() {
  // منع الضغط على الزر عندما نصل إلى نهاية الكروت
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= slider.children.length - 1;
}

checkButtons();

// زرار الاسكرول
let scrollUp = document.getElementById("scroll-up");

onscroll = function () {
  if (this.scrollY >= 250) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
};

scrollUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
