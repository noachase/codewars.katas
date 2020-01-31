function pickIt(arr){
    var odd=[],even=[];
    for (let i = 0; i < arr.length; i++) {
        let evenN = arr[i] % 2 === 0;
            evenN ? even.push(arr[i]) : odd.push(arr[i]);
        }
    
    return console.log([odd,even]);
}

pickIt([1,2,2,2,2,2]);