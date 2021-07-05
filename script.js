'use strict';

const calcAverageHumanAge = function (ages) {
  const toHuman = ages.map(function (age) {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });

  const adults = toHuman.filter(function (age) {
    return age > 18;
  });

  const sum = adults.reduce(function (acc, cur) {
    return acc + cur;
  });

  console.log(sum / adults.length);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
