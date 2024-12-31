//to show for loop
for(let i=1;i<=10;i++){
    console.log(i);
}
/* first ma 1 print hunxa as i=1 ani loop ma jancha ,next i=i+1 hunxa ,it prints 2
feri loop hunxa until i =10 or less than 10 ,prints i each time ,ani i>10 bhayesi loop terminates.
*/


//while loop
let sum=0; //suruma sum 0 rakheko
let num=1;
while(num<=5){ //loop ma num=5 bhayesamma run gareko
    sum+=num;
    num++;
}
console.log(`the sum of numbers from 1 to 5 is ${num}`);
/*
firstly,num=1 & num=<5 cha so sum=0+1=1 hunxa,ani  num=num+1=2 hunxa ,ani while loop ma 
num<=5 check hunxa true bhayo bhane it enters the loop, tespaxi sum=1+2=3 hunxa ,again num=3 ,
like this num=5 nabhayesamma loop chalcha and then ends.
*/


//Arrays
const favMovies=["24 Hour","Money Heist","All the Bright Places"];//movie ko nam insert gareko
for(let a=0;a<favMovies.length;a++) //favMovies.Length le array ma  vako no.of movies calculate garxa
{
    console.log(`Movie${a+1} : ${favMovies[a]}`); //movie ko name print garcha
}
/*
firstly, favourite movies array ma rakhincha as a[0],a[1],... then index value a=0 & a<3 so a[0] ko 
value print huncha, again  arko loop ma a increments to 1 ,as a<3 a[1] print hunxa,similarly a<3 hudasamma
value is printed  .Lastly, loop terminates when a>=3.
*/


//functions
function multiply(x,y){ //function created
    return x*y;
}
console.log(`the product of 5 and 7 is ${multiply(5,7)}`); //function is called
/*
multiply function is created that multiplies two numbers and returns a value,
multiply(5,7)  le function call garepachi 5,7 x,y ma store hunxa ani x*y return huncha i.e 35
as a result console le value print garcha. 

*/



//encapsulation
class Person{                             //person class created
    #name;#age;constructor(name,age){    //constructor created
        this.#name=name;                 //assign values to object members
        this.#age=age;
    }
    getDetails(){                         //function to get details like name,age
        return `Name : ${this.#name},Age:${this.#age}`;

    }
}
const person=new Person("Sita",23); //object created
console.log(person.getDetails());
/*
Firstly class person is created along with its constructor which include name and age,
Constructor afae call hunxa everytime we create an object to assign values to object members,
getDetails le user bata name ra age input linxa ani person.getDetails()le input gareko details store 
garera print garxa.
*/


//abstraction
class Vehicle {                 //class Vehicle created
    startEngine() {              //function created
      console.log("Engine started");
      }
  }
  
  class Car extends Vehicle {
    startEngine() {
      console.log("Car engine started");  
      }
  }
  
  class Motorcycle extends Vehicle {
    startEngine() {
      console.log("Motorcycle engine started");  
      }
  }
  const car = new Car();
  console.log(car.startEngine());
  const motorcycle = new Motorcycle();
  console.log(motorcycle.startEngine());
  /*

  */

  