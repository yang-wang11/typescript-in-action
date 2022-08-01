let result: boolean = true;
let num: number = 20;
let str: string = "hello";

// Array
let arr1: number[] = [1, 2, 3];
let arr2: Array<string> = ["a", "b", "c"];
let arr3: Array<number | string> = [1, "a", "b"];

// Tuple
let tuple1: [number, string] = [1, "a"];
tuple1.push(10);
// result => 1, "a", 10
// however, in here still cannot access the third element

// Function
let add = (x: number, y: number): number => x + y;
let compute: (x: number, y: number) => number; // function type
compute = (a, b) => a - b;

// Object
let obj: Object = { x: 1, y: 2 };
// obj.x = 10; // cannot access the property 'x'
let obj2: { x: number; y: number } = { x: 1, y: 2 };
obj2.x = 20;

// Symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log("symbol: ", s1 == s2);

// void
let noReturn = () => {};

// any
let any1;

// never
let error = () => {
	throw new Error("error");
};
let endless = () => {
	while (true) {}
};
