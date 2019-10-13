//Hide Library Eleemnts until logged in
var librarySection = document.getElementById("library");
librarySection.style.display = "none";

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
	str = str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return str;
}

function validateEmail(email) {
    var temp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return temp.test(email);
}

var validateBtn = document.getElementById("validate")
var userInfoForm = document.getElementById("userInfo")
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
    if ((endYear - inputAge) >= 18){
        inputAge = "Adult";
    }
    else {
        inputAge = "Child";
    }

    //DISPLAY USER INFO
    userInfoForm.style.display = "none";
    var displayUserData = document.getElementById("result");
    var userDataText = document.createTextNode(inputName + " (" + inputEmail + ") [" + inputAge + "]");
    displayUserData.appendChild(userDataText);
    //Show Library
    librarySection.style.display = "block";

}

//Due Date for Books
var date = new Date();
date.setDate(date.getDate() + 30);
var bookDueDate = document.getElementsByClassName("bookDueDate");
var dueDateForBooks = date.toString();  //Globally Accessible Due Date for Books
for (var i = 0; i < bookDueDate.length; i++) {
    var bookDueDateString = document.createTextNode(date);
    bookDueDate[i].appendChild(bookDueDateString);
}
delete date;

//Due Date for CDs
var date = new Date();
date.setDate(date.getDate() + 10);
var cdDueDate = document.getElementsByClassName("cdDueDate");
var dueDateForCDs = date.toString();    //Globally Accessible Due Date for CDs
for (var i = 0; i < cdDueDate.length; i++) {
    var cdDueDateString = document.createTextNode(date);
    cdDueDate[i].appendChild(cdDueDateString);
}

var addComputer = document.getElementById("addComputer");
var addWebProg = document.getElementById("addWebProg");
var addHarryPotter = document.getElementById("addHarryPotter");
var addOrientExp = document.getElementById("addOrientExp");
var addGatsby = document.getElementById("addGatsby");
var addGoT = document.getElementById("addGoT");
var addColdplay = document.getElementById("addColdplay");
var addDrake = document.getElementById("addDrake");
var addMJ = document.getElementById("addMJ");
var addPilots = document.getElementById("addPilots");

addComputer.onclick = function() {addToCartFunc("Computer Networking: A Top-Down Approach", dueDateForBooks, this.parentNode.parentNode)}; //Simplified second paramater as due date for all books are equivalent
addWebProg.onclick = function() {addToCartFunc("Web Programming by zyBooks", dueDateForBooks, this.parentNode.parentNode)};
addHarryPotter.onclick = function() {addToCartFunc("Harry Potter and the Deathly Hallows", dueDateForBooks, this.parentNode.parentNode)};
addOrientExp.onclick = function() {addToCartFunc("Murder on the Orient Express", dueDateForBooks, this.parentNode.parentNode)};
addGatsby.onclick = function() {addToCartFunc("The Great Gatsby", dueDateForBooks, this.parentNode.parentNode)};
addGoT.onclick = function() {addToCartFunc("A Song of Ice & Fire", dueDateForBooks, this.parentNode.parentNode)};
addColdplay.onclick = function() {addToCartFunc("Coldplay: Parachutes (Album)", dueDateForCDs, this.parentNode.parentNode)};
addDrake.onclick = function() {addToCartFunc("Drake: More Life (Album)", dueDateForCDs, this.parentNode.parentNode)};
addMJ.onclick = function() {addToCartFunc("Michael Jackson: Bad (Album)", dueDateForCDs, this.parentNode.parentNode)};
addPilots.onclick = function() {addToCartFunc("Twenty-One Pilots: Blurryface (Album)", dueDateForCDs, this.parentNode.parentNode)}; 

function addToCartFunc(nameStr, dueStr, obj) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(nameStr + " (due on " + dueStr + ")       "));
    var removeFromCart = document.createElement("button");
    removeFromCart.setAttribute("class", "removeFromCart");
    removeFromCart.setAttribute("id", "removeFromCartComputerNetwork");
    removeFromCart.innerHTML = "Remove From Cart";
    li.appendChild(removeFromCart);
    document.getElementById("basket").appendChild(li);
    obj.style.display = "none";
}