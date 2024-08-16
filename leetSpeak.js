const dictionary = {
  "O" : "0",
  "I" : "1",
  "L" : "1",
  "Z" : "2",
  "E" : "3",
  "A" : "4",
  "S" : "5",
  "G" : "6",
  "T" : "7",
  "B" : "8"
};

function leetSpeak(text) {
  //write your code here
let returnedText = [];
let converts = text.toUpperCase().split("");

converts.forEach(convert => {
  returnedText.push(dictionary[convert] || convert);

  });
return returnedText.join("");

}

leetSpeak("hello world!");

module.exports = leetSpeak