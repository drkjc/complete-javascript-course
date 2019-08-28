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

// var bill1, bill2, bill3, tips, totals 

// bill1 = 124;
// bill2 = 48; 
// bill3 = 268;

// tips = [];
// totals = [];

// function tipCalculator(bill) {
//   var tip;
//   if (bill < 50) {
//     tip = bill * 0.2; 
//   } else if (bill >= 50 && bill < 200) {
//     tip = bill * 0.15;
//   } else if (bill >= 200) {
//     tip = bill * 0.1;
//   } else {
//     "You eat too much."
//   }
//   tips.push(tip);
//   totals.push(tip + bill);
// }

// console.log(tipCalculator(bill1));
// console.log(tipCalculator(bill2));
// console.log(tipCalculator(bill3));

// console.log(tips);
// console.log(totals);

// for (var i = 0; i <= 15; i++) {
//   if (i % 3 === 0 && i % 5 == 0) { 
//     console.log('fizzbuzz');
//   } else if (i % 5 === 0) {
//     console.log('buzz');
//   } else if (i % 3 === 0) {
//     console.log('fizz');
//   } else {
//     console.log(i);
//   }
// }

var john = {
  tips: [],
  totals: [],
  bills: [124, 48, 268, 180, 42],
  calculateTip: function(){
    var percentage;
    for(i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 50) {
        percentage = this.bills[i] * .2;
      } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
        percentage = this.bills[i] * .15;
      } else {
        percentage = this.bills[i] * .1;
      }
      this.tips.push(percentage);
      this.totals.push(percentage + this.bills[i]);
    }
  }
}

john.calculateTip();
console.log(john.tips);
console.log(john.totals);

function average(tips) {
  var sum = 0;
  for (i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length;
}

console.log(average(john.tips));