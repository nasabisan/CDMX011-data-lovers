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

        const firstCharacters = Array.from(characters);
        return firstCharacters;
    },

    sortData(data, select) {
        let objeto = data
        let orderArray;
        switch (select) {

            case 1:
                // Name/Ascendente

                orderArray = objeto.sort(function(a, b) {
                    if (a.name < b.name) {
                        return -1
                    }
                    if (a.name > b.name) {
                        return 1
                    } else {
                        return 0
                    }
                })
                break;

            case 2:
                //name/descendente

                orderArray = objeto.sort(function(a, b) {
                    if (b.name < a.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return 1
                    } else {
                        return 0
                    }
                })
                break;

            case 3:
                //id/ascedente


                orderArray = objeto.sort(function(a, b) {
                    return (b.id - a.id)
                })
                break;

            case 4:
                //id/descendente

                orderArray = objeto.sort(function(a, b) {
                    return (b.id - a.id)
                })
                break;
            default:
        }
        return orderArray




    },



    /* data.map((dia) => {
         dia.meses.sort((a, b) => {
             return a.value > b.value ? -1 : 1
         })
         return console.log(dia)
     })*/
    /*getStatus(objeto) {

        const arregloStatus = objeto.map(function(element) {
          let numero;
            switch (element.status) {
                case "Alive":
                    numero= 1;
                    break;
                case "Dead":
                    numero= 2;
                    break;
                case "unknown":
                    numero= 3
                    break;
                default:
            }

            return numero;
        })return arregloStatus*/
}

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



export default information