import information from '/data.js'
let i;
let charactersCounter = 0;


fetch('./data/rickandmorty/rickandmorty.json')
    .then(response => response.json())
    .then(data => {
        showInScreen(information.sortData(data.results, 3))
        changeSearch(searchValue)


        sort.addEventListener('click', function() {
            filterValue = document.getElementById('filter').value;
            sortValue = document.getElementById('sort').value;
            return showInScreen(information.filterData(information.sortData(data.results, parseInt(sortValue)), parseInt(filterValue)))
        })

        filter.addEventListener('click', function() {
            filterValue = document.getElementById('filter').value;
            return showInScreen(information.filterData(data.results, parseInt(filterValue)))
        })

        search.addEventListener('keyup', function() {
            searchValue = document.getElementById('input').value;
            if (searchValue == "") {
                return showInScreen(data.results)
            } else {
                return showInScreen((information.findData(changeSearch(), data.results)))
            }
        })


    })


const sort = document.getElementById('sort');
const filter = document.getElementById('filter');
const search = document.getElementById('input')
let searchValue = document.getElementById('input').value;
let filterValue = document.getElementById('filter').value;
let sortValue = document.getElementById('sort').value;


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
                        <p><span class='keys'>Origin: </span>${arreglo[i+charactersCounter].origin.name}</p>
                        </section>
                    </div>`
    }
    return document.getElementById("characters").innerHTML = newHTML, changeColor()
}




function changeColor() {

    const pointElements = document.querySelectorAll('.dot')
    for (i = 0; i < pointElements.length; i++) {

        if (pointElements[i].dataset.status == "Alive") {

            pointElements[i].style.background = '#5EBD3C';
            pointElements[i].style.color = '#5EBD3C';

        } else if (pointElements[i].dataset.status == "unknown") {
            pointElements[i].style.background = '#E7E866';
            pointElements[i].style.color = '#E7E866';
        }
    }

}

function changeSearch() {
    let fullname = document.getElementById('input').value
    let initial1 = fullname.slice(0, 1);
    let positioninitial2 = fullname.indexOf(" ") + 1;
    let initial2 = fullname.slice(positioninitial2, positioninitial2 + 1);
    let str = initial1.toUpperCase() + (fullname.slice(1, positioninitial2 - 1)).toLowerCase() + " " + initial2.toUpperCase() + (fullname.slice(positioninitial2 + 1, fullname.length)).toLowerCase()
        // console.log(str);
    return str


}