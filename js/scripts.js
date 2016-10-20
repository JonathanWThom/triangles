var triangleType = "";
 alert("functions being run");

if (!(sideA > 0) || !(sideB > 0) || !(sideC > 0)) {
alert("non positive numbers");
}
else if ((sideA === sideB) && (sideB === sideC)) {
	alert("equilateral");
 triangleType = "equilateral";
}
else if ((sideA !== sideB !== sideC) && ((sideA + sideB <= sideC)||(sideB + sideC <= sideA) || (sideA + sideC <= sideB) )){
 alert("not a triangle");
 triangleType = "not"
 }
else if ((sideA === sideB) || (sideA === sideC) || (sideB === sideC)) {
 alert("iso");
 triangleType = "isosceles";
}
else if (sideA !== sideB !== sideC) {
  alert("scalene");
  triangleType = "scalene";
}
else {
   alert("Form is incomplete");
 }

$(document).ready(function() {

});
