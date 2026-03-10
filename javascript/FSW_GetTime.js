/* ========================================================================================= */
/* NAME          : HERRERA ARIEL SUERTE                                                      */
/* FILE NAME     : FSW_GetTime.js                                                            */
/* Date Created  : 02-Mar-2026, Monday                                                       */
/* ========================================================================================= */
function displayDateTime() {
    const date = new Date();
    // Use toLocaleString for a formatted date and time string based on the user's locale
    const formattedDateTime = date.toLocaleString(); 
    
    // Update the content of the 'clock' element
    document.getElementById('clock').textContent = formattedDateTime;
}

// Call the function immediately when the page loads
displayDateTime(); 

// Update the time every second
setInterval(displayDateTime, 1000);