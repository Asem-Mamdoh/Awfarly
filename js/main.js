let slider = document.querySelector('.slider');
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let currentIndex = 0;
let cardWidth = 220; // عرض الكارت + المسافة بين الكروت

nextBtn.addEventListener('click', () => {
  currentIndex ++;
  updateSliderPosition();
});

prevBtn.addEventListener('click', () => {
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
  nextBtn.disabled = currentIndex >= slider.children.length -1;
}

checkButtons();

let dropList = document.getElementById("dropList");
let mainDrop = document.getElementById("mainDrop")

mainDrop.addEventListener("click", function(){
  dropList.style.display = "block";

  
})

console.log(dropList);

