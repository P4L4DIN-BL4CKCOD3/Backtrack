//The first thing we need to do is to "get" the string from the page.
//We can do this with the "DOM" or Document Object Model in js. 
//CONTROLLER FUNCTION
function getValue(){
    
    document.getElementById("alert").classList.add("invisible");    
    let userString = document.getElementById("userString").value;    
    let revString = reverseString(userString);    
    displayString(revString);
}

//The second thing we want to do is to reverse the string.
//LOGIC FUNCTION
function reverseString(userString){
    
    //Decleare the "revString" variable into an arry.
    let revString = [];    
    //Reverse the decleared array with a "for loop".
    for (let index = userString.length -1; index >= 0; index--) {
        revString += userString[index];
        
    }
    return revString;
}

//The third thing we want to do is to display the results to the user.
//VIEW FUNCTION
function displayString(_revstring){
    
    //Write the output of "revString" to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${_revstring}`;    
    //Turn on the "alert box" to diplay the output of "revString"
    document.getElementById("alert").classList.remove("invisible");

}