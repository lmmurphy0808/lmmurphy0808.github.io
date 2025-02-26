// Get references to elements
const showPopupLink = document.getElementById('showPopupLink');
const popupBox = document.getElementById('popupBox');
const closePopupButton = document.getElementById('closePopup');

// Show the popup when the link is clicked
showPopupLink.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the link from following its href
    popupBox.classList.remove('hidden');  // Show the popup
});

// Close the popup when the close button is clicked
closePopupButton.addEventListener('click', function() {
    popupBox.classList.add('hidden');  // Hide the popup
});
