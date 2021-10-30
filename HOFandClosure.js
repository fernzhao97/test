//HOF
//HOF both in mathematics as well as computer science
//Simply means it's a function that does one of two things
// It either takes or more function as arguments
//Or returns a function as a result, often called a callback
//add to new branch not master
//and check master later
const hof =()=>()=> {return 5;}
//function returns function
const hof1 =(fn)=>fn(5);
hof1(function a(x){
    return x
})

console.log(hof()())


//Closure
//use closure to FP for create data privacy
const closure = function(){
    let count = 0;
    return function increment(){
        count++
        return count
    }
}
console.log(closure()) //[Function: increment]
const incrementFn = closure();
console.log(incrementFn())

//Currying策划
const multiply = (a,b) => a*b;
multiply(3,4)//12
//Closure做法
const curriedMultiply = (a)=>(b)=> a*b
//why this useful?
//I can now create multiple utility functions out of this
console.log(curriedMultiply(3)(5))

const multiplyBy5 = curriedMultiply(5)
//调用
console.log(multiplyBy5(10))

//Partical Application
const multiply3 = (a,b,c) => a*b*c;
const curriedMultiply3 = (a) => (b) => (c) => a*b*c
const multiply7 = multiply3.bind(null,7)
console.log(multiply7(10,10))