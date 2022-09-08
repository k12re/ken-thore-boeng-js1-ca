const detailsContainer = document.querySelector(".details");
const movieContainer = document.querySelector(".movie");



const queryString = document.location.search;

let param = new URLSearchParams(queryString);

let id = parseInt (param.get("id"));

const newUrl = `https://api.disneyapi.dev/characters/` + id;


async function getDetails() {

    const response = await fetch(newUrl);
    const results = await response.json();
    document.title = results.name
    
    
    
    //console.log(results.films)


    console.log(results.films); 
    
    //renderDetails(details)

    //movieContainer.innerHTML = "";

    



    detailsContainer.innerHTML += `<h2 class="result">${results.name}</h2>
                                    <img class="image" src="${results.imageUrl}" alt="${results.name}"/>
                                    <li class="films">Films: `
                                    

                                    for (let i = 0; i < results.films.length; i++) {
                                        movieContainer.innerHTML += `<ul class="movie">${results.films[i]}</ul></li>`
                                    }; 

                                    if(results.films.length === 0) {
                                        movieContainer.innerHTML = "None"
                                        } 
                               

     
}

getDetails()


//function renderDetails(details) {
//    detailsContainer.innerHTML += `<h2 class="result">${results[i].name}</h2>
//                                    <img class="image" src="${results[i].imageUrl}" alt="${results[i].name}"/>
//                                    <li class="films">
//                                            <ul>${results[i].films}</ul>
//                                        </li>`;
//}