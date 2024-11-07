class Box <T>{
    private boxes  = []
    constructor(){

    }
    add(element: T) : void{
        this.boxes.push(element);
    }

    remove(): void{
        this.boxes.pop();
    }

    get count(): number {
        return this.boxes.length
    }
}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);

let box1 = new Box<String>();
box1.add("Pesho");
box1.add("Gosho");
console.log(box1.count);
box1.remove();
console.log(box1.count);