"use strict";
//declaring type of variables
let a = "akhst";
let numb = 232;
let check;
//union type
let surname;
surname = 34;
//declaring return type of function and paramter type
const func = (n, m) => {
    console.log(n, m);
    return n * m;
};
let naam = 20;
//using that type with for funct
const funct = (n, m) => {
    console.log(n, m);
    return n + m;
};
//declaring array type
const arr = [12, 344, 5, 3, 2, 34];
const arr2 = ["sad", "mad", "red"];
//or
const arr3 = [];
//using union
const arr4 = ["ok", 3];
//using that object type to declare object
const obj1 = {
    height: "five ten",
    weight: 34
};
//functions
//decleration
const multiply = (n, m) => {
    return n * m;
};
const addition = (n, m) => {
    return n * m;
};
const subtracting = (...n) => {
    return n;
};
// console.log(subtracting(34,3434,234,3,5));
//decleration through function keyword
function lol(n) {
    return 34;
}
// const checkFunc:GetDAtaType = (product)=>{
// console.log(product);
// }
// console.log(checkFunc({
//    name:"akshat",
//    stock:34
// }))
//never type will return while throwing errors
const errorhandler = () => {
    throw new Error();
};
const mode = "dark";
//classes
class player {
    constructor(height, weight, password) {
        this.height = height;
        this.weight = weight;
        this.password = password;
        //function
        this.getMyHeight = () => {
            return this.height;
        };
        this.id = String(Math.random() * 100);
    }
    //getter function -> no need to call function 
    get getMyheight() {
        return this.height;
    }
    //setter function
    set changeheight(value) {
        this.height = value;
    }
}
const akshat = new player(344, 523, "akshat");
console.log("getter func", akshat.getMyheight);
akshat.changeheight = 510;
//player 1 is child class of player which can use protected attributes within its class only
// class player1 extends player{
//    constructor(height:number , weight:number ,password:string, public special:boolean){
//       super(height , weight , password)
//    }
//    getPassword= ()=>{
//       return this.password;
//    }
// }
// const akshat2 = new player1(23 , 70 , "paas" , true);
// console.log(akshat2.getPassword());
// console.log(akshat2.getMyHeight());
// console.log(akshat2.id);
