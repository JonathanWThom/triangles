var triangleType = "";
var sideA = 0;
var sideB = 0;
var sideC = 0;


$(document).ready(function() {
  $("form").submit(function(event) {
    console.log(triangleType);

    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());

    if (!(sideA > 0) || !(sideB > 0) || !(sideC > 0)) {
      alert("Must be numbers greater than 0!");
    }
    else if ((sideA === sideB) && (sideB === sideC)) {
    //	alert("equilateral");
     triangleType = "equilateral";
    }
    else if ((sideA !== sideB !== sideC) && ((sideA + sideB <= sideC)||(sideB + sideC <= sideA) || (sideA + sideC <= sideB) )){
     //alert("not a triangle");
     triangleType = "not";
     }
    else if ((sideA === sideB) || (sideA === sideC) || (sideB === sideC)) {
     //alert("iso");
     triangleType = "isosceles";
    }
    else if (sideA !== sideB !== sideC) {
      //alert("scalene");
      triangleType = "scalene";
    }
    else {
      // alert("Form is incomplete");
     }
    //alert('variables assigned');
    console.log(triangleType);
    if (triangleType === "equilateral") {
      $("#equilateral").show();
      console.log(triangleType + "something else");
    }
    else if (triangleType === "not") {
      $("#not").show();
      console.log(triangleType);
    }
    else if (triangleType === "isosceles") {
      $("#isosceles").show();
    }
    else if (triangleType === "scalene") {
      $("#scalene").show();
    }
    event.preventDefault();
  });
  console.log(triangleType);
});
