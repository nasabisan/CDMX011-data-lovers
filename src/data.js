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
                    return (a.id - b.id)
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
    filterData(data, select) {
        let objeto = data
        let filterArray;
        switch (select) {

            case 1:
                // Alives

                filterArray = objeto.filter(function(objeto) {
                    return objeto.status === 'Alive';
                })

                break;

            case 2:
                //Deads

                filterArray = objeto.filter(function(objeto) {
                    return objeto.status === 'Dead';
                })


                break;

            case 3:
                //Humans


                filterArray = objeto.filter(function(objeto) {
                    return objeto.species === 'Human';
                })
                break;

            case 4:
                //Aliens


                filterArray = objeto.filter(function(objeto) {
                    return objeto.species === 'Alien';
                })
                break;

            case 5:
                //Humanoid


                filterArray = objeto.filter(function(objeto) {
                    return objeto.species === 'Humanoid'
                })
                break;

            case 6:
                //Poopybuttholes


                filterArray = objeto.filter(function(objeto) {
                    return objeto.species === 'Poopybutthole'
                })
                break;
            case 7:
                //Cronenbergs


                filterArray = objeto.filter(function(objeto) {
                    return objeto.species === 'Cronenberg'
                })
                break;

            case 8:
                //Males


                filterArray = objeto.filter(function(objeto) {
                    return objeto.gender === 'Male'
                })
                break;
            case 9:
                //Females


                filterArray = objeto.filter(function(objeto) {
                    return objeto.gender === 'Female'
                })
                break;
            default:
        }
        return filterArray




    },

    findData(input, data) {
        // let objeto = data
        // let enterData = input
        let search

        search = data.filter(function(data) {
            return data.name === input
        })
        return search
    }
}


export default information