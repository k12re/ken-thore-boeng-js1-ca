const url = `https://api.disneyapi.dev/characters`;


const resultsContainer = document.querySelector(".results");


async function callAPI() {

    const response = await fetch(url);
    const json = await response.json();
    //console.log(json.data.memes);
    const results = json.data;
    console.log(results);

    //resultsContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
        resultsContainer.innerHTML += `<a href="details.html?id=${results[i]._id}">
                                        <h2 class="result">Name: ${results[i].name}</h2>
                                        <img class="image" src="${results[i].imageUrl}" alt="${results[i].name}"/>
                                        <li class="films">Films:
                                            <ul>${results[i].films}</ul>
                                        </li>
                                        </a>`;
                                        //console.log(results[i].id);  

                                   
    }

    
}

callAPI()

