//  Declare initial var vlaues
var triangleType = "";
var sideA = 0;
var sideB = 0;
var sideC = 0;

// backend math
var triangleTest = function (sideA, sideB, sideC) {
  if (!(sideA > 0) || !(sideB > 0) || !(sideC > 0)) {
    alert("Must be numbers greater than 0!");
  }
  else if ((sideA === sideB) && (sideB === sideC)) {
   triangleType = "equilateral";
  }
  else if ((sideA !== sideB !== sideC) && ((sideA + sideB <= sideC)||(sideB + sideC <= sideA) || (sideA + sideC <= sideB) )){
   triangleType = "not";
   }
  else if ((sideA === sideB) || (sideA === sideC) || (sideB === sideC)) {
   triangleType = "isosceles";
  }
  else if (sideA !== sideB !== sideC) {
    triangleType = "scalene";
  }
  else {
    alert("something went wrong!")
  }
  return triangleType;
};
// UI logic
$(document).ready(function() {
  $("form").submit(function(event) {
    console.log(triangleType);
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());

    triangleTest(sideA, sideB, sideC);
    $("#output").text(triangleType);
    event.preventDefault();
  });
});
