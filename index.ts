const concatenateValues = (a: string, b: string): string => {
    return a + b;
}

interface Laptop {
    brand: string;
    cores: number;
    monitor?: string;
    greet(message: string): string;
}

const laptop: Laptop = {
    brand: 'what',
    cores: 2,
    greet(message): string {
        console.log(message);
        return "yea that works";
    }
};

type ID = number | string | boolean | number[];

const printId = (id: ID): string => {
    return `The id is ${id}`;
}

interface Person {
    id: number;
    name: string;
    hobby?: string;
}

interface Job {
    role: string;
    salary: number;
}

type Employee = Person & Job;

const bob: Employee = {
    id: 1,
    name: "Bob",
    role: "System Admin",
    salary: 60_000,
};

interface Company {
    name: string;
};

const telkom: Company = {
    name: "PT Telekomunikasi Indonesia",
};

const introduceEmployee = (employee: Employee): string => {
    let greeting: string = `Hi, my name is ${employee.name}. I'm a ${employee.role} in ${telkom.name}.`;

    if (employee.hobby) {
        greeting += ` My hobby is ${employee.hobby}`;
    }
    
    return greeting;
};

enum Status {
    PAID = "paid",
    DISABLED = "disabled",
    ENABLED = "enabled",
    COMING_SOON = "coming_soon"
}

const printStatus = (status: Status): void => {
    const statusMessages = {
        [Status.PAID]: Status.PAID,
        [Status.DISABLED]: Status.DISABLED,
        [Status.ENABLED]: Status.ENABLED,
        [Status.COMING_SOON]: Status.COMING_SOON,
    }

    const message = statusMessages[status];
    if (message) console.log(message);
}

class StorageContainer<T> {
    private contents: T[]

    constructor() {
        this.contents = [];
    }

    setItem(item: T | T[]): void {
        if (Array.isArray(item)) {
            this.contents.push(...item);
        } else {
            this.contents.push(item);
        }
    }

    getItem(index: number): T | undefined {
        return this.contents[index];
    }
}

console.log(concatenateValues("test", "tong"));
console.log(laptop.brand);
console.log(laptop.greet("sup bro"));
console.log(printId(true));
console.log(bob);
console.log(introduceEmployee({
    id: 3,
    name: "Connor",
    role: "Software Engineer",
    salary: 200_000,
    hobby: "Fishing",
}));
printStatus(Status.ENABLED);

const usernames = new StorageContainer<string>();
usernames.setItem("What you want");
console.log(usernames.getItem(0));

const arr = [1, 2, 3, 4, 2, 3, 21, 4];

const checkEven = (a: number): boolean => a % 2 === 0;

const arr2 = arr.filter(checkEven);

console.log("Filter result:");
console.log(arr2);

const timesTwo = (a: number): number => a * 2;

const arr3 = arr2.map(timesTwo);

console.log("Map result:");
console.log(arr3);

const calculateTotal = (a: number, b: number, index: number, totalArr: number[]): number => {
    console.log("Result: " + (a + b));
    console.log("Index: " + index);
    console.log("TotalArr: " + totalArr);
    return a + b;
};

console.log("Reduce result:");
const arr4 = arr3.reduce(calculateTotal);

console.log(arr4);

const ids = new StorageContainer<number>();
ids.setItem([
    1, 2, 3, 4
]);

console.log(ids.getItem(1));