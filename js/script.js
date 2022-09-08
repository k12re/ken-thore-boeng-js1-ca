const url = `https://api.disneyapi.dev/characters`;


const resultsContainer = document.querySelector(".results");
const movieContainer = document.querySelector(".movie");


async function callAPI() {

    const response = await fetch(url);
    const json = await response.json();
    //console.log(json.data.memes);
    const results = json.data;
    //console.log(results);


    

    //movieContainer.innerHTML = "No movies";

    for (let i = 0; i < results.length; i++) {
        resultsContainer.innerHTML += `<a href="details.html?id=${results[i]._id}">
                                        <h2 class="result">Name: ${results[i].name}</h2>
                                        <img class="image" src="${results[i].imageUrl}" alt="${results[i].name}"/>
                                        <li class="films">Films:
                                            <ul class="movie">${results[i].films}</ul>
                                        </li>
                                        </a>`;
                                        //console.log(results[i].id);  


    console.log(results[i].films);                                     

    //if(results[i].films.length === 0) {
    //    movieContainer.innerHTML = "None"
    //}

                                   
    }

}

callAPI()

