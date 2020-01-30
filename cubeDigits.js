function sumCubes(n){
  let reducer = (acc, item) => acc + item,
      o = [];
  
  for (let i = 1; i <= n; i++){
      o.push([i]);
  }
  
  return o.map(item => (Math.pow(item, 3))).reduce(reducer);
//   console.log(o.map(item => (Math.pow(item, 3))).reduce(reducer));
//   return o.reduce(reducer); 
}

sumCubes(2)

// const sumCubes = n => [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3);