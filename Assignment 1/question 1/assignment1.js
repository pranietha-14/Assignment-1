console.log(1 + "2" + "2"); 
//Ans: 122 
// 1 is integer and both 2's are strings added by binary (+) operator.With integer it adds and with strings it concatenates.

console.log(1 + +"2" + "2"); 
//Ans:32
// +"2" gives output as 2 because it is casted as integer.so 1 + 2 =3 and "2" this string is printed as it is.
// 1 + (+2) + "2" = 32

console.log(1 + -"1" + "2"); 
//Ans: 02
// 1 + (-1) + "2" = 02

console.log(+"1" + "1" + "2"); 
//Ans: 112
// strings are printed as it is.

console.log( "A" - "B" + "2"); 
//Ans: NaN2
// any operator other then "+" on string will display NaN (Not a Number value) and "+" concatenates two strings so NaN2.

console.log( "A" - "B" + 2); 
//Ans:NaN
//A string and a integer cannot be added.

