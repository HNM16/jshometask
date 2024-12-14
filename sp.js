// ###HOMETASK


// #1
// function func(num){
//      if ( num <= 0){
//         return 0
//      }
//      return num%2==0 ? ( num-1)+func(num-3): num+func(num-2)
// }
// console.log(func(8));

// #2
// function func(num){
//     let cnt=0
//     return (a) =>{
//        if(a>cnt){
//         cnt=a
//        }
//        return cnt
//     }
// }
// let second =func()
// console.log(second(10));
// console.log(second(20));
// console.log(second(10));


// #3
// function func(num){
//     if ( num <= 0) {
//       return 0
//     }  
    

//    return num % 10 + func(Math.floor(num/10))
// }
// console.log(func(1101));


// #4
// function sumFunc (num = 0){
//    return (b) => {
//       return num = num + b
//    }
// }
// let second = sumFunc ()
// console.log(second(3));
// console.log(second(5));

// #5
// function  func (num = 0, cnt = 1){
//       return (b) => {
//          return num = (num + b)/cnt++
//       }
// }
// let second = func()
// console.log(second(10));
// console.log(second(15));

// #7
// function func(a, b) {
//     let c = a;
  
//     return function() {
//       let sum = c;
//       c += b;
//       return sum;
//     };
//   }
  
//   let second = func(0, 2); 
//   console.log(second()); 
//   console.log(second()); 
//   console.log(second()); 


// #8



// Quiztime
//  #1
// let cnt = 1;
// function func(a){
// if(a == 0){
//   return cnt;
// }
// cnt *= a;
// return func(a - 1);

// }
// console.log(func(6));



// Quiztime 
// #2

// function func(a, b = 10) {
//   if (b == 1) {
//     return a * b;
//   }
//   return a * b + func(a, b - 1);
// }
// console.log(func(2));

// Quiztime 
// #3
// function func(a, b) {
//   if (b == 0) {
//     return 1;
//   }
//   return a * func(a, b - 1);
// }
// console.log(func(2, 3));