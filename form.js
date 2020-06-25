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

    window.location.href = `file:///Users/maria/Documents/Coding%20Projects/Safely/profile.html?id=${result._id}`;

  };

  sendDataToServer();
});
