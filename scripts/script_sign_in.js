//Sign In Details
var annDetails;

//Function with alert to see the details of the post
function getData() {    
    annDetails = document.getElementById("details").value;
    alert(annDetails);
    
    localStorage.setItem("details", annDetails);
    
}