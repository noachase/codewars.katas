function fizbuz (num) {
    for (let i = 1; i <=num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizbuz');
        } else if (i % 3 === 0) {
            console.log('fiz');
        } else if (i % 5 === 0) {
            console.log('buz');
        } else console.log(i);
    }
}

fizbuz(100);

