exports.outputHelloWorld = function () {
  return "Hello, world!";
};

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



