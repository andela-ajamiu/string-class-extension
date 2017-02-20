var expect = chai.expect;

describe('hasVowels method', function () {

  it('Should return a boolean if a given string has a vowel', function () {
    expect('aeiou'.hasVowels()).to.not.be.null;
    expect(typeof 'aeiou'.hasVowels()).to.be.boolean;
    expect('aeiou'.hasVowels()).to.be.true;
    expect('rlhz'.hasVowels()).to.be.false;
  });

});


describe('toUpper method', function () {

  it('Should capitalize all characters in a string', function () {
    expect('emjay'.toUpper()).not.to.be.null;
    expect(typeof 'emjay'.toUpper()).to.be.string;
    expect('emjay'.toUpper()).to.equal.EMJAY;
  });

});

describe('toLower method', function () {

  it('Should return the lowercase of all characters in a string', function () {
    expect('FORTUNE'.toLower()).not.toBe(null);
    expect(typeof 'FORTUNE'.toLower()).toBe('string');
    expect('FORTUNE'.toLower()).toEqual('fortune');
  });

});

describe('ucFirst method', function () {

  it('Should return the first character of a string capitalized', function () {
    expect('fortune'.ucFirst()).not.to.be.null;
    expect(typeof 'fortune'.ucFirst()).toBe('string');
    expect('fortune'.ucFirst()).toEqual('Fortune');
  });

});


describe('isQuestion method', function () {

  it('Should return a boolean if a string is a question or not', function () {
    expect('how are you?'.isQuestion()).not.toBe(null);
    expect(typeof 'how are you?'.isQuestion()).toBe('boolean');
    expect('how are you?'.isQuestion()).toEqual(true);
    expect('how are you'.isQuestion()).toEqual(false);
    expect('?how are you'.isQuestion()).toEqual(false);
  });

});


describe('words method', function () {

  it('Should return an array of words from a given string', function () {
    expect('call me'.words()).not.toBe(null);
    expect(Array.isArray('call me'.words())).toBe(true);
    expect('call me'.words()).toEqual(['call', 'me']);
  });

});


describe('wordCount method', function () {

  it('Should return the number of words in a string', function () {
    expect('hello world'.wordCount()).not.toBe(null);
    expect(typeof 'hello world'.wordCount()).toBe('number');
    expect('hello world'.wordCount()).toEqual(2);
    expect('hello people people'.wordCount()).toEqual(3);
  });

});


describe('toCurrency method', function () {

  it('Should return a currency representation of a string', function () {
    expect('100000.83'.toCurrency()).not.toBe(null);
    expect(typeof '100000.83'.toCurrency()).toBe('string');
    expect('100000.83'.toCurrency()).toEqual('100,000.83');
    expect('10000'.toCurrency()).toEqual('10,000.00');
    expect('10000'.toCurrency()).not.toEqual('10,000');
  });

});


describe('fromCurrency method', function () {

  it('Should return a number representation of a string', function () {
    expect('100,000.83'.fromCurrency()).not.toBe(null);
    expect(typeof '100,000.83'.fromCurrency()).toBe('string');
    expect('100,000.83'.fromCurrency()).toEqual('100000.83');
    expect('10,000'.fromCurrency()).toEqual('10000');
  });

});


describe('inverseCase method', function () {

  it('Should return an inverse case of each letter in a string', function () {
    expect('FoRtunE'.inverseCase()).not.toBe(null);
    expect(typeof 'FoRtunE'.inverseCase()).toBe('string');
    expect('FoRtunE'.inverseCase()).toEqual('fOrTUNe');
  });

});


describe('alternatingCase method', function () {

  it('Should return alternating cases of each character in a string', function () {
    expect('fortune'.alternatingCase()).not.toBe(null);
    expect(typeof 'fortune'.alternatingCase()).toBe('string');
    expect('fortune'.alternatingCase()).toEqual('fOrTuNe');
    expect('johnson'.alternatingCase()).toEqual('jOhNsOn');
  });

});


describe('getMiddle method', function () {

  it('Should return the character(s) in the middle of a string', function () {
    expect('alice'.getMiddle()).not.toBe(null);
    expect(typeof 'alice'.getMiddle()).toBe('string');
    expect('alice'.getMiddle()).toEqual('i');
    expect('alicee'.getMiddle()).toEqual('ic');
  });

});


describe('numberWords method', function () {

  it('Should return numbers in words', function () {
    expect('10'.numberWords()).not.toBe(null);
    expect(typeof '10'.numberWords()).toBe('string');
    expect('10'.numberWords()).toEqual('one zero');
    expect('3'.numberWords()).toEqual('three');
    expect('9'.numberWords()).toEqual('nine');
    expect('256'.numberWords()).toEqual('two five six');
  });

});


describe('isDigit method', function () {

  it('Should return a boolean if a given string is a digit', function () {
    expect('1'.isDigit()).not.toBe(null);
    expect(typeof '1'.isDigit()).toBe('boolean');
    expect('1'.isDigit()).toBe(true);
    expect('0'.isDigit()).toBe(true);
    expect('14'.isDigit()).toBe(false);
    expect('141'.isDigit()).toBe(false);
    expect('A'.isDigit()).toBe(false);
  });

});


describe('doubleCheck method', function () {

  it('Should return a boolean if a given string contains double characters', function () {
    expect('hello dear'.doubleCheck()).not.toBe(null);
    expect(typeof 'hello dear'.doubleCheck()).toBe('boolean');
    expect('hello dear'.doubleCheck()).toBe(true);
    expect('helo dear'.doubleCheck()).toBe(false);
    expect('Marine'.doubleCheck()).toBe(false);
  });

  it('Should return a boolean if a given string contains double whitespaces', function () {
    expect('hey  dear'.doubleCheck()).not.toBe(null);
    expect(typeof 'hey  dear'.doubleCheck()).toBe('boolean');
    expect('helo  dear'.doubleCheck()).toBe(true);
    expect('helo dear'.doubleCheck()).toBe(false);
    expect('hey  dear'.doubleCheck()).toBe(true);
  });

});