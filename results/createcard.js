function createCard(place) {

  let newCard = $('<div></div>')
    .addClass('cardContainer');

  let thumbnail = $('<section></section>')
    .css('background-image', `url(${place.thumbnail})`)
    .addClass('thumbnail')

  let textSide = $('<div></div>')
    .addClass('textside')

  let nameHeader = $('<h1></h1>')
    .text(place.name);

  let addressBody1 = $('<p></p>')
    .text(place.address_1);

  let addressBody2 = $('<p></p>')
    .text(place.address_2);

  let nameBody = $('<p></p>')
    .text(place.description);

  // If result card is clicked, go to corresponding profile page.
  newCard.click(function (event) {
    window.location.href = `file:///Users/maria/Documents/Coding%20Projects/Safely/profile.html?id=${place._id}`
  })

  newCard.append(thumbnail);
  newCard.append(textSide);
  textSide.append(nameHeader);
  textSide.append(nameBody);
  textSide.append(addressBody1);
  textSide.append(addressBody2);
  $('.ritems').append(newCard);
}