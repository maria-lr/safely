// used to test create profile function
// placesArray.forEach(function (place) {
//   createProfile(place);
// })
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


const searchButton = $('#searchbutton')
const addComment = $('#sent')
const searchBar = $('#search')

searchButton.click(function (event) {
  // Do not allow search on search button click if the searchbar is empty. 
  if (searchBar.value === "") {
    // console.log('exited early')
    return;
  }

  if (placesArray === []) {

  }

  // console.log('running')

  // go to results page
  // location = 'file:///Users/maria/Documents/Coding%20Projects/Safely/results/results.html'

  let searchTerm = searchBar.val()

  let searchResults = placesArray.filter(function (place, index) {
    const lowerName = place.name.toLowerCase();
    const lowerSearch = searchTerm.toLowerCase();

    console.log(`For iteration ${index}, does ${lowerName} include ${lowerSearch}. The answer is ${lowerName.includes(lowerSearch)}`);

    return lowerName.includes(lowerSearch);
  })
  // console.log('Search results', searchResults);
  // placesArray.forEach(function (place) {
  //   createCard(place)
  // })
  // createCard(searchResults);






  // placesArray.forEach(function (place) {
  //   createCard(place)
  // })
  // should I use a new array temporarily? Or use the test array?

  // arrayOfPlaces.forEach(function (place) {
  //   createCard(place);
  // }
  // )
  // how do I link the createCard function I've already created to this?
});
// getSearchResults();




// addComment.onclick = function (event) {

//   const comment = {

//   }


//   async function addNewDataToServer() {
//     const postOptions = {
//       method: "POST",
//       body: JSON.strin0ify(comment),
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }
//     // Send our POST request with its options
//     const postRequest = await fetch('url', postOptions);

//     // Turn our response into JSON
//     const result = await postRequest.json();

//     // Log it out!
//     console.log("The result of my POST IS...", result);

//   }
// }


// adding comments: does the above all stay the same if I'm just adding comments? 

// for each new comment added, do I need to make sure the correct profile id is attached?

// for each new comment added, create a "comment card"
  // needs to be designed 
  // use a comment card function to do so... 
