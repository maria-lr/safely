// On page load...

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Get all data from database
fetch(`https://tiny-lasagna-server.herokuapp.com/collections/mariaTestCollection/`)
  .then((results) => {
    return results.json();
  })
  .then((allDataFromServer) => {

    // Grab the result from the server with the id matching the search params.
    let placeFromId = allDataFromServer.find(function (item) {
      if (item._id === id) {
        return item
      }
    });

    // If there's a matching result, create the profile.
    if (placeFromId) {
      createProfile(placeFromId);
    };
  })

// Grab all comments from database
fetch(`https://tiny-lasagna-server.herokuapp.com/collections/commentTestCollection/`)
  .then((results) => {
    return results.json();
  })
  .then((commentsFromServer) => {
    console.log("This is everything in our collection!", commentsFromServer)

    // Grab comments for this profile page using the place id.
    let commentFromPlaceId = commentsFromServer.filter(function (item) {
      return item.placeId === id
    })

    // Create comment card outline
    function createComment(item) {
      let commentArea = $('<section></section>')
        .addClass('comment-area')

      let commentMessage = $('<p></p>')
        .addClass('comment-message')
        .text(item.comment)
      // .text($('#commentbox').val())

      commentArea.append(commentMessage)
      $('.posted-comments-container').append(commentArea)
    }

    // Create comment card for each comment
    commentFromPlaceId.forEach(function (item) {
      createComment(item);
    })
  })



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





// need a new collection on the database called commentTestCollection
// when someone comments, put new comment in database
// When profile page loads and grabs profile, take the id, go get all the comments out of the coment database and filter only by comments for that specific id and display

// when a user types a comment and hits 'post' call a function
// the function should create an object with 2 propertes:
// id: the id of the post
// text/comment/body: the comment text itself




















  // Comment code beginning?

// async function addNewDataToServer() {
//   const postOptions = {
//     method: "POST",
//     body: JSON.stringify(newPlaceData),
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }
//   // Send our POST request with its options
//   const postRequest = await fetch('url', postOptions);

//   // Turn our response into JSON
//   const result = await postRequest.json();

//   // Log it out!
//   console.log("The result of my POST IS...", result);

// }
  // addNewDataToServer();