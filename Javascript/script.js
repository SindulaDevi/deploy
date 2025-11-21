//console.log('Hello World')

//let a=["Hyderabad", "Chennai", "Bangalore", "Visakhapatnam", "Mumbai"]
//let res=a[2];
//let reult=res;
///console.log(reult);

//let dosas = ["plain Dosa", "Ghee Karam Dosa","Masala Dosa","Egg Dosa"];
//console.log(dosas);
 //dosas[2]='ravva Dosa';
//console.log(dosas);

//let cities = ["Hyderabad", "Chennai", "Bangalore", "Visakhapatnam", "Mumbai"];
//console.log(cities);
//cities[3] = 'Lucknow'; // method -1
//cities[cities.length]='lucknow'; // method -2
//cities.push('lucknow'); method -3
//cities.pop(); method- 4
//console.log(cities);

// MAKING A SOFTCOPY OF A ARRAY
//let trees=['neem tree', 'Banyan tree', 'Mango tree', 'coconut tree'];
//let softcopy=trees;
//trees.pop();
//console.log(trees);
//console.log(softcopy);

//MAKING HARD COPY OF ARRAY

//let a=['apple','banana', 'guava', 'Mango'];
//let b=[...a ]
//a.pop();
//console.log(a)
//console.log(b)

//merge two arrays of popular and favourite cities
// var popcities=['Chennai', 'Hyderabad', 'Visakhapatnam']
// var favcities=['GOA', 'Bangalore', 'Delhi'];
// console.log(popcities.concat(favcities));

// FIND THE LENGTH OF AN ARRAY AND STORE IT IN A VARIABLE

// let a=[1,2,2,2,4,5,8,0,3,9];
// let b=(a.length)
// console.log(b)

//CHECK IF LONDON IS THERE IN AN ARRAY AND STORE IT IN A VARIABLE

// let cities=['paris', 'London', 'Denmark', 'Tokyo', 'Netherlands']
// let list=cities.includes('London')
// console.log(list)

// WRITE A LOOP TO PRINT THE SUM OF NUMBERS FROM 1 TO 5

// let sum=0;
// let i=0;
// while(i<=5)
// {
//     sum = sum+i;
//     i++;
// }
// console.log(sum);

// WRITE A WHILE LOOP TO PRINT TO COUNT DOWN  FROM 5 TO 1

// let countdown=[]
// let j=5;
// while(j>0){
//     countdown.push(j);
//     console.log(countdown);
//     j--;
// }
// console.log(countdown)

//ADD NUMBERS FROM 1 TO 3 BY USING THE DO WHILE LOOP

// let total=0;
// let k=1;
// do{
//     total=total + k;
//     k++;
//     console.log(total);
// }while(k<=3);
// console.log(total)

//THERE IS AN ARRAY OF NUMBERS, MULTIPLY THEM BY 2 AND GIVE THE RESULT IN ANOTHER ARRAY
// let a=[3,5,7,9,4];
// let b=[]
 
// for(let i=0;i<a.length;i++)
// {
//     b.push(a[i]*2)
// }
// console.log(b);

// DISPLAY THE ITEMS FROM ONE ARRAY TO ANOTHER ARRAY BY USING LOOPS

let flowers=['Lilly','Tulip', 'Rose', 'Sunflower', 'Hibiscus', 'Chrysanthimum'];

let selectedFlowers=[];

console.log(flowers);

for(let i=0;i<flowers.length;i++)
{
    selectedFlowers.push(flowers[i]);
    if(flowers[i]==='Sunflower')
        {
            break;
        }
}
console.log(selectedFlowers);