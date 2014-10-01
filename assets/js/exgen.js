var ExGen = function(name, email) {
    this.name = name;
    this.email = email;
    this.random = new Random(this.name + this.email);
};
ExGen.prototype.genStructure = function() {
    var structure = [];

    // title
    var title = this.random.nextSentence(true, 3, 5);
    structure.push({'type': 'h1', children: [title]});

    // headings + parts
    var nHeadings = this.random.next(3, 4);
    for(var i = 0; i < nHeadings; i++) {
        var heading = this.random.nextSentence(true, 3, 5);
        structure.push({'type': 'h2', children: [heading]});
    }

    return structure;
};
ExGen.prototype.genSentenceWithInlineElements = function(noPunc, min, max) {
    var sentence = this.random.nextSentence(noPunc, min, max);
    var words = sentence.split(' ');
    var
};


function Random(seed) {
    this.seed = hash(seed);
}
Random.prototype.next = function(min, max) {
    min = min || 0;
    max = max || 1;
    this.seed = (this.seed * 9301 + 49297) % 233280;
    var rnd = this.seed / 233280;
    return min + rnd * (max - min);
};
Random.prototype.nextWord = function() {
    // consonants and vowels
    var cons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'z'];
    var vows = ['a', 'e', 'i', 'o', 'u', 'oo', 'ui', 'ee'];

    var n = 1 + Math.floor(this.next() * 4);
    var letters = [];
    for(var i = 0; i < n; i++) {
        letters.push(cons[Math.floor(this.next() * cons.length)]);
        letters.push(vows[Math.floor(this.next() * vows.length)]);
    }
    return letters.join('');
};
Random.prototype.nextSentence = function(noPunc, min, max) {
    min = min || 5;
    max = max || 10;
    var n = Math.floor(this.next() * (max - min + 1)) + min;
    var words = [];
    for(var i = 0; i < n; i++) {
        words.push(this.nextWord());
    }
    var sentence = words.join(' ');
    var punctuation = this.next() < 0.9 ? '.' : '?';
    return sentence[0].toUpperCase() + sentence.slice(1) + (noPunc ? '' : punctuation);
};
Random.prototype.nextParagraph = function(min, max) {
    min = min || 5;
    max = max || 10;
    var n = Math.floor(this.next() * (max - min + 1)) + min;
    var sentences = [];
    for(var i = 0; i < n; i++) {
        sentences.push(this.nextSentence(false));
    }
    return sentences.join(' ');
};

var hash = function(str) {
    var hash = 5381;
    for(var i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i);
    }
    return hash;
};
