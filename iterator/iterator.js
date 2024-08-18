"use strict";
const iterator = () => {
    const myFilter = (arr, callbackFn) => {
        arr.map(callbackFn);
        console.log(arr);
    };
    const arr = [1, 2, 3, 4, 5, 6];
    const checkEven = (a) => a % 2 === 0;
    myFilter(arr, checkEven);
    arr.filter(checkEven);
};
iterator();
