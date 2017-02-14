// ex-02: `makeNamesObject`

// Create a function that accepts 3 strings with first + last names as arguments
// The function should return an object with 3 properties:
// The first name will be a property-name and the last name will be the value

// EXAMPLE:
// makeNamesObject("George Washington", "John Adams", "Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }


var makeNamesObject = function(string1, string2, string3){
  //var newArr = []
  var objOfNames = {}

  var firstNameArray = string1.split(' ')
  var secondNameArray = string2.split(' ')
  var thirdNameArray = string3.split(' ')

  //for (var i = 0; i < newArr.length; i++){
    objOfNames = {
    [firstNameArray[0]]: firstNameArray[1],
    [secondNameArray[0]]: secondNameArray[1],
    [thirdNameArray[0]]: thirdNameArray[1],
  }
//}
  return objOfNames
}






//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
