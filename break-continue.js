function countLettersAndDigits(input) {
    let digits = input.replace(/\D+/g,'').length,
        letters = input.replace(/a-z/,'').length; 
    console.log(digits, letters)
    return true;
}
countLettersAndDigits('asdasd23123')