exports.outputHelloWorld = function () {
  return "Hello, world!";
};

//example
exports.calculate = function (amount) {
  if (amount <= 10) {
    return amount * .1;
  } else if (amount <= 20) {
    return (amount - 10) *.07 + 1;
  } else if (amount <=30) {
    return (amount - 20)*.05 + 1 + .70;
  } else {
    return (amount - 30) *.03 + 1 + .7 + .5;
  }
};

//first activity
exports.leapYear = function (year) {
  if (year%4 === 0) {
    if (year%100 === 0 && year%400 !== 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

//second activity
exports.changeToUpper = function (arr) {
 var arrUpper = [];

 for (i=0;i<arr.length;i++) {
    arr[i]=arr[i].toUpperCase();
    arrUpper.push(arr[i]);
    }
  return arrUpper;
};



