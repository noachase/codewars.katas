function bonusTime(salary, bonus) {
    const char = '£';
    //bonus == true ? char + salary*10 : salary
    if (bonus === true) {
      return char + salary*10
    } else {
      return char + salary;
    }
  }

// function bonusTime(salary, bonus) {
//   return bonus ? `£${10 * salary}` : `£${salary}`;
// }