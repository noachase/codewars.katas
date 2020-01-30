function generatePyramid(num) {
    let steirs = '';
  
    for (let i = 0; i < num; i++) {
      let str = (steirs += i);
      let str2 = str.replace(/[0-9]/g, " ");
      console.log(str2 + 'I');
    }
  }
generatePyramid(7);

// const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");
