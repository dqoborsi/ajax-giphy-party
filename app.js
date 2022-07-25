const searchBtn = $('#search-btn');

searchBtn.on('click', function(e){
  // use the value of the input as the search term once we submit it
  e.preventDefault();
  async function getGiphyInfo() {
    let searchTerm = $('#search-term-input').val();
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    console.log('got:', response.data);
    return response;
  }
  let arrayOfGiphyObjs = getGiphyInfo();
  console.log('arrayOfGiphyObjs:', arrayOfGiphyObjs)

  // random index of array
  // create img element
  let randomIndex = Math.floor(Math.random() * arrayOfGiphyObjs.length);
  let newGiphy = $('<img>').attr('src', `${arrayOfGiphyObjs[randomIndex].url}`);

  $('#giphys-div').append(newGiphy)


  console.log(getGiphyInfo());


});

