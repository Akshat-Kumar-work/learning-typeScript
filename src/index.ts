//declaring type of variables
let a:string = "akhst";
let numb:number = 232;
let check:boolean;

//union type
 let surname : string | number;
 surname =  34;

 //declaring return type of function and paramter type
 const func = (n:number, m:number):number=>{
    console.log(n,m);
    return n*m;
 };

 //defining type || custom data type
 type UserName = string | number;

 let naam:UserName =20;


 //declaring or creating custom function type
 type check = (n:string , m:string)=>string;
 //using that type with for funct
 const funct:check = (n,m)=>{
    console.log(n,m);
    return n+m;
 }


 //declaring array type
 const arr:number[] = [12,344,5,3,2,34];
 const arr2:string[]=["sad","mad","red"];
            //or
const arr3:Array<string> = [];
            //using union
const arr4:Array<string | number> = ["ok",3];

//objects
//declaring custom object type
// ?-> is used to make property optional
type obj = {
   height:string;
   weight:number;
   gender?:string;
};

//using that object type to declare object
const obj1: obj={
   height:"five ten", 
   weight:34
};



//functions

//decleration
const multiply = (n:number , m:number)=>{
return n*m
}

//custom function type and decleration
type adding = (n:number , m:number)=>number;
const addition:adding = (n , m)=>{
   return n*m;
}

//rest operator
//accepting input as array
type subtract = (...n:number[])=>number[];
const subtracting : subtract = (...n)=>{
  return n;
}

console.log(subtracting(34,3434,234,3,5));

//decleration through function keyword
function lol (n:number):number{
return 34;
}

//function with object as parameter
type GetDAtaType = (product:{name:string; stock:number})=>void;

const checkFunc:GetDAtaType = (product)=>{
console.log(product);
}

console.log(checkFunc({
   name:"akshat",
   stock:34
}))

//never type will return while throwing errors
const errorhandler = ()=>{
   throw new Error();
}



type themeMode = "light"|"dark";
const mode : themeMode = "dark";

//classes
class player{


   constructor(private height:number , public weight:number , protected password : string){
   }

    getMyHeight= ()=>{
      return this.height;
   }
}

const akshat = new player(344,523 , "akshat");

//player 1 is child class of player which can use protected attributes within its class only
class player1 extends player{
   constructor(height:number , weight:number ,password:string, public special:boolean){
      super(height , weight , password)
   }

   getPassword= ()=>{
      return this.password;
   }
}

const akshat2 = new player1(23 , 70 , "paas" , true);

console.log(akshat2.getPassword());














 

