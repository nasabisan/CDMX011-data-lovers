import information from '../src/data.js';
import { mockCharacter } from './mock.js'


describe('information', () => {
    it('Deberài ser un Objeto', () => {
        expect(typeof information).toBe('object');
    });

    describe('information.sortData', () => {
        it('information.sortData debería ser una funcion', () => {
            expect(typeof information.sortData).toBe('function');
        });

        it('Debería retornar objeto ordenado de la A-Z', () => {
            expect(information.sortData(mockCharacter, 1)).toEqual(information.sortData(mockCharacter, 1));
        });
        it('Debería retornar objeto ordenado de la Z-A', () => {
            expect(information.sortData(mockCharacter, 2)).toEqual(information.sortData(mockCharacter, 2));
        });
        it('Debería retornar objeto ordenado por id ascendente', () => {
            expect(information.sortData(mockCharacter, 3)).toEqual(information.sortData(mockCharacter, 3));
        });
        it('Debería retornar objeto ordenado por id descendete', () => {
            expect(information.sortData(mockCharacter, 4)).toEqual(information.sortData(mockCharacter, 4));
        });
    });
    describe('information.filterData', () => {
        it('information.filterData debería ser una funcion', () => {
            expect(typeof information.filterData).toBe('function');
        });

        it('Debería retornar personajes vivos', () => {
            expect(information.filterData(mockCharacter, 1)).toEqual(information.filterData(mockCharacter, 1));
        });
        it('Debería retornar personajes muertos', () => {
            expect(information.filterData(mockCharacter, 2)).toEqual(information.filterData(mockCharacter, 2));
        });
        it('Debería retornar personajes humanos', () => {
            expect(information.filterData(mockCharacter, 3)).toEqual(information.filterData(mockCharacter, 3));
        });
        it('Debería retornar personajes alien', () => {
            expect(information.filterData(mockCharacter, 4)).toEqual(information.filterData(mockCharacter, 4));
        });
        it('Debería retornar personajes humanoides', () => {
            expect(information.filterData(mockCharacter, 5)).toEqual(information.filterData(mockCharacter, 5));
        });
        it('Debería retornar personajes poppybutholes', () => {
            expect(information.filterData(mockCharacter, 6)).toEqual(information.filterData(mockCharacter, 6));
        });
        it('Debería retornar personajes cronenberg', () => {
            expect(information.filterData(mockCharacter, 7)).toEqual(information.filterData(mockCharacter, 7));
        });
        it('Debería retornar personajes hombres', () => {
            expect(information.filterData(mockCharacter, 8)).toEqual(information.filterData(mockCharacter, 8));
        });
        it('Debería retornar personajes mujeres', () => {
            expect(information.filterData(mockCharacter, 9)).toEqual(information.filterData(mockCharacter, 9));
        });
        it('Debería retornar todos los personajes', () => {
            expect(information.filterData(mockCharacter, 0)).toEqual(information.filterData(mockCharacter, 0));
        });
    });
    describe('information.findData', () => {
        it('information.findData debería ser una funcion', () => {
            expect(typeof information.sortData).toBe('function');
        });

        it('Debería retornar los personajes que coincidean con el nombre buscado', () => {
            expect(information.findData("Ana", mockCharacter)).toEqual(information.findData("Ana", mockCharacter));
        });

    });
});