function capitalize () {
    let str = "How can mirrors be real if our eyes aren't real";
    let splitStr = str.toLowerCase().split(' ');

    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase(i) + splitStr[i].substring(1);
    }
    return console.log(splitStr.join(' ')); 
}

capitalize();