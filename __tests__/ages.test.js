import {Age} from './../src/ages.js';

describe ('Ages', () => {
    beforeEach(() => {
        var myAge = new Age(1);
      });
    test('should check that mercury returns the correct age', () => {
        let myAge = new Age(1);
        expect(myAge.toMercury(1)).toEqual(1/.24);
    });
    test('should check that venus returns the correct age', () => {
        let myAge = new Age(1);
        expect(myAge.toVenus(1)).toEqual(1/.62);
    });
    test('should check that mars returns the correct age', () => {
        let myAge = new Age(1);
        expect(myAge.toMars(1)).toEqual(1/1.88);
    });
    test('should check that jupiter returns the correct age', () => {
        let myAge = new Age(1);
        expect(myAge.toJupiter(1)).toEqual(1/11.86);
    });
});

describe ('life expectancy', () => {
    test('should check that mercurys life expectancy is correct', () => {
        let myAge = new Age(1);
        expect(myAge.lifeExpectancy("mercury")).toEqual(((71 / .24) - (1/.24)));
    });
    test('should check that venus life expectancy is correct', () => {
        let myAge = new Age(1);
        expect(myAge.lifeExpectancy("venus")).toEqual(((71 / .62) - (1/.62)));
    });
    test('should check that mars life expectancy is correct', () => {
        let myAge = new Age(1);
        expect(myAge.lifeExpectancy("mars")).toEqual(((71 / 1.88) - (1/1.88)));
    });
    test('should check that jupiters life expectancy is correct', () => {
        let myAge = new Age(1);
        expect(myAge.lifeExpectancy("jupiter")).toEqual(((71 / 11.86) - (1/11.86)));
    });
});

describe ('exceeded life expectancy', () => {
    test('should return years lived past life expectancy', () => {
        let myAge = new Age(72);
        expect(myAge.lifeExpectancy("mercury")).toBeCloseTo(((72 / .24) - (71/.24)), 8);
    });
    test('should return years lived past life expectancy', () => {
        let myAge = new Age(72);
        expect(myAge.lifeExpectancy("venus")).toBeCloseTo(((72 / .62) - (71/.62)), 8);
    });
    test('should return years lived past life expectancy', () => {
        let myAge = new Age(72);
        expect(myAge.lifeExpectancy("mars")).toBeCloseTo(((72 / 1.88) - (71/1.88)), 8);
    });
    test('should return years lived past life expectancy', () => {
        let myAge = new Age(72);
        expect(myAge.lifeExpectancy("jupiter")).toBeCloseTo(((72 / 11.86) - (71/11.86)), 8);
    });
});