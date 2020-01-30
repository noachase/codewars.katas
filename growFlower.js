function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let height = 0;
    let counter = 0;

    while(height < desiredHeight) {
      counter++
      height = height + upSpeed - downSpeed
    }
    
    return console.log(counter);
    
  }
  growingPlant(20, 5, 100);