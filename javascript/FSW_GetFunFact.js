/* ========================================================================================= */
/* NAME          : HERRERA ARIEL SUERTE                                                      */
/* FILE NAME     : FSW_GetFunFact                                                            */
/* Date Created  : 02-Mar-2026, Monday                                                       */
/* ========================================================================================= */
// 1. All images are in "images" folder
const funfacts = [
    "I like/adore/love Snoopy a lot!", 
    "I sometimes play the soprano saxophone when I feel like it.", 
    "My favorite food is garlic, butter shrimp with lots of chili!", 
    "I love to watch Frieren anime !", 
    "I want to visit Domremy again sometime (or other places visited by Joan of Arc)."
];

let currFactIdx = 0;

const funElement = document.getElementById('funFact');
const btnTxtElement = document.getElementById('nextFunFact');

// 2. Add the "Click" listener
btnTxtElement.addEventListener('click', () => {
  // Move to the next index
  currFactIdx++;

  // If we reach the end of the list, go back to the start (0)
  if (currFactIdx >= funfacts.length) {
    currFactIdx = 0;
  }

  // 3. Update the image source
  funElement.textContent = funfacts[currFactIdx];
});