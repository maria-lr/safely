function createProfile(place) {

  let newCard = $('<div></div>')
    .addClass('cardLook');

  let thumbnail = $('<img>')
    .attr('src', place.thumbnail)
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
  newCard.append(text)
  $('.pitems').append(newCard);
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