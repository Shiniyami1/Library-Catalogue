//Loop to create and populate select list for birth-year element
var endYear = new Date().getFullYear();
var birthYearOptions = document.getElementById("birth-year")
for(var year = 1900; year <= endYear; year++){
    var options = document.createElement("option");
    options.text = year;
    birthYearOptions.add(options);
}
var nameInput = document.getElementById("name").value
//Sanitize Input 
var sanitizeHTML = function (str) {
	var temp = "";
    for (var i = 0; i < str.length; i++) {
    temp += "&#x"+str.charCodeAt(i).toString(16)+";"
  }
  return temp;
}

function validateEmail(email) {
    var temp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return temp.test(email);
}

var validateBtn = document.getElementById("validate")
validateBtn.onclick = function() {
    
    //GET NAME
    var inputName = document.getElementById("name").value;
    inputName = sanitizeHTML(inputName);
    
    //GET EMAIL
    if(!(validateEmail(document.getElementById("email").value))){
        alert("Invalid Email Address Entered")
        return; 
    }
    var inputEmail = document.getElementById("email").value;

    //GET AGE
    var inputAge = document.getElementById("birth-year").value;

  }