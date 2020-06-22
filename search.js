let placesArray = []

// Get all data from database
fetch(`https://tiny-lasagna-server.herokuapp.com/collections/mariaTestCollection/`)
  .then((results) => {
    return results.json();
  })
  .then((allDataFromServer) => {
    console.log("This is everything in our collection!", allDataFromServer)

    placesArray = allDataFromServer;
  })

// Search bar code start
const searchButton = $('#searchbutton')
const searchBar = $('#search')


// console.log("What is our serch term:", searchTerm)

searchButton.click(function (event) {
  let searchTerm = searchBar.val()
  console.log('running')
  // Do not allow search on search button click if the searchbar is empty. 
  if (searchTerm === "") {
    console.log('bailing early because no search term')
    return;
  }

  // Find search term in places array.


  let searchResults = placesArray.filter(function (place, index) {
    const lowerName = place.name.toLowerCase();
    const lowerSearch = searchTerm.toLowerCase();

    console.log(`For iteration ${index}, does ${lowerName} include ${lowerSearch}. The answer is ${lowerName.includes(lowerSearch)}`);

    return lowerName.includes(lowerSearch);
  })

  console.log('Search results', searchResults);

  // If there are no results matching the search, display the no results text and add place button
  if (!searchResults.length) {
    console.log('do i run?')

    window.location.replace(`file:///Users/maria/Documents/Coding%20Projects/Safely/results/noresults.html`)

  }
  // If there are results matching the search, take user to results page.
  if (searchResults.length) {
    console.log('search results boolean', searchResults.length)


    window.location.replace(`file:///Users/maria/Documents/Coding%20Projects/Safely/results/results.html`)
  }

  $('.add-place-button').click(function (event) {

    window.location.replace('file:///Users/maria/Documents/Coding%20Projects/Safely/form.html')
  });

});