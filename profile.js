// // used to test create profile function
// // placesArray.forEach(function (place) {
// //   createProfile(place);
// // })
// let placesArray = []

// // Get all data from database
// fetch(`https://tiny-lasagna-server.herokuapp.com/collections/mariaTestCollection/`)
//   .then((results) => {
//     return results.json();
//   })
//   .then((allDataFromServer) => {
//     console.log("This is everything in our collection!", allDataFromServer)

//     placesArray = allDataFromServer;
//   })

// // Search bar code start
// const searchButton = $('#searchbutton')
// // const addComment = $('#sent')
// const searchBar = $('#search')

// searchButton.click(function (event) {
//   // Do not allow search on search button click if the searchbar is empty. 
//   if (searchBar.value === "") {
//     return;
//   }

//   // go to results page
//   // location = 'file:///Users/maria/Documents/Coding%20Projects/Safely/results/results.html'

//   // Find search term in places array.
//   let searchTerm = searchBar.val()

//   let searchResults = placesArray.filter(function (place, index) {
//     const lowerName = place.name.toLowerCase();
//     const lowerSearch = searchTerm.toLowerCase();

//     console.log(`For iteration ${index}, does ${lowerName} include ${lowerSearch}. The answer is ${lowerName.includes(lowerSearch)}`);

//     return lowerName.includes(lowerSearch);
//   })

//   console.log('Search results', searchResults);
//   // placesArray.forEach(function (place) {
//   //   createCard(place)
//   // })

//   // If there are no results matching the search, display the no results text and add place button
//   if (!searchResults.length) {
//     console.log('do i run?')
//     $('div.profile-comment-section').html('');

//     let htmlBody = $('.body');

//     let noResults = $('<section></section>')
//       .addClass('no-results-container')

//     let noResultsInner = $('<section></section>')
//       .addClass('no-res-inner')

//     let noResMessage = $('<p></p>')
//       .addClass('message')
//       .text('Sorry, no results match this search.')

//     let addPlaceButton = $('<button></button>')
//       .addClass('add-place-button')
//       .text('Add new place')

//     htmlBody.append(noResults);
//     noResults.append(noResultsInner)
//     noResultsInner.append(noResMessage);
//     noResultsInner.append(addPlaceButton);

//   }

//   if (searchResults.length) {
//     console.log('search results boolean', searchResults.length)


//     window.location.replace(`file:///Users/maria/Documents/Coding%20Projects/Safely/results/results.html`)
//   }

  // $('.add-place-button').click(function (event) {

  //   window.location.replace('file:///Users/maria/Documents/Coding%20Projects/Safely/form.html')
  // });



//   // placesArray.forEach(function (place) {
//   //   createCard(place)
//   // })
//   // should I use a new array temporarily? Or use the test array?

//   // arrayOfPlaces.forEach(function (place) {
//   //   createCard(place);
//   // }
//   // )
//   // how do I link the createCard function I've already created to this?
//   // if (searchResults.length) {
//   //   createCard.forEach(function (place) {
//   //     createCard(place)
//   //   })
//   // }

// });

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
