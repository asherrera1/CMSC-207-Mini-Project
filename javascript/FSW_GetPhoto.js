/* ========================================================================================= */
/* NAME          : HERRERA ARIEL SUERTE                                                      */
/* FILE NAME     : FSW_GetPhoto.js                                                            */
/* Date Created  : 02-Mar-2026, Monday                                                       */
/* ========================================================================================= */
// 1. All images are in "images" folder
const images = [
    "images/hobby1.jpg", 
    "images/hobby2.jpg", 
    "images/hobby3.jpg", 
    "images/hobby4.jpg", 
    "images/hobby5.jpg"
];

let currentIndex = 0;

const imgElement = document.getElementById('hobbyImage');
const btnElement = document.getElementById('nextImgButton');

// 2. Add the "Click" listener
btnElement.addEventListener('click', () => {
  // Move to the next index
  currentIndex++;

  // If we reach the end of the list, go back to the start (0)
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // 3. Update the image source
  imgElement.src = images[currentIndex];
});