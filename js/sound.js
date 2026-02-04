homeBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    clickSound.currentTime = 0;
    clickSound.play();
});