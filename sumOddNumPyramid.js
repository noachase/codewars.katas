function rowSumOddNumbers(n) {
    let startNum = (n * n) - (n - 1);
    let total = 0,
        index = 0;
        
    while (index < n) {
       if (startNum % 2 !== 0) {
            total += startNum;
            index++;
          }
          startNum++;
        }
    return console.log(total); 
}

rowSumOddNumbers(n)

// let rowSumOddNumbers = n => n ** 3