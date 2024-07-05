let score = "33";
let score1 = null;
let score2 = 33;

console.log("Score ="+ " " + typeof score);

console.log("Score1 ="+ " " + typeof score1);
console.log("Score2 type ="+  " " + typeof score2);
console.log("Score1 type ="+ "" + typeof(score1));
console.log("Score2 ="+ " " + typeof(score2));

// ------------------------------

console.log("Score ="+ typeof(score));

//conversion

let valueInNumber = Number(score);
console.log("Score convert =" + " " + typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
//"33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


//"" => false
// "Ashok" => true
let somenum = 33;
let stringnum = String(somenum);
console.log("conv string = " +  stringnum);
console.log(typeof stringnum);
