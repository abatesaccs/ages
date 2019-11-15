import {Age} from './../src/ages.js';

describe ('Ages', () => {
    beforeEach(() => {
        var myAge = new Age(1);
      });
    test('should check that mercury returns the correct age', () => {
        var myAge = new Age(1);
        expect(myAge.toMercury(1)).toEqual(1/.24);
    });
    test('should check that venus returns the correct age', () => {
        var myAge = new Age(1);
        expect(myAge.toVenus(1)).toEqual(1/.62);
    });
    test('should check that mars returns the correct age', () => {
        var myAge = new Age(1);
        expect(myAge.toMars(1)).toEqual(1/1.88);
    });
    test('should check that jupiter returns the correct age', () => {
        var myAge = new Age(1);
        expect(myAge.toJupiter(1)).toEqual(1/11.86);
    });
    test('should check that life expectancy is correct', () => {
        var myAge = new Age(1);
        expect(myAge.lifeExpectancy(myAge.toMercury(),"mercury")).toEqual(((71 / .24) - myAge.toMercury()));
    });
});