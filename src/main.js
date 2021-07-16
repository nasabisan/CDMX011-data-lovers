import information from './data.js';


window.onload = function() {
    showInScreen();
};

function showInScreen() {
    let sumaMuestra = "";
    const character = information.getObject();

    for (let i = 0; i < 9; i++) {
        let id = i
        sumaMuestra += "<div class='pruebaDos'>" + "<p class='hijo'>" + character[i].name + '</p> <img class="hijo" src=' + character[i].image + '></div>';

    }
    return document.getElementById("characters").innerHTML = sumaMuestra;

    //document.getElementById("root").innerHTML = information.getObject()[1].name + '<img src=' + information.getObject()[1].image + '>';
    //document.getElementById("root").innerHTML = information.getObject()[2].name + '<img src=' + information.getObject()[2].image + '>';
    //document.getElementById("root").innerHTML = information.getObject()[3].name + '<img src=' + information.getObject()[3].image + '>';
    // information.showCharacters(information.getObject()) + information.showImages(information.getObject());
}


// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);