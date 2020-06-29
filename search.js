const searchButton = $('#searchbutton')
const searchBar = $('#search');

// Trigger the search button with the Enter key. 
// Trigger button on enter code from w3Schools:https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

// Execute a function when the user releases a key on the keyboard
searchBar.keyup(function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    searchButton.click();
  }
});

searchButton.click(function (event) {
  let searchTerm = searchBar.val();

  // Do not allow search on search button click if the searchbar is empty. 
  if (searchTerm === "") {
    console.log('bailing early because no search term')
    return;
  }

  // If there is a value in the search bar, go to the results page w/ attached search term params.
  if (searchTerm) {
    window.location.href = `file:///Users/maria/Documents/Coding%20Projects/Safely/results/results.html?search=${searchTerm}`;
  }

});