/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/


import data from './data/rickandmorty/rickandmorty.js';
const information = {
    showCharacters() {
        const characters = data.results.map(function(character) {
            return character;
        });
        console.log(characters);
    }
}

export default information