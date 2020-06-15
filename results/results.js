placesArray.forEach(function (place) {
  // For each item in the array create a card. 
  createCard(place);
})

// if search results are empty, insert/replace "results" area with no results message and add new place button