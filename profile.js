
// Get all data from database
fetch(`https://tiny-lasagna-server.herokuapp.com/collections/mariaTestCollection/`)
  .then((results) => {
    return results.json();
  })
  .then((allDataFromServer) => {
    console.log("This is everything in our collection!", allDataFromServer)

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Grab the place object using the id
    let placeFromId = allDataFromServer.find(function (item) {

      console.log('The item ID is:', item._id);
      if (item._id === id) {
        console.log(item)
        return item
      }
    });

    if (placeFromId) {
      createProfile(placeFromId);
    };

  });