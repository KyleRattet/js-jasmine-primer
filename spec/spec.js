var code = require('../main.js');


describe("Hello World", function() {

  it("says 'hello, world!' when ran", function() {
    expect(code.outputHelloWorld("world")).toEqual("Hello, world!");
  });
});