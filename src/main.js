import data from './data/rickandmorty/rickandmorty.js';
import information from './data.js';



let charactersCounter = 0;
let i;
const character = data.results


//const next = document.getElementById('next');
//const prev = document.getElementById('prev');
const sort = document.getElementById('sort');
const filter = document.getElementById('filter');
const search = document.getElementById('search')
    //const searchValue = document.getElementById('input').value;
let filterValue = document.getElementById('filter').value;
let sortValue = document.getElementById('sort').value;




window.onload = function() {
    showInScreen(information.sortData(character, 3))
}

//next.addEventListener('click', forward())

/*function forward() {
    charactersCounter += 9
    showInScreen()
}

//prev.addEventListener('click', backward())

function backward() {
    charactersCounter -= 9
    showInScreen()
}*/

sort.addEventListener('click', function() {
    filterValue = document.getElementById('filter').value;
    sortValue = document.getElementById('sort').value;
    return showInScreen(information.filterData(information.sortData(character, parseInt(sortValue)), parseInt(filterValue)))
})

filter.addEventListener('click', function() {
    filterValue = document.getElementById('filter').value;
    return showInScreen(information.filterData(character, parseInt(filterValue)))
})

search.addEventListener('click', function() {
    let valor = document.getElementById('input').value;
    return showInScreen((information.findData(valor, character)))
})

function showInScreen(arreglo) {

    let newHTML = "";
    for (i = 0; i < arreglo.length; i++) {

        newHTML += `  <div class='grid'>
                        <section class='identifier'>
                        <p>${arreglo[i+charactersCounter].name}</p>
                        <img class='image' src="${arreglo[i+charactersCounter].image}">
                        </section>
                        <section class='properties'>
                        <p><span class='keys'>ID: </span> ${arreglo[i+charactersCounter].id}</p>
                        <p><span class='keys'>Gender: </span> ${arreglo[i+charactersCounter].gender}</p>
                        <p><span class='keys'>Species: </span>${arreglo[i+charactersCounter].species}</p>
                        <p><span class='keys'>Status: </span> ${arreglo[i+charactersCounter].status} <span data-status="${arreglo[i].status}" class='dot'>-</span></p>
                        </section>
                    </div>`
    }
    return document.getElementById("characters").innerHTML = newHTML, changeColor()

}




function changeColor() {

    const pointElements = document.querySelectorAll('.dot')
    for (i = 0; i < pointElements.length; i++) {

        if (pointElements[i].dataset.status == "Alive") {

            pointElements[i].style.background = 'green';
            pointElements[i].style.color = 'green';

        } else if (pointElements[i].dataset.status == "unknown") {
            pointElements[i].style.background = 'yellow';
            pointElements[i].style.color = 'yellow';
        }
    }

}