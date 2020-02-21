const longestPal = (s) => {
    if(s === s.split('').reverse().join('')) return s;
    let charArray = [], 
	countArray = [];

    let currentWord = s[0];
    let count = 1;
    let sLength = s.length+1;
    
    for(let i = 1; i < sLength; i++) {
        if(s[i] === s[i-1]) {
            count++;
            currentWord += s[i];
        } else { 
            countArray.push(count);
            charArray.push(currentWord);
            
            currentWord = s[i];
            count = 1;
        }
    }

    let head = 0;
    let tail = 0;
    let maxWord = '';
    let charLength = charArray.length;
    
    for(let j = 0; j < charLength; j++){
        currentWord = charArray[j];
        tail = head + countArray[j] - 1;

        let steps = sLength - countArray[j]; 

        for(let k = 1; k < steps; k++){
            if(s[head - k] === s[tail + k]) {
                currentWord = s[head-k] + currentWord + s[tail+k];
            } else {
                maxWord = maxWord.length < currentWord.length ? currentWord : maxWord;
                head = tail + 1;
                break;
            }
        }
    }
    return console.log(maxWord);
}

longestPal('абвгоогвфф')