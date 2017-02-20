String.prototype.hasVowels = function () {
    return /[AEIOUaeiou]/g.test(this);
};

String.prototype.toUpper = function () {
    return this.replace(/[a-z]/g, function (char) {
        return String.fromCharCode(char.charCodeAt() - 32);
    });
};

String.prototype.toLower = function () {
    return this.replace(/[A-Z]/g, function (char) {
        return String.fromCharCode(char.charCodeAt() + 32);
    });
};

String.prototype.ucFirst = function () {
    return this.substring(0, 1).toUpper() + this.substring(1);
};

String.prototype.isQuestion = function () {
    return /\?$/g.test(this);
};

String.prototype.words = function () {
    return this.split(/\W+/g);
};

String.prototype.wordCount = function () {
    return this.words().length;
};

String.prototype.toCurrency = function () {
    var exp = new RegExp('(\\d)(?=(\\d{3})+\\.)', 'g');
    return parseFloat(this).toFixed(2).replace(exp, '$1,');
};

String.prototype.fromCurrency = function () {
    return this.replace(',', '');
};

String.prototype.inverseCase = function () {
    var i = 0,
        inversedChar = '';

    while (i <= this.length) {
        var char = this.charAt(i);

        inversedChar += char === char.toUpper() ? char.toLower() : char.toUpper();

        i++;
    }
    return inversedChar;
};

String.prototype.alternatingCase = function () {
    var alternatingChars = '';

    for (var i = 0; i < this.length; i++) {
        alternatingChars += i % 2 === 0 ? this[i].toLower() : this[i].toUpper();
    }

    return alternatingChars;
};

String.prototype.getMiddle = function () {
    if (this.length % 2 === 0) {
        return this.charAt(this.length / 2 - 1) + this.charAt(this.length / 2);
    } else {
        return this.charAt(Math.floor(this.length / 2));
    }
};

String.prototype.numberWords = function () {
    var str = '';

    var numWords = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    for (var i = 0; i < this.length; i++) {
        var word = numWords[this[i]] || '';
        str += (word + ((i + 1) !== this.length ? ' ' : ''));
    }
    return str;
};

String.prototype.isDigit = function () {
    return /\b\d\b/.test(this);
};

String.prototype.doubleCheck = function () {
    return /(.)\1/g.test(this);
};