let val;

const today = new Date();
let birthday = new Date("10 SEPTEMBER 1998");
birthday = new Date(9/10/2020);

val = today;
val = today.getMonth();  //takes 0 as january 
val = today.getDate();

birthday.setMonth(2);
birthday.setDate(2);
birthday.setFullYear(2);
birthday.setHours(2);


console.log(val);
