var endYear = new Date().getFullYear();
var options = "";
for(var birthyear = 1900 ; birthyear <= endYear; birthyear++){
  options += "<option>"+ birthyear +"</option>";
}
document.getElementById("birth-year") = options;