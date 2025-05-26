const button = document.querySelector('#submit');
const container = document.querySelector ("#answer-container");
const API_URL = 'https://answerbook.david888.com/?lang=en';
const speachbubble = document.querySelector("#answer-container");

button.addEventListener('click', async () => {
    const data = await fetchData(API_URL);
    showData(data);
});


// const myData = await fetchData(API_URL);
// console.log (myData);



// showData();

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


function showData (myData){
    speachbubble.classList.add("active");
    console.log(myData.answer);
    container.innerHTML = `${myData.answer}`;
    setTimeout(() => {
        speachbubble.classList.remove("active");
        container.innerHTML = "";
    }, 5000);
    
}


// let zahl = 200;
// let text1 = "Melissa" + zahl;
// console.log(text1);
// let text2 = `Melissa ${zahl};`
// console.log (text2);
