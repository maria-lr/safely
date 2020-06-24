const searchButton = $('#searchbutton')

searchButton.click(function (event) {
  const searchBar = $('#search');
  let searchTerm = searchBar.val();

  // Do not allow search on search button click if the searchbar is empty. 
  if (searchTerm === "") {
    console.log('bailing early because no search term')
    return;
  }

  if (searchTerm) {
    // console.log('there is a searchTerm:', searchTerm)
    window.location.href = `file:///Users/maria/Documents/Coding%20Projects/Safely/results/results.html?search=${searchTerm}`;

  }

});