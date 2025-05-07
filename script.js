const container = document.querySelector ("#answer-container");

const API_URL = 'https://answerbook.david888.com/?lang=en';

async function fetchData (url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.error(e);
        return [];

    }
}

const myData = await fetchData(API_URL);

function showData (){

        let card = document.createElement("article");
        card.classList.add("card");
        card.innerHTML = `
        <h2>${myData.answer}</h2>
        `;
        container.appendChild(card);

}

showData();