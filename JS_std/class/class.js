
function Super(pa,ra) {
    this.q = pa;
    this.w = ra;
}

var superman = new Super('super','pawer');
var supergirl = new Super('suuper','paawer');

console.log(superman);
console.log(supergirl);

// es6

class Hero {
    constructor(ha,va){
        this.q = ha;
        this.w = va;
    }
}

var ironman = new Hero('bim','fly');
var captin = new Hero('bang','pae');

var Heroes = {
    ironman,
    captin
}

console.log(Heroes);