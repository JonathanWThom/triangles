var triangleType = "";
 alert("functions being run");

 if ((sideA === sideB) && (sideB === sideC)) {
 	alert("equilateral");
   triangleType = "equilateral";
 } else if ((sideA === sideB) || (sideA === sideC) || (sideB === sideC)) {
   alert("iso");
   triangleType = "isosceles";
 } else if ((sideA !== sideB !== sideC) && ((sideA + sideB <= sideC)||(sideB + sideC <= sideA) || (sideA + sideC <= sideB) )){
   alert("scalene");
   triangleType = "scalene";
 } else {
   alert("This is not a triangle!");
 }

$(document).ready(function() {

});


if ((sideA === sideB) && (sideB === sideC)) {
  triangleType = "equilateral";
  alert("equilateral");
}

else if ((sideA !== sideB !== sideC) && ((sideA + sideB <= sideC)||(sideB + sideC <= sideA) || (sideA + sideC <= sideB) )){
  triangleType = "scalene";
  console.log("scalene");
} else {
  alert("This is not a triangle!");
  console.log("not");
}
