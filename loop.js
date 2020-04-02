//For loop
for(let i = 0; i < 10; i++){
    console.log("this is my number" + i);
}

//while loop
let i = 0;
while(i < 10){
    console.log("this number" + i);
}
i++;

//do while
let i = 0;
do{
console.log("this is a number" + i);
i++;
}
while(i < 10);

//LOOPING THROUGH ARRAY
//for loop
const cars = ["ford","toyota","honda","mercedes" ];
for (i = 0; i < cars.length; i++ ){
    console.log(cars[i]);
}

//for each
cars.forEach(function(current){
    console.log(current);
})

//Map
const users = [
{id: 10, name: "shirish"},
{id: 11,name: "shirish"},
{id: 12, name: "shirish"}
];

const ids = users.map(function(user){
        return user.id;
    });
    console.log(ids);


//For in
const user = {
    firstName: "John",
    lastName: "doe"
}
for(let x in user){
   console.log( `${x} : ${user[x]}`); 
}

