const url = `https://api.imgflip.com/get_memes`;

const resultsContainer = document.querySelector(".results");



async function callAPI() {
    const response = await fetch(url);
    const json = await response.json();
    //console.log(json.data.memes);
    const results = json.data.memes;
    console.log(results);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
        resultsContainer.innerHTML += `<h2 class="result">${results[i].name}</h2>
                                        <img class="image" src="${results[i].url}" alt="${results[i].name}"/>`;
        
    }
}

callAPI()

