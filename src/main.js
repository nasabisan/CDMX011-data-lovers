import information from './data.js';



let charactersCounter = 0;
let i;
const character = information.getObject()
    //const status = information.getStatus(character)
    //console.log(status)

const next = document.getElementById('next');
const prev = document.getElementById('prev');
const sort = document.getElementById('sort');
const filter = document.getElementById('filter');
const search = document.getElementById('search')
const valor = document.getElementById('input').value;
console.log(valor)




//console.log(getValue())






window.onload = function() {
    showInScreen(character)


}

/*next.addEventListener('click', forward())

function forward() {
    charactersCounter += 9
        //  showInScreen()
}

prev.addEventListener('click', backward())

function backward() {
    charactersCounter -= 9
        // showInScreen()
}*/

sort.addEventListener('click', function() {
    let valores = document.getElementById("sort").value;
    //return information.sortData(character, parseInt(valores)),
    return showInScreen(information.sortData(character, parseInt(valores)))
})

filter.addEventListener('click', function() {

    let valores = document.getElementById("filter").value;
    console.log(valores)
        //return information.filterData(character, parseInt(valores)),
    return showInScreen(information.filterData(character, parseInt(valores)))
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
                        <p><span class='keys'>Status: </span> ${arreglo[i+charactersCounter].status} <span id='dot' class='dot'>-</span></p>
                        </section>
                    </div>`
    }
    return document.getElementById("characters").innerHTML = newHTML

}





/*function changeColor() {
    const punto = document.getElementById('dot')


    status.forEach(function(element) {
        if (element == "Alive") {
            punto.style.background = 'green';
            punto.style.color = 'green';
        } else if (element == "unknown") {
            punto.style.background = 'yellow';
            punto.style.color = 'yellow';
        }
        console.log('muerto')
    });
}*/

/*function changeColor() {
    // const punto = document.getElementById('dot')
    let point
    for (i = 0; i < character.length; i++) {

        if (character[i + charactersCounter].status == "Alive") {
            point = document.getElementById('dot').style.background = 'green', document.getElementById('dot').style.color = 'green';
        } else if (character[i + charactersCounter].status == "unknown") {
            point = document.getElementById('dot').style.background = 'yellow', document.getElementById('dot').style.color = 'yellow';
        }
    }

    console.log(point)

};*/