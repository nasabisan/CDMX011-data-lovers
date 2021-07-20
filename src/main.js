import information from './data.js';
let charactersCounter = 0;
let i;

const next = document.getElementById('next')
const prev = document.getElementById('prev')
const character = information.getObject()

window.onload = function() {
    showInScreen();
}

next.addEventListener('click', function() {
    charactersCounter += 9
    showInScreen()
})

prev.addEventListener('click', function() {
    charactersCounter -= 9
    showInScreen()
})

function showInScreen() {

    let newHTML = "";
    for (i = 0; i < character.length && i < 9; i++) {

        newHTML += `  <div class='grid'>
                        <section class='identifier'>
                        <p>${character[i+charactersCounter].name}</p>
                        <img class='image' src="${character[i+charactersCounter].image}">
                        </section>
                        <section class='properties'>
                        <p><span class='keys'>Gender: </span> ${character[i+charactersCounter].gender}</p>
                        <p><span class='keys'>Species: </span>${character[i+charactersCounter].species}</p>
                        <p><span class='keys'>Status: </span> ${character[i+charactersCounter].status} <span class='dot'>-</span></p>
                        </section>
                    </div>`
    }
    return document.getElementById("characters").innerHTML = newHTML,
        changeColor()
}