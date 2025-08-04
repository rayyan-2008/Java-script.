 firstName = "Rayyan";
 lastName = "Salman";
 fullName = firstName + " " + lastName;
alert(fullName); 

 a = "5";
 b = 2;
 result2 = a + b;
console.log(result2); //Output: 52


 a = 10;
 b = 5;
 c = ++a + b-- + --b;
//++ a ke value 11 q kh yeh pre hai to plus ho jayega
//b-- ke value 5 q ke yehe post hai to minus nahi hoga
//--b ke value 3 hai q kh pre hai to minus hojayga  
//11 + 5 + 3 = 19
console.log(c); 




 str = "20";
 Num20 = Number(str);
 result4 = Num20 * 3;
console.log(result4); //Output: 60 


 num = 4;
console.log(num % 3); // Output: 1


student = "Rayyan Salman";
 score = 88;
alert(student + " got " + score + " marks in JavaScript!"); // Output: Rayyan Salman got 88 marks in JavaScript!




 x = 5;
 y = x++ + ++x - --x;
//   (x++) yeh 5 he rahe ga  q kh yeh post hai
//   (++x)5 me 2 phele se he plus ho jaye ga q ke yeh pre to 7 je rahe ga 
// y = 5 + 7 - 6 = 6 DMAS rule
console.log(y); // Output: 6



// Illegal -> Corrected
// 1.  1name = "Rayyan";     ->  name1 = "Rayyan";
// 2.  full-name = "Rayyan"; ->  full_name = "Rayyan";
// 3.  var = 5;           ->  myVar = 5;
// 4.  /student name = "Rayyan"; ->  student/name = "Rayyan";
// 5.  @score = 90;       ->  score@ = 90;




 price = 2500;
totalCost = price * 4;
alert("Total bill is: " + totalCost + " PKR"); // Output: Total bill is: 10000 PKR



msg = "Total: " + (5 + 5) * 2; 
msg = "Total: " + 10 * 2;
msg = "Total: " + 20; // = "Total: 20"
alert(msg)