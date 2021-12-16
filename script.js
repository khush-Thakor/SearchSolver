var rowsC = 0;
var column = 0;
window.onload = function(){
    document.getElementById("imageInput").style.display = "none";
    document.getElementById("manualInput").style.display = "none";
    document.getElementById("imageButton").addEventListener("click",function(){
        document.getElementById("manualInput").style.display = "none";
        document.getElementById("imageInput").style.display = "block";
    });
    document.getElementById("manualButton").addEventListener("click",function(){
        document.getElementById("manualInput").style.display = "block";
        document.getElementById("imageInput").style.display = "none";
    });

}
