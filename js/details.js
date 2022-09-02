const detailsContainer = document.querySelector(".details");

const queryString = document.location.search;

const param = new URLSearchParams(queryString);

const id = param.get("id")

console.log(id);

const newUrl = `https://api.imgflip.com/get_memes/` + id;
const proxyUrl = `https://noroffcors.herokuapp.com/`;

const corsFix = proxyUrl + newUrl;

//console.log(newUrl);

async function getDetails() {

    const response = await fetch(corsFix)
    const details = await response.json()

    console.log(details.data.memes)

    getDetails(details)

    detailsContainer.innerHTML += `<a href="details.html?id=${results[i].id}">
                                    <h2 class="result">${results[i].name}</h2>
                                    <img class="image" src="${results[i].url}" alt="${results[i].name}"/>
                                    <p class="size">Height: ${results[i].height} x Width: ${results[i].width}</p>
                                    </a>`;
    //console.log(results[i].id);  
}

getDetails()