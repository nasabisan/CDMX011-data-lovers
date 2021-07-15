import information from './data.js';


document.getElementById("button").addEventListener("click", function() {
    showInScreen();
});

function showInScreen() {
    let muestra;
    let sumaMuestra = "";

    for (let i = 0; i < 9; i++) {
        let id = i
        muestra = document.getElementById(id.toString()).innerHTML = information.getObject()[i].name + '<img src=' + information.getObject()[i].image + '>';
        sumaMuestra += muestra;
    }
    return sumaMuestra;
    //document.getElementById("root").innerHTML = information.getObject()[1].name + '<img src=' + information.getObject()[1].image + '>';
    //document.getElementById("root").innerHTML = information.getObject()[2].name + '<img src=' + information.getObject()[2].image + '>';
    //document.getElementById("root").innerHTML = information.getObject()[3].name + '<img src=' + information.getObject()[3].image + '>';
    // information.showCharacters(information.getObject()) + information.showImages(information.getObject());
}


// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);