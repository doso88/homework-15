/*1. დაწერეთ for ციკლი 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i*/
for (let index = 0; index < 100; index++) {
    console.log (nums[index]); 
}

/*2. დაწერეთ while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i*/


/*3.შექმენით 5 ელემენტიანი  მასივი, სადაც დაამატებთ სახელებს, გამოიყენეთ pop,shift,unshift,push მეთოდები და განახორციელეთ სხვადასხვა სახელების წაშლა/დამატება. დალოგეთ თითოეული ქმედების შემდგომ  მასივის მნიშვნელობა. ისე როგორც ლექციაზე გავაკეთეთ.*/
const person = ["ann", "jake", "martin", "john", "connor", "eva"];
person.push ("colin");
console.log (person);
person.pop ("colin");
console.log (person);
person.unshift ("ronald");
console.log (person);
person.shift ("roland");
console.log (person);

/*4. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 10000 - მდე ამ ,მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i) მასივში ჩაწერა ხდება push მეთოდის საშუალებით ლექციის ფაილში გვიწერია*/
const box = [];
const multiplication = []
for (let index = 0; index < 10000; index++) {
  const multiplication = box[i*i];
}
console.log (multiplication)

/*5.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი და for ცილის გამოყენებით დათვალეთ ჯამი*/
const numArray =[7, 56, 25, 75, 222];
let sum = 0;
for (let index = 0; index < numArray.length; index++) {
  sum = sum + numArray[index];
}
console.log (sum)

/*6. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის კენტი ან false -ს თუ რიცხვი არის ლუწი.*/

/*7.დაწერეთ ფუნქცია, რომელიც მიიღებს UpperCase სტრინგს მაგ (MY NAME IS JOHN) და დააბრუნებს LowerCase (my name is john) სტრინგს*/
const text = ("MY NAME IS JOHN");
let lowerCase = (text.toLocaleLowerCase())
console.log(lowerCase)

/*8. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება*/
const numbers =[3,4,9,14,27,35,38,42,67,75,88]
const oddNums = []
const evenNums = []
for (let index = 0; index < numbers.length; index++) {
  if (numbers[i] % 2 == 0){
  evenNums.push (numbers[i]);
}else{
  oddNums.push(numbers[i])
}
}