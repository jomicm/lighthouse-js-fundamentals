const raining = false;
let cold = false;

if (raining) {
  console.log("Don't forget your unmbrella!");
}
if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

cold = false;
if (cold) {
  console.log("Make sure you pick a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

const temperature = 46;
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");

const isCitizen = false;
const age = 26;
if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if(temperature < -40 || temperature > 40){
  console.log("Maybe going outside isn't such a good idea...");
}

if(!raining){
  console.log("Leave your umbrella at home!");
}