import capitalize from './modules/capitalize';
import reverseString from './modules/reverseString';
import caesarCipher from './modules/caesarCipher';
import analyzeArray from './modules/analyzeArray';
import { 
    sum, 
    subtract, 
    multiply, 
    divide 
} from './modules/calculator';

test('capitalize: first character given one letter', () => {
    expect(capitalize('a')).toBe('A');
});

test('capitalize: first character given a word', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('capitalize: first character given a sentence', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});


test('reverse string: returns the same character given one letter', () => {
    expect(reverseString('a')).toBe('a');
});

test('reverse string: returns a reversed string', () => {
    expect(reverseString('abcde')).toBe('edcba');
});


test('calculator: adds 1 + 2', () => {
    expect(sum(1, 2)).toBe(3);
});
  
test('calculator: subtracts 50 - 20', () => {
    expect(subtract(50, 20)).toBe(30);
});
  
test('calculator: multiplies 5 * 2', () => {
    expect(multiply(5, 2)).toBe(10);
});
  
test('calculator: divides 50 / 2', () => {
    expect(divide(50, 2)).toBe(25);
});


test('caesar cipher: returns a char shifted by 1', () => {
    expect(caesarCipher('b', 1)).toBe('c');
});

test('caesar cipher: wraps from z to a', () => {
    expect(caesarCipher('ZXV', 2)).toBe('BZX');
});

test('caesar cipher: keeps the same letter case', () => {
    expect(caesarCipher('Letters of the Alphabet', 7)).toBe('Slaalyz vm aol Hswohila');
});

test('caesar cipher: the same but with a larger shift value', () => {
    expect(caesarCipher('Letters of the Alphabet', 15)).toBe('Atiitgh du iwt Paewpqti');
});

test(`caesar cipher: doesn't change punctuation`, () => {
    expect(caesarCipher('Whatupp!!%%!@#*%*"', 4)).toBe('Alexytt!!%%!@#*%*"');
});


test('analyze array: returns an object with min, max, length, avg values of the array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({ min: 1, max: 8, length: 6, average: 4 });
});