
var assert = require('assert');
var Reverse = require('../ejercicio-05.js')

//Unit Test
describe('returnReverseLetters', function(){
  it('should return the correct number of letters from the word or phrase', function(){
    assert.equal(Reverse.returnReverseLetters("SELECT ALL FROM Laboratoria"), "airotarobaL");
    assert.equal(Reverse.returnReverseLetters("SELECT 3 FROM Laboratoria"), "air");
    assert.equal(Reverse.returnReverseLetters("SELECT All FROM I'm the best coder"), "redoc tseb eht m'I");
    assert.equal(Reverse.returnReverseLetters("SELECT 5 FROM I'm the best coder"), "redoc");
  })

  it('should return error if the second word of the string its not a number or the word all', function(){
    assert.equal(Reverse.returnReverseLetters("SELECT A FROM Laboratoria"), "Error");
  })

  it('should accept the words select and all without check case sensitive', function(){
    assert.equal(Reverse.returnReverseLetters("SeLeCt ALL FROM Laboratoria"), "airotarobaL");
    assert.equal(Reverse.returnReverseLetters("select All FROM Laboratoria"), "airotarobaL");
    assert.equal(Reverse.returnReverseLetters("SeLeCt 6 FROM Laboratoria"), "airota");
    assert.equal(Reverse.returnReverseLetters("selecT 5 FROM Laboratoria"), "airot");
    assert.equal(Reverse.returnReverseLetters("SELECT all FROM Laboratoria"), "airotarobaL");
    assert.equal(Reverse.returnReverseLetters("select ALL FROM Laboratoria"), "airotarobaL");
  })

  it("should return error if the param is not a string or is empty", function(){
    assert.equal(Reverse.returnReverseLetters(""), "Error");
    assert.equal(Reverse.returnReverseLetters(["select", "all", "from", "Laboratoria"]), "Error");
  })

  it("should return error if the  the first word is not SELECT", function(){
    assert.equal(Reverse.returnReverseLetters("selec ALL FROM Laboratoria"), "Error");
    assert.equal(Reverse.returnReverseLetters("Trae ALL FROM Laboratoria"), "Error");
  })

  it("should return all the letters of the word or phrase if the second number is greater than the length", function(){
    assert.equal(Reverse.returnReverseLetters("select 15 FROM Error"), "rorrE");
    assert.equal(Reverse.returnReverseLetters("select 100 FROM Laboratoria"), "airotarobaL");
  })

  it("should return an empty string if the last word or phrase is a empty String", function(){
    assert.equal(Reverse.returnReverseLetters("SELECT ALL FROM "), "");
    assert.equal(Reverse.returnReverseLetters("SELECT 5 FROM "), "");
  })

  //Remember, you can suggest us other unit tests. Laboratoria teaching team. :)
})
