var love = document.querySelector(".love");
var love2 = document.querySelector(".love2");
var textArray = ["Charming", "Gorgeous", "Alluring", "Stunning","Pretty"];
var index = 0;

function changeText() {
    love.innerHTML = textArray[index];
    love2.innerHTML = textArray[index];
    index = (index + 1) % textArray.length; // Wrap around the array
}

setInterval(changeText, 1000); // Change the text every 1 second
