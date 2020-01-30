function generateRange(min, max, step){
    let sequence = [];
    for (let i = min; i <= max; i+=step){
        sequence.push(i)
    }
    return sequence
  }
generateRange(2, 10, 2)