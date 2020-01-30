function twoSort(s) {
    s.sort();
      let item = s[0];
      let a = Array.from(item).map(i => (i + '***')).join('');
      let b = a.slice(0, (a.length-3));
      return b;
}

let s = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]
twoSort(s)

// function twoSort(s) {
//     return s.sort()[0].split('').join('***');
// }