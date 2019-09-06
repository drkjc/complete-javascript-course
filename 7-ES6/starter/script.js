// let friends = ['Bob', 'Jane', 'Mark'];

// class Person {
//   constructor(name) {
//     this.name = name
//   }
// }

// Person.prototype.myFriends = function(friends) {
//   return friends.map(el => {
//     return `${this.name} is friends with ${el}.`
//   });
// }

// let john = new Person('john');

// console.log(john.myFriends(friends));

class Park {
  constructor(name, area, age, trees) {
    this.name = name;
    this.area = area; 
    this.age = age;
    this.trees = trees;
  }

  treeDensity() {
    return `${this.name} has a tree density of ${this.trees/this.area} per square km.`
  }

  lottaTrees() {
    if (this.trees > 1000) {
      console.log(`${this.name} has more than 1000 trees.`)
    }
  }
}

class Street {
  constructor(name, yearBuilt, length) {
    this.name = name;
    this.length = length;
    this.yearBuilt = yearBuilt;
  }

  streetSize() {
    let desc = `${this.name}, built in ${this.yearBuilt}, is a`;
    var length = this.length;
    if(length < 0 && length > 1) {
      console.log(desc + ' tiny street.');
    } else if (length >= 1 && length < 2) {
      console.log(desc + ' small street.');
    } else if (length >= 2 && length < 3) {
      console.log(desc + ' normal street.');
    } else if (length >= 3 && length < 4) {
      console.log(desc + ' big street.');
    } else if (length >= 4) {
      console.log(desc + ' huge street');
    } else {
      console.log(desc + ' normal street');
    }
  }


}

let greenPark = new Park('Green Park', 5000, 22, 300);
let nationalPark = new Park('National Park', 10000, 100, 2000);
let oakPark = new Park('Oak Park', 500, 200, 900);
 
let parksArray = [greenPark, nationalPark, oakPark];

let avgAge = function(parks) {
  let avg = 0
  for (let i = 0; i < parks.length; i++) {
    avg += parks[i].age;
  }
  console.log(`Our ${parks.length} parks have an average age of ${avg / parks.length} years.`)
}

let oceanAvenue = new Street('Ocean Avenue', '1999', 3.5);
let everGreen = new Street('Evergreen Street', '2008', 1.25);
let fourth = new Street('4th Street', '2015', -1);
let sunset = new Street('Sunset Boulevard', '1982', 6);

let streetsArray = [oceanAvenue, everGreen, fourth, sunset];

let totalLength = function(streets) {
  let total = 0;
  for (let street of streets) {
    total += street.length;
  }
  return total;
}

let totalAvg = function(streets) {
  let total = totalLength(streets);
  let avg = totalLength(streets) / streets.length;
  console.log(`Our ${streets.length} streets have a total length of ${total} km, with an average of ${avg} km.`);
}

console.log('----PARKS REPORT----');
console.log(avgAge(parksArray));
console.log(greenPark.treeDensity());
console.log(nationalPark.treeDensity());
console.log(oakPark.treeDensity());
console.log(nationalPark.lottaTrees());
console.log('----STREETS REPORT----');
console.log(totalAvg(streetsArray));
console.log(oceanAvenue.streetSize());
console.log(everGreen.streetSize());
console.log(fourth.streetSize());
console.log(sunset.streetSize());

