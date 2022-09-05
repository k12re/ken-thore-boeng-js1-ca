const detailsContainer = document.querySelector(".details");

const queryString = document.location.search;

let param = new URLSearchParams(queryString);

let id = parseInt (param.get("id"));

console.log(id);

const newUrl = `https://api.disneyapi.dev/characters/` + id;

console.log(newUrl);

async function getDetails() {

    const response = await fetch(newUrl);
    const results = await response.json();
    //response.headers["Content-Type"] === "application/json"

    console.log(results)

    //renderDetails(details)

    detailsContainer.innerHTML += `<h2 class="result">${results.name}</h2>
                                    <img class="image" src="${results.imageUrl}" alt="${results.name}"/>
                                    <li class="films">Films:
                                    <ul>${results.films}</ul>
                                </li>`;
    console.log(results._id);  
}

getDetails()


//function renderDetails(details) {
//    detailsContainer.innerHTML += `<h2 class="result">${results[i].name}</h2>
//                                    <img class="image" src="${results[i].imageUrl}" alt="${results[i].name}"/>
//                                    <li class="films">
//                                            <ul>${results[i].films}</ul>
//                                        </li>`;
//}