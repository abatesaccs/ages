import {Age} from './../src/ages.js';

describe ('Ages', () => {
    beforeEach(() => {
        var myAge = new Age(1);
      });
    test('should check that mercury returns the correct age', () => {
        var myAge = new Age(1);
        expect(myAge.toMercury(1)).toEqual(.24);
    });
    test('should check that venus returns the correct age', () => {
        var myAge = new Age(1);
        expect(myAge.toVenus(1)).toEqual(.62);
    });
    test('should check that mars returns the correct age', () => {
        var myAge = new Age(1);
        expect(myAge.toMars(1)).toEqual(1.88);
    });
    test('should check that jupiter returns the correct age', () => {
        var myAge = new Age(1);
        expect(myAge.toJupiter(1)).toEqual(11.86);
    });
    test('should check that life expectancy is correct', () => {
        var myAge = new Age(1);
        expect(myAge.lifeExpectancy(1)).toEqual(.24);
    });
});