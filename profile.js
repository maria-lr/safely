
// Get all data from database
fetch(`https://tiny-lasagna-server.herokuapp.com/collections/mariaTestCollection/`)
  .then((results) => {
    return results.json();
  })
  .then((allDataFromServer) => {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Grab the result from the server with the id matching the search params.
    let placeFromId = allDataFromServer.find(function (item) {

      if (item._id === id) {
        return item
      }

    });

    // If there's a matching result, create the profile.
    if (placeFromId) {
      createProfile(placeFromId);
    };

  });




















  // Comment code beginning?

// async function addNewDataToServer() {
//   const postOptions = {
//     method: "POST",
//     body: JSON.stringify(newPlaceData),
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }
//   // Send our POST request with its options
//   const postRequest = await fetch('url', postOptions);

//   // Turn our response into JSON
//   const result = await postRequest.json();

//   // Log it out!
//   console.log("The result of my POST IS...", result);

// }
  // addNewDataToServer();