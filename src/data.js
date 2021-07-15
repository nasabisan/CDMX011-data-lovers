/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/


import data from './data/rickandmorty/rickandmorty.js';
const information = {

    getObject() {
        const characters = data.results.map(function(character) {
            return character;
        });

        const firstCharacters = Array.from(characters.slice(0, 9));
        return firstCharacters;
    },



    // showCharacters(object) {

    //     let names;
    //     let sumaNames = [];
    //     for (let i = 0; i < 9; i++) {
    //         names = object[i].name;
    //         sumaNames += names;
    //     }
    //     return sumaNames;
    // },

    // showImages(object) {
    //     let images;
    //     let sumaImages = [];
    //     for (let i = 0; i < 9; i++) {
    //         images = object[i].image;
    //         sumaImages += images;
    //     }
    //     return sumaImages;
    // }
}


export default information