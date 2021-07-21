import information from './data.js';
let charactersCounter = 0;
let i;

let orderBy = document.getElementsByName('option').value

const next = document.getElementById('next')
const prev = document.getElementById('prev')
const sort = document.getElementById('sort')
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
sort.addEventListener('click', function() {
    console.log(information.sortData(character, orderBy))
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
    return document.getElementById("characters").innerHTML = newHTML

}
//const estado = information.getStatus(character)
//console.log(estado);

/*function changeColor() {
    switch (estado) {
        case 1:
            console.log('esta vivo')
            break;
        case 2:
            console.log('esta muerto')
            break
        case 3:
            console.log('quien sabe')
            break
        default:
            console.log("default")

    }*/