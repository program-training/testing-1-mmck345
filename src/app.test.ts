import { min } from "lodash";
import {
  getNextFibonacciValue,
  getUser,
  isPalindrome,
  returnLength,
  sortArrayOfNumbers,
  sqrt,
  sumArray,
} from "./app";

test("should return length of string", () => {
  const input = "012345678";
  const output = 9;
  const result = returnLength(input);
  expect(result).toBe(output);
});

describe('Check Palindrome String', () => {
  test("should return true - string is Palindrome", () => {
    const input = "aba";
    const result = isPalindrome(input);
    expect(result).toBeTruthy();
  });
  
  test("should return false - string is not Palindrome", () => {
    const input = "david";
    const result = isPalindrome(input);
    expect(result).toBeFalsy();
  });
})



test("should sort an array of numbers in ascending order ", () => {
  const input = [8, 9, 5, 6, 2, 1];
  const output = [1, 2, 5, 6, 8, 9];
  const result = sortArrayOfNumbers(input);
  expect(result).toEqual(output);
});


describe("Check sqrt function", () => {
  test("should return square of number", () => {
    const input = 25;
    const output = 5;
    const result = sqrt(input);
    expect(result).toBe(output);
  });

  test("should throw error for input is not number", () => {
    const input = "Hi";
    const output = "Invalid input - must be a number";
    const result = () => sqrt(input);
    expect(result).toThrowError(output);
  });

  test("should throw error for negative number", () => {
    const input = -25;
    const output = "Cannot compute square root of negative number";
    const result = () => sqrt(input);
    expect(result).toThrowError(output);
  });
});


describe("sum numbers in array", () => {
  test("should sum numbers in array", () => {
    const input = [5, 4, 1, 3, 2];
    const output = 15;
    const result = sumArray(input);
    expect(result).toBe(output);
  });

  test("should sum numbers in array - check if number greater 20", () => {
    const input = [5, 4, 1, 3, 2, 15];
    const minOutput = 21;
    const result = sumArray(input);
    expect(result).toBeGreaterThan(minOutput - 1);
  });
});


test("should get user", async () => {
  const output = {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  };

  const input = 100;
  const result = () => getUser(input);
  expect(result).rejects.toThrowError('User not found')
});

describe("Check fibonacci", () => {
  test("get number fibonacci", () => {
    const input = [0, 1, 1, 2, 3, 5, 8, 13];
    const output = 21;
    const result = getNextFibonacciValue(input);
    expect(result).toBe(output);
  });


  test("get number fibonacci - not fibonacci error", () => {
    const input = [0, 1, 1, 2, 3, 5, 8, 13, 20];
    const output = 21;
    const result = () => getNextFibonacciValue(input);
    expect(result).toThrowError('The input must be fibonacci array');
  });
});


