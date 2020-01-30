function sumOfDifferences(arr) {
    // let reversedArr = arr.sort( (a, b) => a - b).reverse();
    // let sum = (reversedArr[0] - reversedArr[1]) + (reversedArr[1] - reversedArr[2]);
    // console.log(`arrayReversed: ${reversedArr}`);
    // console.log(`arrayReversed: ${sum}`);
    return console.log(arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0); 
}

sumOfDifferences([8, 3, 10]);