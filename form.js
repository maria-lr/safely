let placesArray = []

// Get all data from database
fetch(`https://tiny-lasagna-server.herokuapp.com/collections/mariaTestCollection/`)
  .then((results) => {
    return results.json();
  })
  .then((allDataFromServer) => {
    console.log("This is everything in our collection!", allDataFromServer)

    placesArray = allDataFromServer;
  });

$('#place-form').submit(function (event) {
  console.log('Submit: click!')
  event.preventDefault();

  async function sendDataToServer() {

    let newPlace = {
      name: $('#pname').val(),
      description: $('#descriptioninput').val(),
      address_1: $('#add1').val(),
      address_2: $('#add2').val(),
      hours: $('#hours').val(),
      phone: $('#phone').val(),
      website: $('#website').val(),
      thumbnail: $('#image').val()
    }

    const postOptions = {
      method: "POST",
      body: JSON.stringify(newPlace),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    console.log('new place', newPlace)

    // Post new place to the server
    const postRequest = await fetch('https://tiny-lasagna-server.herokuapp.com/collections/mariaTestCollection', postOptions);

    // Response from the server + id
    const result = await postRequest.json();

    console.log("The id of my newly created post is", result._id);

    // _id
    // const urlParams = new URLSearchParams(window.location.id);
    // // grabs the thing after the question mark in the url
    // const id = urlParams.get('id');

    // console.log("The ID param is...", id)

    // console.log('search', id)

    window.location.href = `file:///Users/maria/Documents/Coding%20Projects/Safely/profile.html?id=${result._id}`;


    // result._id
    // use query parameter, to go to a new html page to get this same data on a new page, bc i no longer have access to the data on the new html page.
    // put @end of url ?
  };

  sendDataToServer();
});
// doesn't seem to add a new place object to my server... is this because the submit button is refreshing faster than the info can travel?