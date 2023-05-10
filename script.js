
// Get the elements
var textSlider = document.querySelector('.text-slider');
var textItems = document.querySelector('.text-slider-items').textContent.split(',');
var delay = 2000; // Change delay time here

// Set up the text slider
var index = 0;
function changeText() {
    textSlider.textContent = textItems[index];
    index++;
    if (index >= textItems.length) {
        index = 0;
    }
}
changeText();
setInterval(changeText, delay);