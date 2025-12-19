const toggleText = document.getElementById("toggleText");
const toggleBtn = document.getElementById("toggleBtn");

let isOn = false; 

toggleBtn.addEventListener("click", function () {
    if (isOn === false) {
        toggleText.textContent = "ON";
        isOn = true;
    } else {
        toggleText.textContent = "OFF";
        isOn = false;
    }

});
