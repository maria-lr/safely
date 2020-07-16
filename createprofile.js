function createProfile(place) {

  let newCard = $('<div></div>')
    .addClass('cardLook');

  let thumbnail = $('<section></section>')
    .css('background-image', `url(${place.thumbnail})`)
    .addClass('thumbnail')

  let nameHeader = $('<h1></h1>')
    .text(place.name);

  let nameBody = $('<p></p>')
    .text(place.description);

  let addressHeader = $('<h1></h1>')
    .text('Address');

  let addressBody1 = $('<p></p>')
    .text(place.address_1);

  let addressBody2 = $('<p></p>')
    .text(place.address_2);

  let hoursHeader = $('<h1></h1>')
    .text('Hours');

  let hoursBody = $('<p></p>')
    .text(place.hours);

  let phoneHeader = $('<h1></h1>')
    .text('Phone');

  let phoneBody = $('<p></p>')
    .text(place.phone);

  let websiteHeader = $('<h1></h1>')
    .text('Website');

  let websiteBody = $('<p></p>')
    .text(place.website);

  let text = $('<div></div>')
    .addClass('text')

  let trashButton = $('<i></i>')
    .addClass('fas fa-trash-alt trash')

  let trashContainer = $('<div></div>')
    .addClass('trashC')

  newCard.append(thumbnail);
  text.append(nameHeader);
  text.append(nameBody);
  text.append(addressHeader);
  text.append(addressBody1);
  text.append(addressBody2);
  text.append(hoursHeader);
  text.append(hoursBody);
  text.append(phoneHeader);
  text.append(phoneBody);
  text.append(websiteHeader);
  text.append(websiteBody);
  trashContainer.append(trashButton);
  newCard.append(text);
  newCard.append(trashContainer);
  $('.pitems').append(newCard);
  // $('.pitems').append(text);
  // $('.pitems').append(trashContainer);

  $('.trash').click(function (event) {
    console.log('beep')
    // - Deleting data from the server
    // You need to pass a method of DELETE as your body, as well as the ID of the thing you want to delete as part of the URL
    // CODE BELOW:
    fetch(`https://tiny-lasagna-server.herokuapp.com/collections/mariaTestCollection/${place._id}`, {
      method: "DELETE"
    }).then(response => {
      return response.json();
    }).then((returnValue) => {
      console.log("We deleted something from the server", returnValue)
    })
    const postDelContainer = $('<div></div>')
      .addClass('post-del-container')

    const postDelete = $('<section></section>')
      .addClass('post-delete');

    const delMessage = $('<p></p>')
      .html(`You successfully deleted this profile.<br>`)
      .addClass('message');

    const returnButton = $('<button></button>')
      .text('Return to home')
      .addClass('return-button');

    postDelContainer.append(postDelete);
    postDelete.append(delMessage);
    postDelete.append(returnButton);

    $('.profile-comment-section').replaceWith(postDelContainer);

    returnButton.click(function (event) {
      window.location.href = `file:///Users/maria/Documents/Coding%20Projects/Safely/homepage.html`
    })
  });
}





















  // let statusHeader = $('<h1></h1>')
  //   .text('Status');

  // let statusBody = $('<p></p>')
  //   .text(place.status);

    // text.append(statusHeader);
  // text.append(statusBody);



  // let safetyHeader = $('<h1></h1>')
  //   .text('Safety');

  // let safetyBody = $('<p></p>')
  //   .text(place.safety);

  // text.append(safetyHeader);
  // text.append(safetyBody);