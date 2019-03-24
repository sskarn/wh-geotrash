//Sign In Details
var annDetails;

//Function with alert to see the details of the fill
function getData() {    
    annDetails = document.getElementById("submit").value;
    alert(annDetails);
    
    localStorage.setItem("submit", annDetails);
    
}