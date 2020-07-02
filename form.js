const validate = new Bouncer('form', { disableSubmit: true });

async function sendDataToServer() {

  let newPlace = {
    name: $('#pname').val(),
    description: $('#descriptioninput').val(),
    address_1: $('#add1').val(),
    address_2: $('#add2').val(),
    hours: `${$('#day1 :selected').text()} - ${$('#day2 :selected').text()}, 
    ${$('#time1').val()} - ${$('#time2').val()}`,
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

  // Post new place to the server
  const postRequest = await fetch('https://tiny-lasagna-server.herokuapp.com/collections/mariaTestCollection', postOptions);

  // Response from the server + id
  const result = await postRequest.json();

  window.location.href = `file:///Users/maria/Documents/Coding%20Projects/Safely/profile.html?id=${result._id}`;
};

document.addEventListener('bouncerFormValid', sendDataToServer)

$('#phone').mask('(000) 000-0000')