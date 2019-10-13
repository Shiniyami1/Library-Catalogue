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
delete date;

//ADD to Cart Procedures
document.getElementById("addComputer").onclick = function() {addToCartFunc("Computer Networking: A Top-Down Approach", dueDateForBooks, this.parentNode.parentNode, "removeFromCartComputer")}; //Simplified second paramater as due date for all books are equivalent
document.getElementById("addWebProg").onclick = function() {addToCartFunc("Web Programming by zyBooks", dueDateForBooks, this.parentNode.parentNode, "removeFromCartWebProg")};
document.getElementById("addHarryPotter").onclick = function() {addToCartFunc("Harry Potter and the Deathly Hallows", dueDateForBooks, this.parentNode.parentNode, "removeFromCartHarryPotter")};
document.getElementById("addOrientExp").onclick = function() {addToCartFunc("Murder on the Orient Express", dueDateForBooks, this.parentNode.parentNode, "removeFromCartOrientExp")};
document.getElementById("addGatsby").onclick = function() {addToCartFunc("The Great Gatsby", dueDateForBooks, this.parentNode.parentNode, "removeFromCartGatsby")};
document.getElementById("addGoT").onclick = function() {addToCartFunc("A Song of Ice & Fire", dueDateForBooks, this.parentNode.parentNode, "removeFromCartGoT")};
document.getElementById("addColdplay").onclick = function() {addToCartFunc("Coldplay: Parachutes (Album)", dueDateForCDs, this.parentNode.parentNode, "removeFromCartColdplay")};
document.getElementById("addDrake").onclick = function() {addToCartFunc("Drake: More Life (Album)", dueDateForCDs, this.parentNode.parentNode, "removeFromCartDrake")};
document.getElementById("addMJ").onclick = function() {addToCartFunc("Michael Jackson: Bad (Album)", dueDateForCDs, this.parentNode.parentNode, "removeFromCartMJ")};
document.getElementById("addPilots").onclick = function() {addToCartFunc("Twenty-One Pilots: Blurryface (Album)", dueDateForCDs, this.parentNode.parentNode, "removeFromCartPilots")}; 

function addToCartFunc(nameStr, dueStr, obj, removeID) {
    if(basket.innerHTML!="none")
        checkoutBtn.style.display="";
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(nameStr + " (due on " + dueStr + ") "));
    var removeFromCart = document.createElement("button");
    removeFromCart.setAttribute("type", "button");
    removeFromCart.setAttribute("class", "removeFromCart");
    removeFromCart.setAttribute("id", removeID);
    removeFromCart.onclick = function(){removeFromCartFunc(this.parentNode, removeID)};
    removeFromCart.innerHTML = "Remove From Cart";
    li.appendChild(removeFromCart);
    document.getElementById("basket").appendChild(li);
    obj.style.display = "none";
}

//Remove From Cart Function
function removeFromCartFunc(removeParent, removeID){
    var temp = document.getElementsByTagName("tr");
    switch(removeID){
        case "removeFromCartComputer":
            temp[1].style.display="";
            break;
        case "removeFromCartWebProg":
            temp[2].style.display="";
            break;
        case "removeFromCartHarryPotter":
            temp[3].style.display="";
            break;
        case "removeFromCartOrientExp":
            temp[4].style.display="";
            break;
        case "removeFromCartGatsby":
            temp[5].style.display="";
            break;
        case "removeFromCartGoT":
            temp[6].style.display="";
            break;
        case "removeFromCartColdplay":
            temp[7].style.display="";
            break;
        case "removeFromCartDrake":
            temp[8].style.display="";
            break;
        case "removeFromCartMJ":
            temp[9].style.display="";
            break;
        case "removeFromCartPilots":
            temp[10].style.display="";
            break;
    }
    removeParent.parentNode.removeChild(removeParent);
    if (basket.innerHTML=="")
        checkoutBtn.style.display="none";

}

//CHECKOUT Buttons and Methods
var checkoutBtn = document.getElementById("checkoutBtn");
var basket = document.getElementById("basket");
//Hide Checkout Button until there are items to checkout
checkoutBtn.style.display="none";
checkoutBtn.onclick = getConfirmation;

function getConfirmation() {
    var retVal = confirm("Are you sure you want to checkout?");
    if(retVal == true ) {
       basket.innerHTML="";
       alert("Successfully checked out!\nPlease adhere to return policy and return items by their listed due dates!");
       checkoutBtn.style.display="none";
    }
    else {
       basket.innerHTML="";
       var tableItems = document.getElementsByTagName("tr");
       for(var i = 0; i < tableItems.length; i++){
           tableItems[i].style.display="";
       }
       checkoutBtn.style.display="none";
    }
 }