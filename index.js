"use strict";
const concatenateValues = (a, b) => {
    return a + b;
};
const laptop = {
    brand: 'what',
    cores: 2,
    greet(message) {
        console.log(message);
        return "yea that works";
    }
};
const printId = (id) => {
    return `The id is ${id}`;
};
const bob = {
    id: 1,
    name: "Bob",
    role: "System Admin",
    salary: 60000,
};
;
const telkom = {
    name: "PT Telekomunikasi Indonesia",
};
const introduceEmployee = (employee) => {
    let greeting = `Hi, my name is ${employee.name}. I'm a ${employee.role} in ${telkom.name}.`;
    if (employee.hobby) {
        greeting += ` My hobby is ${employee.hobby}`;
    }
    return greeting;
};
var Status;
(function (Status) {
    Status["PAID"] = "paid";
    Status["DISABLED"] = "disabled";
    Status["ENABLED"] = "enabled";
    Status["COMING_SOON"] = "coming_soon";
})(Status || (Status = {}));
const printStatus = (status) => {
    const statusMessages = {
        [Status.PAID]: Status.PAID,
        [Status.DISABLED]: Status.DISABLED,
        [Status.ENABLED]: Status.ENABLED,
        [Status.COMING_SOON]: Status.COMING_SOON,
    };
    const message = statusMessages[status];
    if (message)
        console.log(message);
};
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    setItem(item) {
        if (Array.isArray(item)) {
            this.contents.push(...item);
        }
        else {
            this.contents.push(item);
        }
    }
    getItem(index) {
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
    salary: 200000,
    hobby: "Fishing",
}));
printStatus(Status.ENABLED);
const usernames = new StorageContainer();
usernames.setItem("What you want");
console.log(usernames.getItem(0));
const ids = new StorageContainer();
ids.setItem([
    1, 2, 3, 4
]);
console.log(ids.getItem(1));
