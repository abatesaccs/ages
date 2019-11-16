import {Age} from './../src/ages.js';

describe ('Ages', () => {
    let myAge;
    let myOldAge;
    beforeEach(() => {
        myAge = new Age(1);
        myOldAge = new Age(75);
      });
    test('should check that mercury returns the correct age', () => {
        expect(myAge.toMercury(1)).toEqual(1/.24);
    });
    test('should check that venus returns the correct age', () => {
        expect(myAge.toVenus(1)).toEqual(1/.62);
    });
    test('should check that mars returns the correct age', () => {
        expect(myAge.toMars(1)).toEqual(1/1.88);
    });
    test('should check that jupiter returns the correct age', () => {
        expect(myAge.toJupiter(1)).toEqual(1/11.86);
    });
});

describe ('life expectancy', () => {
    let myAge;
    beforeEach(() => {
        myAge = new Age(1);
      });
    test('should check that mercurys life expectancy is correct', () => {
        expect(myAge.lifeExpectancy("mercury")).toEqual(((71 / .24) - (1/.24)).toFixed(2));
    });
    test('should check that venus life expectancy is correct', () => {
        expect(myAge.lifeExpectancy("venus")).toEqual(((71 / .62) - (1/.62)).toFixed(2));
    });
    test('should check that mars life expectancy is correct', () => {
        expect(myAge.lifeExpectancy("mars")).toEqual(((71 / 1.88) - (1/1.88)).toFixed(2));
    });
    test('should check that jupiters life expectancy is correct', () => {
        expect(myAge.lifeExpectancy("jupiter")).toEqual(((71 / 11.86) - (1/11.86)).toFixed(2));
    });
});

describe ('exceeded life expectancy', () => {
    let myOldAge;
    beforeEach(() => {
        myOldAge = new Age(75);
      });
    test('should return years lived past life expectancy', () => {
        expect(myOldAge.lifeExpectancy("mercury")).toBe(((75 / .24) - (71/.24)).toFixed(2));
    });
    test('should return years lived past life expectancy', () => {
        expect(myOldAge.lifeExpectancy("venus")).toBe(((75 / .62) - (71/.62)).toFixed(2));
    });
    test('should return years lived past life expectancy', () => {
        expect(myOldAge.lifeExpectancy("mars")).toBe(((75 / 1.88) - (71/1.88)).toFixed(2));
    });
    test('should return years lived past life expectancy', () => {
        expect(myOldAge.lifeExpectancy("jupiter")).toBe(((75 / 11.86) - (71/11.86)).toFixed(2));
    });
});

describe ('keith richards in dog years on jupiter', () => {
    test('should return years lived times seven all divided by 11.86', () => {
        let age = new Age(75);
        expect(age.keithRichards()).toBe(((75*7)/11.86));
    });
});