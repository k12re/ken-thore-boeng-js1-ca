const url = `https://api.disneyapi.dev/characters`;


const resultsContainer = document.querySelector(".results");
const movieContainer = document.querySelector(".movie");
const messageContainer = document.querySelector(".error");


async function callAPI() {


    try{
        const response = await fetch(url);
        const json = await response.json();
        const results = json.data;
        
    
        resultsContainer.innerHTML = "";
    
    
        for (let i = 0; i < results.length; i++) {
            resultsContainer.innerHTML += `<a href="details.html?id=${results[i]._id}">
                                            <h2 class="result">Name: ${results[i].name}</h2>
                                            <img class="image" src="${results[i].imageUrl}" alt="${results[i].name}"/>
                                            <li class="films">Films:
                                            <ul class="movie">Click to view</ul>
                                            </li>
                                            </a>`;
                                            //
                                            //results[i].films && 
                                            //if(results[i].films || results.films[i].length) {
                                            //    for (let i = 0; i < results[i].films.length; i++) {
                                            //        detailsContainer.innerHTML += `<ul class="movie">${results[i].films}</ul>`
                                            //    }; 
                                            //} else {
                                            //    detailsContainer.innerHTML += "None"
                                            //} 
        }
    } 
    
    
    catch {
        const error = errorMsg("error", "An error occured");
        messageContainer.innerHTML = error;
    }


}


callAPI();
