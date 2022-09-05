const detailsContainer = document.querySelector(".details");

const queryString = document.location.search;

const param = new URLSearchParams(queryString);

const id = param.get("_id")

//console.log(id);

const newUrl = `https://api.disneyapi.dev/characters/:` + id;

console.log(newUrl);

async function getDetails() {

    const response = await fetch(newUrl);
    const details = await response.json()
    //response.headers["Content-Type"] === "application/json"

    console.log(details)

    renderDetails(details)

    //detailsContainer.innerHTML += `<h2 class="result">${results[i].name}</h2>
    //                                <img class="image" src="${results[i].url}" alt="${results[i].name}"/>
    //                                <p class="size">Height: ${results[i].height} x Width: ${results[i].width}</p>`;
    //console.log(results[i].id);  
}

getDetails()


function renderDetails(details) {
    detailsContainer.innerHTML += `<h2 class="result">${results[i].name}</h2>
                                    <img class="image" src="${results[i].imageUrl}" alt="${results[i].name}"/>
                                    <li class="films">
                                            <ul>${results[i].films}</ul>
                                        </li>`;
}