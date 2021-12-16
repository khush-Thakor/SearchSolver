window.onload = function(){
    document.getElementById("manualInput").style.display = "none";
    document.getElementById("manualButton").addEventListener("click",function(){
        document.getElementById("manualInput").style.display = "block";
    });
}