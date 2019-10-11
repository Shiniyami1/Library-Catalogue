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
    for (var i = 0; i < a.length; i++) {
    temp += "&#x"+str.charCodeAt(i).toString(16)+";"
  }
  return temp;
};
function validateEmail(email) {
    var temp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return temp.test(email);
  }
  function getUserData(){
      var inputName = document.getElementById("name").value;
      alert(inputName)
      inputName = sanitizeHTML(inputName);
      if(validateEmail(document.getElementById("email").value)){
        var inputEmail = document.getElementById("email").value;
      }
      else {
          alert("Invalid Email Address Entered")
      }

      var inputAge = document.getElementById("birth-year").value;
  }