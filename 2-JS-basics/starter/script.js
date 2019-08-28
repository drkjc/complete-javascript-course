// var firstName = 'John'; 

// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// var markMass, markHeight, johnMass, johnHeight, markBmi, johnBmi, highestBmi

// markMass = 50
// markHeight = 4
// johnMass = 46
// johnHeight = 6 

// markBmi = markMass / (Math.pow(markHeight, 2));

// johnBmi = johnMass / (Math.pow(johnHeight, 2));

// console.log(markBmi, johnBmi);
// highestBmi = markBmi >= johnBmi 

// console.log("Is Mark's BMI higher than John's? " + highestBmi);

var bill1, bill2, bill3, tips, totals 

bill1 = 124;
bill2 = 48; 
bill3 = 268;

tips = [];
totals = [];

function tipCalculator(bill) {
  var tip;
  if (bill < 50) {
    tip = bill * 0.2; 
  } else if (bill >= 50 && bill < 200) {
    tip = bill * 0.15;
  } else if (bill >= 200) {
    tip = bill * 0.1;
  } else {
    "You eat too much."
  }
  tips.push(tip);
  totals.push(tip + bill);
}

console.log(tipCalculator(bill1));
console.log(tipCalculator(bill2));
console.log(tipCalculator(bill3));

console.log(tips);
console.log(totals);