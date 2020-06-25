let placesArray = []

// Get all data from database
fetch(`https://tiny-lasagna-server.herokuapp.com/collections/mariaTestCollection/`)
  .then((results) => {
    return results.json();
  })
  .then((allDataFromServer) => {
    console.log("This is everything in our collection!", allDataFromServer)

    placesArray = allDataFromServer;

    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');

    // Find search term (taken from query param) in places array.
    let searchResults = placesArray.filter(function (place, index) {
      console.log('testing inside of array filter')
      const lowerName = place.name.toLowerCase();
      const lowerSearch = search.toLowerCase();

      console.log(`For iteration ${index}, does ${lowerName} include ${lowerSearch}. The answer is ${lowerName.includes(lowerSearch)}`);

      return lowerName.includes(lowerSearch);

    });

    // If there are results matching the search, load results.
    if (searchResults.length) {
      console.log('search results boolean', searchResults.length)

      searchResults.forEach(function (place) {
        console.log("Creating a card for plaec: ", place)
        // For each item in the array create a card. 
        createCard(place);

        // console.log("Place is:", place);
        $('.cardContainer').click(function (event) {
          window.location.href = `file:///Users/maria/Documents/Coding%20Projects/Safely/profile.html?id=${place._id}`
        })
      });

      console.log('search results', searchResults)


    }

    // If there are no results matching the search, load no results message and add place button.
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

      $('.add-place-button').click(function (event) {

        window.location.href = 'file:///Users/maria/Documents/Coding%20Projects/Safely/form.html';
      });
    }
  })


async function addNewDataToServer() {
  const postOptions = {
    method: "POST",
    body: JSON.stringify(newPlaceData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  // Send our POST request with its options
  const postRequest = await fetch('url', postOptions);

  // Turn our response into JSON
  const result = await postRequest.json();

  // Log it out!
  console.log("The result of my POST IS...", result);

}
  // addNewDataToServer();
