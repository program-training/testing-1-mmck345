import axios from "axios";
import _, { join, split } from "lodash";


export function returnLength(str: string): number {
  return str.length;
}

export function isPalindrome(str: string): boolean {
  return str === _.reverse(split(str, "")).join("");
}

export function sortArrayOfNumbers(arrayOfNumbers: number[]) {
  return arrayOfNumbers.sort((a, b) => a - b);
}

export function sqrt(num: number): number {
  if (typeof num !== "number") {
    throw new TypeError("Invalid input - must be a number");
  }
  
  if (num < 0) {
    throw new Error("Cannot compute square root of negative number");
  }

  return Math.sqrt(num);
}

export function sumArray(arrayNumbers: number[]): number {
  return _.sum(arrayNumbers)
}

export async function getUser(userId: number) {

    const result = (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`));
    const resultJson = await result.json();

    if (_.isEmpty(resultJson)) {
      throw new Error('User not found')
    }
    return resultJson;
 
}


function checkIsFibonacci(arr: number[]): boolean {
  const n = arr.length;
  
  if (n === 1 || n === 2) {
      return true;
  }

  arr.sort((a, b) => a - b);

  for (let i = 2; i < n; i++) {
      if (arr[i - 1] + arr[i - 2] !== arr[i]) {
          return false;
      }
  }
  return true;
}

export function getNextFibonacciValue(numbers: number[]): number {

  if (!(checkIsFibonacci(numbers))) {
    throw new Error("The input must be fibonacci array");
  }

  const lastIndex = numbers.length - 1;
  const secondToLastIndex = lastIndex - 1;
  const nextValue = numbers[lastIndex] + numbers[secondToLastIndex];

  return nextValue;
}
