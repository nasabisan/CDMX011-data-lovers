import information from './src/data.js';

describe('information', () => {
            it('debería ser un objeto', () => {
                expect(typeof information).toBe('object');
            });

            describe('information.getObject', () => {
                it('debería ser una función', () => {
                    expect(typeof information.getObject).toBe('function');
                });


                /*it('debería retornar true para "4083952015263"', () => {
                    expect(validator.isValid('4083952015263')).toBe(true);
                });

                it('debería retornar true para "79927398713"', () => {
                    expect(validator.isValid('79927398713')).toBe(true);
                });

                it('debería retornar false para "1234567890"', () => {
                    expect(validator.isValid('1234567890')).toBe(false);
                });*/
            });

            describe('information.sortData', () => {
                    it('debería ser una función', () => {
                        expect(typeof information.sortData).toBe('function');
                    });

                    it('Debería retornar {[Ana], [Bertha], [Carla], [Daniela]} para {[Bertha],[Daniela]},[Ana], [Carla]}', () => {
                            expect(information.sortData([{ "name": "Ana" }, { "name": "Ana" }]).toBe();
                            });

                        /* it('Debería retornar "1" para "1"', () => {
                             expect(validator.maskify('1')).toBe('1');
                         });

                         it('Debería retornar "######orld" para "helloworld"', () => {
                             expect(validator.maskify('helloworld')).toBe('######orld');
                         });*/
                    });
            });