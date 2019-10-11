var endYear = new Date().getFullYear();
var birthYearOptions = document.getElementById("birth-year")
for(var year = 1900; year <= endYear; year++){
    var options = document.createElement("option");
    options.text = year;
    birthYearOptions.add(options);
}