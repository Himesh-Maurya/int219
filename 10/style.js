console.log("hi");
alert("hi sir2");
// The Programming languages for server-side programming are :
// 1) PHP
// 2) C++
// 3) Java and JSP
// 4) Python
// 5) Ruby on Rails

// The Programming languages for client-side programming are :
// 1) Javascript
// 2) VBScript
// 3) HTML
// 4) CSS
// 5) AJAX

// myRoll camal case
document.write("good morning");
var num = 5;
console.log(typeof num);
num = "hityu";
console.log(typeof num);
console.log(num.length);
console.log(num.charAt(1));
console.log("index", num.indexOf("ty"));
console.log("slice", num.slice(1, 4));
console.log("include", num.includes("ty")); //ye batata hae ki 'ty' hae num me ki nahi
console.log("num", num);
console.log(`touppercase-${num.toUpperCase()}`);
console.log(`tolowercase-${num.toLowerCase()}`);
num = "h";
console.log(typeof num);
num = "hi";
console.log(typeof num);
num = true;
console.log(typeof num);
var c = 7;
var d = 9;
let e = c + d;
console.log(e);
console.log(typeof null);
console.log(typeof NaN);

var t = prompt("enter the number");
document.write("<br>");
document.write("number is ", t);
document.write("<br>");
if (t > 15) {
  document.write("greater than 15");
  console.log("greater than 15");
} else if (t < 15) {
  document.write("less than 15");
  console.log("less than 15");
} else {
  document.write("equal to 15");
  console.log("equal to 15");
}
document.write("<br>");

//for loop
for (var i = 0; i < t; i++) {
  document.write(i, "<br>");
}
document.write("<br>");

//while loop
while (t != 0) {
  document.write(t, "<br>");
  t--;
}
// var t45 = prompt("num1");
function sum4(num1, num2) {
  if (num2 != undefined) {
    document.write(num1 + num2);
    // return num1+num2;
  }
}

sum4(80, 20);
var array1 = [5, 9, 3, 2, "pp", 7];
console.log(array1);

array1.unshift(2, "pp");
console.log(array1);

const obj = {
  name: "raj",
  present: true,
  hobbies: ["eat", "sleep", "code"],
  beverage: { morning: "tea", afternoon: "coffee" },
  grade: function () {
    return "A";
  },
};

document.write(obj.beverage.afternoon);
class pizza {
  constructor(pizzaType) {
    this.size = "Medium";
    this.crust = "Wheat crust";
  }
  bake() {
    document.write("Baking a" + this.size + this.crust + "pizza");
  }
}
