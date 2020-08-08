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

  let commentContainer = $('<section></section>')
    .addClass('comment-container')

  let comments = $('<section></section>')
    .addClass('comments')

  let commentsLabel = $('<label></label>')
    .attr('for', 'commentbox')
    .html('Write a comment<br><br>')

  // append wherever want linebreak(especially after commentbox)

  let commentBox = $('<textarea></textarea>')
    .attr({
      id: 'commentbox',
      name: 'commentbox',
      rows: '5',
      cols: '100'
    })

  let addButton = $('<input>')
    .attr({
      id: 'sent',
      type: 'submit',
      value: 'Add'
    })
    .html('<br><br>')

  let myLinebreak = $('<br><br>');

  let postedComments = $('<section></section>')
    .addClass('posted-comments-container')

  let commentsTitle = $('<h1>Comments</h1>')
    .addClass('comments-title')

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
  $('.profile-comment-section').append(commentContainer);
  commentContainer.append(comments);
  comments.append(commentsLabel);
  comments.append(commentBox);
  comments.append(myLinebreak);
  comments.append(addButton);
  $('.profile-comment-section').append(postedComments);
  postedComments.append(commentsTitle);

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

  // Start of adding comments to database code
  // Define data to post to db.
  function comment() {
    let newComment = {
      placeId: id,
      comment: $('#commentbox').val()
    }

    // Send new comments to server
    fetch(`https://tiny-lasagna-server.herokuapp.com/collections/commentTestCollection/`, {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((results) => {
        return results.json();
      })
      .then((commentResult) => {
        console.log('This is the post result', commentResult)
        location.reload();
      })
  }

  // Run send when button is clicked.
  $('#sent').click(function (event) {
    comment();
  })

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