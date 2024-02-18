// //1

// let a = 5;
// let b = 0;
// let c = 7;
// if (a <= 0 || b <= 0 || c <= 0) {
//   console.log(0);
// } else {
//   let number = a * 100 + b * 10 + c;
//   console.log(number);
// }
// //2
// let day = 4;

// switch(day) {
//   case 1:
//     console.log('Dushanba');
//     break;
//   case 2:
//     console.log('Seshanba');
//     break;
//   case 3:
//     console.log('Chorshanba');
//     break;
//   case 4:
//     console.log('Payshanba');
//     break;
//   case 5:
//     console.log('Juma');
//     break;
//   case 6:
//     console.log('Shanba');
//     break;
//   case 7:
//     console.log('Yakshanba');
//     break;
//   default:
//     console.log('Bunday kun mavjud emas');
// }
// #3
// let year = 2020;

// if(year % 4 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// #4
// let a = 235;

// if(a >= 1 && a <= 9) {
//   console.log(1);
// } else if(a >= 10 && a <= 99) {
//   console.log(2);
// } else if(a >= 100 && a <= 999) {
//   console.log(3);
// }
// #5
// let a = 5;
// let b = 6;
// let c = 10;
// let d = 15;

// if(a > 0 && b > 0 && c > 0 && d > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// #6
// let a = 10;
// let sum = 0;

// for(let i = 0; i <= a; i++) {
//   sum += i;
// }

// console.log(sum);
// #7
// function isPerfect(num) {
//   let sum = 0;

//   for(let i = 1; i <= num/2; i++){
//     if(num % i === 0) {
//       sum += i;
//     }
//   }

//   return sum === num;
// }

// let n = 6;
// console.log(isPerfect(n));
// #8
// function digitCount(num) {
//   let count = 0;
//   while(num) {
//     count++;
//     num = parseInt(num / 10);
//   }
//   return count;
// }
// let n = 123;
// let digits = digitCount(n);
// console.log(digits);
// #9
// function sumDigits(n) {
//   let sum = 0;
//   while(n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }
// let n = 532;
// console.log(sumDigits(n));
// #10
// function sumDigits(num) {
//   let sum = 0;
//   while (num > 0) {
//     let digit = num % 10;
//     sum += digit;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }
// let n = 532;
// let result = sumDigits(n);
// console.log(result);
// #11
// let array = [1, 2, 3, 4];
// let reversed = [];
// for(let i = array.length - 1; i >= 0; i--) {
//   reversed.push(array[i]);
// }
// console.log(reversed);
// #12
// let n = 4;
// let array = [2, 4, 6, 4];
// let count = 0;
// for(let i = 0; i < array.length; i++) {
//   if(array[i] === n) {
//     count++;
//   }
// }
// console.log(count);
// #13
// let sum = 10;
// let array = [3, 5, 2, 7];
// for(let i = 0; i < array.length; i++) {
//   for(let j = i + 1; j < array.length; j++) {
//     if(array[i] + array[j] === sum) {
//       console.log(array[i], array[j]);
//     }
//   }
// }
// #14
// let array = [5, 2, 4, 1, 3];
// array.sort((a, b) => a - b);
// console.log(array);
// #15
// let array = [5, 2, 10, 8, 12];
// array.sort((a, b) => b - a);
// console.log(array[1]);
