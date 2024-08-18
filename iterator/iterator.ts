const iterator = () => {
    const myFilter = (arr: number[], callbackFn: (a: number) => boolean) => {
        arr.map(callbackFn);

        console.log(arr);
    }

    const arr: number[] = [1, 2, 3, 4, 5, 6];
    
    const checkEven = (a: number): boolean => a % 2 === 0;

    myFilter(arr, checkEven);

    arr.filter(checkEven);
}

iterator();

