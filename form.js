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

    // let newPlace = {
    //   name: $('#pname').val(),
    //   description: $('#desc').val()
    // };

    const postOptions = {
      method: "POST",
      body: JSON.stringify(newPlace),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    console.log('new place', newPlace)
    const postRequest = await fetch('https://tiny-lasagna-server.herokuapp.com/collections/mariaTestCollection', postOptions);

    const result = await postRequest.json();

    console.log("The result of my POST IS...", result);


    // result._id
    // use query parameter, to go to a new html page to get this same data on a new page, bc i no longer have access to the data on the new html page.
    // put @end of url ?
  };

  sendDataToServer();
});
// doesn't seem to add a new place object to my server... is this because the submit button is refreshing faster than the info can travel?