console.log("toggle")
function myFunction(){
    var x = document.getElementById("nav-menu")

    if(x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}