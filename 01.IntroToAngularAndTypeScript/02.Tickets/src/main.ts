class Ticket {
    destination: string; 
    price: number;
    status: string;

    constructor(destination : string, price: number, status :string){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function solve(data : string[], criteria : string): Ticket[]{

    let unsortedArr: Ticket[] = [];

    for (let index = 0; index < data.length; index++) {
        
        let [destination, price, status] = data[index].split('|');
        let myTicket = new Ticket(destination,Number(price),status);
        unsortedArr.push(myTicket);
        
    }

    let sortedArr: Ticket[] = [];

    if( criteria === 'destination'){
        sortedArr = unsortedArr.sort((a, b) => a.destination.localeCompare (b.destination))
    }else if( criteria === 'status'){
        sortedArr = unsortedArr.sort((a, b) => a.status.localeCompare (b.status))
    }else if( criteria === 'price'){
        sortedArr = unsortedArr.sort((a, b) => a.price - b.price )
    }
    
    return sortedArr;
}

/*console.log(solve([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ],
    'destination'));*/
console.log(solve([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ],
    'status'))
