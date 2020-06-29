// Create local array.
let placesArray = []

// Get all data from database.
fetch(`https://tiny-lasagna-server.herokuapp.com/collections/mariaTestCollection/`)
  .then((results) => {
    return results.json();
  })
  .then((allDataFromServer) => {

    // Replace local array (empty) with server array (most current).
    placesArray = allDataFromServer;

    // Boilerplate search parameter code defining search param (the blank in) "?___=". 
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');

    // Find search term (taken from query param) in places array.
    let searchResults = placesArray.filter(function (place, index) {

      // Lowercase the term in the array (to get around case sensitivity).
      const lowerName = place.name.toLowerCase();

      // Lowercase the term in the search bar.
      const lowerSearch = search.toLowerCase();

      // A good way to use console.log for iterating over an array.
      // console.log(`For iteration ${index}, does ${lowerName} include ${lowerSearch}. The answer is ${lowerName.includes(lowerSearch)}`);

      // Return the results w/ names that include the search term.
      return lowerName.includes(lowerSearch);

    });

    // If there are results matching the search, load results.
    if (searchResults.length) {

      searchResults.forEach(function (place) {

        // For each item in the array create a card. 
        createCard(place);

        // If result card is clicked, go to corresponding profile page.
        $('.cardContainer').click(function (event) {
          window.location.href = `file:///Users/maria/Documents/Coding%20Projects/Safely/profile.html?id=${place._id}`
        })
      });
    }

    // If no results match the search, replace results area w/ no results message and add place button.
    else {

      const noResInner = $('<section></section>')
        .addClass('no-res-inner');

      const noResMessage = $('<p></p>')
        .html(`Sorry, no results match this search.<br>`)
        .addClass('message');

      const addPlaceButton = $('<button></button>')
        .text('Add new place')
        .addClass('add-place-button');

      $('.no-results-container').append(noResInner);
      noResInner.append(noResMessage);
      noResInner.append(addPlaceButton);

      // Go to forms page when add place button is clicked.
      $('.add-place-button').click(function (event) {

        window.location.href = 'file:///Users/maria/Documents/Coding%20Projects/Safely/form.html';
      });
    }
  })

