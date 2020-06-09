// CODING CHALLENGE: Sum of two numbers without '+' and '-' operators.

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// We will use :
// the 10 base system and the binary system.
// the bitwise operators.

// the exlusive XOR, in JS '^', return 1 only if the bits are different.
// example 2 ^ 2 => 10 ^ 10 = 00 => 0.
// the bitwise AND, in JS '&' return 1 if both bits are 1.
// example 2 & 2 => 10 & 10 = 10 => 2.
// the left shift operator, in JS '<<', push zeros on the right and delete the left most bit.
// example : 2 << 1 => 0010 << 1 = 0100 => 4

// use bitwise operators to make the sum of two numbers.
// 2 plus 1 => 10 ^ 01 = 11 => 3 true .
// 2 plus 2 => 10 ^ 10 = 00 => 0 false .

// 2 plus 2 => 010 & 010 = 010 => 2 false
//                         010 << 1 =  100 => 4 true

// use and calculate carry in binary system.
// in 10 base system : 17 + 15 = (2+20) + 10 = 22 + 10 = 32   <= the 10 is a carry.
// calculate carry in binary system : 001 & 001 = 001 << 1 = 010

// Pseudo code
// check a & b 
// if a & b is 1 there is a carry 
// count the carry
// count the XOR value
// a = XOR_value (a ^ b)
// b = carry
//if a & b in not 1 there is no carry
// return the a ^ b .


var getSum = function(a, b) {
  let carry;
  let xor_value;
  while((a & b) !== 0){
      carry = (a & b) << 1
      xor_value = a ^ b
      a = xor_value
      b = carry
  }
  return  a ^ b
};

getSum(1, 2)     // => 3.