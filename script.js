const container = document.querySelector ("#answer-container");
const API_URL = 'https://answerbook.david888.com/?lang=en';

const myData = await fetchData(API_URL);
console.log (myData);


// let zahl = 200;
// let text1 = "Melissa" + zahl;
// console.log(text1);
// let text2 = `Melissa ${zahl};`
// console.log (text2);


showData();

async function fetchData (url) {
    try {
        const response = await fetch(url);
        let jsObject = await response.json();
        return jsObject;
    } catch (e) {
        console.error(e);
        return [];

    }
}


function showData (){
        console.log(myData.answer);
        // let card = document.createElement("article");
        // card.classList.add("card");
        // card.innerHTML = `<h2>${myData.answer}</h2>`;
        // container.appendChild(card);
}