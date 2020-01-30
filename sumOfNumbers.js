function getSum(a, b){
    if (a > b) {
      let c = a,
          d = b;
    return ((c + d) * ((c - d) + 1)) / 2
    } else {
  
    return ((a + b) * ((b - a) + 1)) / 2
   
    }
  }
getSum(0, 2) 