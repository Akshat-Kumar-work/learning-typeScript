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

 
