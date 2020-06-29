function createCard(place) {

  let newCard = $('<div></div>')
    .addClass('cardContainer');

  let thumbnail = $('<img>')
    .attr('src', place.thumbnail)
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

  newCard.append(thumbnail);
  newCard.append(textSide);
  textSide.append(nameHeader);
  textSide.append(nameBody);
  textSide.append(addressBody1);
  textSide.append(addressBody2);
  $('.ritems').append(newCard);
}