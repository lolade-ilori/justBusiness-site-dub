function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "box-list") {
      x.className += " responsive";
      
    } else {
      x.className = "box-list";
    }
  }