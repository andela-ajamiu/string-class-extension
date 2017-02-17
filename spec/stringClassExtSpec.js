var expect = chai.expect;

describe('hasVowels method', function () {
  it('Should return a boolean if a given string has a vowel', function () {
    expect('aeiou'.hasVowels()).to.not.be.null;
    expect(typeof 'aeiou'.hasVowels()).to.be.boolean;
    expect('aeiou'.hasVowels()).to.be.true;
    expect('rlhz'.hasVowels()).to.be.false;
  });
});