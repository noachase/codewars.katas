function getMiddle(str) {
 let strLength = str.length,
     middle = Math.floor(strLength/2);
 if (strLength % 2 === 0) {
   return str[middle-1] + str[middle]
 } else {
   return str[middle]
 }
}