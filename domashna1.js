// Prva zadaca

let hasCoffe = true;
let hasTea = false;
let hasMilk = true;
let boolA = hasTea || hasMilk;
let boolB = hasCoffe && hasTea;
let boolC = !hasTea;
let boolD =(hasCoffe || hasMilk) && !(hasCoffe && hasMilk);
let boolE = (hasTea && hasMilk) || (hasCoffe && hasTea);
let boolF = !(hasCoffe && hasTea);

console.log(boolA);
console.log(boolB);
console.log(boolC);
console.log(boolD);
console.log(boolE);
console.log(boolF);

// Vtora zadaca

const num1 = 10;
const num2 = 5;
const num3 = 8;
const num4 = 2;
const num5 = 12;
const num6 = 4;
const num7 = 3;

const result1 =
  num1 - num2 + (num3 - num4) - num5 / num6 - (num7 * num1) / (num2 * num4);
const result2 =
  (num5 * num1 + (num3 * num6 - num4)) / ((num5 * num2) / (num5 - num7 * num4));
const result3 =
  (num7 + num3 + num6) * num5 - (num2 + num4) * num1 - (num5 * num6) / num3;
const result4 =
  (num7 * num5) / (num7 * num4) + (num1 - num6 + num3) / ((num5 - num2) * num4);
const result5 =
  (num5 - num7 - num4) * num1 + (num2 * num4 * num3) / num6 + num5 - num1;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

// Treta zadaca

const num11 = 12;
const num12 = 4;
const sum = num11 + num12;
const diff = num11 - num12;
const mult = num11 * num12;
const div = num11 / num12;
const rem = num11 % num12;

console.log(sum);
console.log(diff);
console.log(mult);
console.log(div);
console.log(rem);
