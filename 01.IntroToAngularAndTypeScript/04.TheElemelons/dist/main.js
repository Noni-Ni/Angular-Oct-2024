class Melon {
    weight;
    melonSort;
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}
class Watermelon extends Melon {
    elementIndex;
    element = 'Water';
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }
    get index() { return this.elementIndex; }
    toString() {
        return `Element: ${this.element}\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`;
    }
}
class Firemelon extends Melon {
    elementIndex;
    element = 'Fire';
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }
    get index() { return this.elementIndex; }
    toString() {
        return `Element: ${this.element}\n
        Sort: ${this.melonSort}\
        Element Index: ${this.elementIndex}`;
    }
}
class Earthmelon extends Melon {
    elementIndex;
    element = 'Earth';
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }
    get index() { return this.elementIndex; }
    toString() {
        return `Element: ${this.element}\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`;
    }
}
class Airmelon extends Melon {
    elementIndex;
    element = 'Air';
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }
    get index() { return this.elementIndex; }
    toString() {
        return `Element: ${this.element}\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`;
    }
}
class Melolemonmelon extends Watermelon {
    elements = ['Fire', 'Earth', 'Air', 'Water'];
    currEl = 'Water';
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    morph() {
        let currTask = this.elements.shift();
        this.elements.push(currTask);
        this.currEl = currTask;
    }
    toString() {
        return `Element: ${this.currEl}\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.weight * this.melonSort.length}`;
    }
}
//let test : Melon = new Melon(100, "Test");
//Throws error
//let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
//console.log(watermelon.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100
let myMelon = new Melolemonmelon(100, 'sss');
console.log(myMelon.toString());
myMelon.morph();
console.log(myMelon.toString());
