function addition() {
    let result = 4 + 7;
    return results;
}

console.log(addition());

//write a javascript function that return the square of a Number

function squarenumber(num) {
    let result = num * num;
    return result;
}
let number = prompt("enter a number: ");

    console.log(squarenumber(number));
    
    // write a javascript function that returns the sum of any two numbers

    function addition(num1,num2) {
        let result = num1 + num2;
        return result;
    }
    let num1 = Number(prompt("enter a number:"));
    let num2 =Number(prompt("enter another number:"))

    console.log(addition(num1,num2));

    // hosting -> the function can be called before it appaers in code

    // function expressions -annonymous function assigned to a variable
    const hello = function (name) {
        return `hello ${name}` ;
    }

    console.log(hello("bona"));

    // arrow functions

    const greet = () => {
        return "hello!"
    }
    console.log(greet());

    //write an arrow function that returns the square of number

    const numbersquare = (num) => {
        let result = num * num;
        return result;
    };

    console.log(squarenumber(90));
    // write a function that returns even number from the list below
    let numbers = [45,23,78,12,90,56];
    
    function getEvennumber(numbers) {
        let evennumbers = [];

        for(let num = 0; num < numbers.length; num++)
        {
            if (numbers[num] % 2 === 0) {
                evennumbers .push(numbers[num]);

            }
        }
        return evennumbers;
    }
    console.log(getEvennumber(numbers));