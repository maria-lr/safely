placesArray.forEach(function (place) {
  // For each item in the array create a card. 
  createCard(place);
})

// if search results are empty, insert/replace "results" area with no results message and add new place button

// Need to create a form with the data that will fill this out... Should appear after add button is clicked

const addPlace = $('')
addPlace.onclick = function (event) {

  const newPlaceData = {

  }


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
}