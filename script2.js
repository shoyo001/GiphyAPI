
const apiKey = 'aYq4MvAM6GGGZkCkur2TYGheuDEyaTr4';// YouTube 'AIzaSyAiuPU-DXcVOpe256Q_RPT9tds1PfvB6nk';

window.addEventListener('load', (event) => {
  
    console.log('page is fully loaded');
  
  
  
  // <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/C_86cFXRrio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
  
  // 1. Dont show the results box unless there are results on the page, handle on both the screen sizes.
  // 2. Add a dropdown for the user to choose 5, 10,15,20 results and once they hit search, it should show the appropriate number of results
    
  
    document.getElementById('search-button').addEventListener('click', () => {
      console.log('the search button was clicked');
      let searchTerm = document.getElementById('search-term').value;
      console.log('the search term is', searchTerm);
        
      fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=aYq4MvAM6GGGZkCkur2TYGheuDEyaTr4&limit=10`)
      .then((res) => {
        return res.json()
      }).then((json) => {
        // console.log(json);
        let results = json;
        console.log('the results array is', results);

        document.getElementById('results').innerHTML = "";
        
        for(let i = 0; i <= 9; i++){
          console.log(json.data[i].images.original.url);
          console.log(i);
          // document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + `<h1 class='text-xl'>${result.snippet.title}</h1>`;
  
          document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + `<div class='p-5 border-b border-gray-300'>
          <h1 class='text-xl mb-5 font-bold'>${json.data[i].slug}</h1>
          
          <iframe width="560" height="315" src="${json.data[i].images.original.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
          </div>
          `;
  
          // 1. Show the results on the screen - Show the title on the screen 
          // 2. Instead of always searching for Ohio, search for the string that the user types in the search box       
          // 3. Show the video preview on the screen - HINT - Look up a youtube video and click on share and look up the embed video code. its an iframe you will need to use.
        }
      })
  
  
    })
  
  
  });

