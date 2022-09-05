const url = `https://api.imgflip.com/get_memes`;

const resultsContainer = document.querySelector(".results");

const options = {
    method: "GET",
    header: {
        "x-requested-with": "https://api.imgflip.com/get_memes/"
    }
}


async function callAPI() {

    const response = await fetch(url);
    const json = await response.json();
    //console.log(json.data.memes);
    const results = json.data.memes;
    console.log(results);

    //resultsContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
        resultsContainer.innerHTML += `<a href="details.html?id=${results[i].id}">
                                        <h2 class="result">${results[i].name}</h2>
                                        <img class="image" src="${results[i].url}" alt="${results[i].name}"/>
                                        <p class="size">Height: ${results[i].height} x Width: ${results[i].width}</p>
                                        </a>`;
                                        //console.log(results[i].id);  
    }
    
}

callAPI()

