const detailsContainer = document.querySelector(".details");
const messageContainer = document.querySelector(".error");


const queryString = document.location.search;

let param = new URLSearchParams(queryString);

let id = parseInt (param.get("id"));

const newUrl = `https://api.disneyapi.dev/characters/` + id;


async function getDetails() {


    try {
        const response = await fetch(newUrl);
        const results = await response.json();
        document.title = results.name
    
     
        detailsContainer.innerHTML = "";
                                   
    
        detailsContainer.innerHTML += `<h2 class="result">${results.name}</h2>
                                        <img class="image" src="${results.imageUrl}" alt="${results.name}"/>
                                        <li class="films">Films: </li>
                                        `;
                                        
    
                                        if(results.films && results.films.length) {
                                            for (let i = 0; i < results.films.length; i++) {
                                                detailsContainer.innerHTML += `<ul class="movie">${results.films[i]}</ul>`
                                            }; 
                                        } 
                                        else {
                                            detailsContainer.innerHTML += `<ul>None</ul>`
                                        };

                                        `<li class="tvshows">Series!!: </li>`

                                        if(results.tvShows && results.tvShows.length) {
                                            for (let i = 0; i < results.tvShows.length; i++) {
                                                detailsContainer.innerHTML += `<li class="tvshows">Series: </li><ul class="series"> ${results.tvShows[i]}</ul></li>`
                                            }; 
                                        } 
                                        else {
                                            detailsContainer.innerHTML += "None";
                                        };

                                        if(results.films.length === 0 && results.tvShows.length === 0) {
                                            detailsContainer.innerHTML = `<img class="image" src="${results.imageUrl}" alt="${results.name}"/>
                                                                            <p>No movies or TV shows to display</p>`
                                        }                                  
    }
    
    
    catch {
        const error = errorMsg("error", "An error occured");
        messageContainer.innerHTML = error;
    }
}


getDetails()
