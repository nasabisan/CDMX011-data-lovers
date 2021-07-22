import information from '../src/data.js';


describe('information', () => {
    it('Deberài ser un Objeto', () => {
        expect(typeof information).toBe('object');
    });

    it('information.getObject deberìa ser una funcion', () => {
        expect(typeof information.getObject).toBe('function');
    });



    describe('information.sortData', () => {
        it('information.sortData debería ser una funcion', () => {
            expect(typeof information.sortData).toBe('function');
        });

        it('Debería retornar [{"name":"Ana"},{"name":"Bertha"},{"name":"Carla"}] para [{"name":"Bertha",{"name":"Ana"},{"name":"Carla"}]', () => {
            expect(information.sortData([{ name: "Bertha" }, { name: "Ana" }, { name: "Carla" }], 1)).toBe([{ "name": "Ana" }, { "name": "Bertha" }, { "name": "Carla" }]);
        });
    });
});