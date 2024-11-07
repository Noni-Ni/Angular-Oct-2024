class Box {
    boxes = [];
    constructor() {
    }
    add(element) {
        this.boxes.push(element);
    }
    remove() {
        this.boxes.pop();
    }
    get count() {
        return this.boxes.length;
    }
}
let box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
let box1 = new Box();
box1.add("Pesho");
box1.add("Gosho");
console.log(box1.count);
box1.remove();
console.log(box1.count);
