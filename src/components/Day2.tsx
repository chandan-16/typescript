export const Day2 = () => {

// Function Parameter Types 
function greet(name: string){
    return `Hello ${name}`;
}


// Multiple Parameters 
function add(num1: number, num2: number){
    return num1 + num2;
}

// Return Type 
function multiply(num1: number, num2: number): number{
    return num1 * num2
};
function welcome(name: string, occupation: string, age: number): string {
    return `Hello my name is ${name}, I am a ${occupation} and I am ${age} years old`
}

// Arrow Function 
const substract = (num1: number, num2: number) => {
    return num1 - num2;
};
const square = (num1: number) => num1 * num1;

// Optional Parameters 
const introduce = (name: string, city?: string) => {
    if(city){
        return `${name} lives in ${city}`;
    }
    return `${name} lives somewhere.`
} 
console.log(introduce('chandan'));

type AddFunction = (num1: number, num2: number) => number;

const addNum: AddFunction = (a, b) => {
    return a + b;
}


  return (
    <div>Day2</div>
  )
}
