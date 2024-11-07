abstract class Melon {
    public weight : number;
    public melonSort : string;

    constructor( weight : number, melonSort : string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
    private elementIndex : number;
    private element : string = 'Water'

    

    constructor(weight : number, melonSort : string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length
    }

    get index(): number { return this.elementIndex; }

    toString() {
        return `Element: ${this.element}\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`
    }
}

class Firemelon extends Melon {
    private elementIndex : number;
    private element : string = 'Fire'
    constructor(weight : number, melonSort : string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length
    }

    get index(): number { return this.elementIndex; }

    toString() {
        return `Element: ${this.element}\n
        Sort: ${this.melonSort}\
        Element Index: ${this.elementIndex}`
    }
}

class Earthmelon extends Melon {
    private elementIndex : number;
    private element : string = 'Earth'
    constructor(weight : number, melonSort : string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length
    }

    get index(): number { return this.elementIndex; }

    toString() {
        return `Element: ${this.element}\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`
    }
}

class Airmelon extends Melon {
    private elementIndex : number;
    private element : string = 'Air'
    constructor(weight : number, melonSort : string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length
    }

    get index(): number { return this.elementIndex; }

    toString() {
        return `Element: ${this.element}\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`
    }
}

class Melolemonmelon extends Watermelon {
    private elements : string[] = [ 'Fire', 'Earth', 'Air', 'Water' ]
    private currEl : string = 'Water';
    constructor(weight : number, melonSort : string) {
        super(weight, melonSort);
        
    }

    morph(){
        let currTask = this.elements.shift();
        this.elements.push(currTask);
        this.currEl = currTask;
    }
    toString() {
        return `Element: ${this.currEl}\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.weight * this.melonSort.length}`
    }
}

//let test : Melon = new Melon(100, "Test");
//Throws error

//let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
//console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100

let myMelon = new Melolemonmelon(100, 'sss')
console.log(myMelon.toString());
myMelon.morph();
console.log(myMelon.toString());
