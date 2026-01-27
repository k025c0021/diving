const homeBtn = document.getElementById("homeBtn");
const clickSound = document.getElementById("clickSound");

homeBtn.addEventListener("click", () => {
    clickSound.currentTime = 0; // 連続クリック対応
    clickSound.play();
});
