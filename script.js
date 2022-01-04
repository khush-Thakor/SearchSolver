var rowsC = 0;
var column = 0;
var inputMap =[];
var words = [];
var res = [];
var resV = [];
var wordCount = 0;

var letters = [
    ["N","C","P","A","P","E","R","O","V","M","G","K"],
    ["F","I","Z","D","H","X","U","T","R","E","E","W"],
    ["Y","B","A","G","S","L","Q","M","C","J","P","O"],
    ["G","N","K","F","T","R","E","U","S","E","V","H"],
    ["L","Q","E","L","P","F","S","X","I","B","M","D"],
    ["A","J","V","O","H","T","K","N","G","Z","U","A"],
    ["S","I","B","W","A","E","E","R","O","P","C","Y"],
    ["S","M","G","E","X","D","Z","A","H","L","Q","F"],
    ["O","P","U","R","S","W","C","L","E","A","N","T"],
    ["K","Y","M","S","A","G","P","B","V","N","I","Z"],
    ["C","E","A","R","T","H","F","O","D","T","J","U"],
    ["W","P","L","N","K","S","A","V","E","M","Y","R"],
    ];
var wordsT = ["Bags","Flowers","Reuse","Clean","Glass","Save","Day","Paper","Tree","Earth","Plant","Water"];

window.onload = function(){
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
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
    document.getElementById("testButton").addEventListener("click",test)
    document.getElementById("manualSubmitButton").addEventListener("click",function(){
        rowsC = document.getElementById("manualRowsInput").value;
        column = document.getElementById("manualColsInput"). value;
        document.getElementById("manualInputArea").remove();
        let manualInputArea = document.createElement("div");
        let title  = document.createElement("h3");
        title.innerHTML = "Insert Word Search Letters"
        manualInputArea.append(title);
        manualInputArea.id = "manualInputArea"
        manualInputArea.className = "manualInputArea"
        document.getElementById("manualInfoInput").appendChild(manualInputArea);
        for (let k = 0;k<rowsC;k++){
        for (let  i = 0;i<column;i++){
            let input = document.createElement("input");
            input.className = "small-input";
            input.maxLength = 1;
            input.id = "letterInput"+k+i; 
            document.getElementById("manualInputArea").append(input);
        }
        document.getElementById("manualInputArea").append(document.createElement("br"));   
    }
    var container = document.getElementsByClassName("manualInputArea")[0];
    container.addEventListener("keyup",moveToNext);
    let titleW = document.createElement("h3");
    titleW.innerHTML = "Enter Words";
    document.getElementById("manualInputArea").appendChild(titleW);
    for (let i = 0;i<parseInt(document.getElementById("manualWordsInputSize").value);i++){
        let inputW = document.createElement("input");
        inputW.id = "word"+i;
        let inputwT = document.createElement("h5");
        inputwT.innerHTML = "Word "+(i+1);
        inputW.maxLength = 10;
        manualInputArea.appendChild(inputwT);
        manualInputArea.appendChild(inputW);
        wordCount++;
    }
    document.getElementById("manualInputArea").appendChild(document.createElement("br"));
    let mSubmitButton = document.createElement("button");
    mSubmitButton.className = "btn btn-success";
    mSubmitButton.id = "mSubmitButton";
    mSubmitButton.innerHTML = "Submit";
    document.getElementById("manualInputArea").appendChild(mSubmitButton);
    document.getElementById("mSubmitButton").addEventListener("click",function(){
        for (let k = 0;k<rowsC;k++){
            let row = [];
            for (let i = 0;i<column;i++){
                row.push(document.getElementById("letterInput"+k+i).value);
            }
            inputMap.push(row);
        }
        for (let i = 0;i<wordCount;i++){
            words.push(document.getElementById("word"+i).value);
            words[i] = words[i].toUpperCase();
        }
        for (let i = 0;i<words.length;i++){
            let wordL = 0;
            for(let r = 0;r<inputMap.length;r++){
                for(let c= 0;c<inputMap[r].length-words[i].length+1;c++){
                    if (inputMap[r][c]==words[i].substring(wordL,wordL+1)){
                        let notFound = false;
                        var co = [r,c];
                        c++;
                        wordL++;
                        while(!notFound){
                            if (inputMap[r][c]==words[i].substring(wordL,wordL+1)){
                                c++;
                                wordL++;
                                if (wordL==words[i].length){
                                    co.push(r);
                                    co.push(c-1);
                                    res.push(co);
                                    console.log("Found "+words[i]+" at "+co[0]+" "+co[1]+" "+co[2]+" "+co[3]);
                                }
                            }
                            else {
                                wordL = 0;
                                notFound = true;
                            }
                        }
                    }
                }
            }
            for (let c = 0;c<column;c++){
                for (let r = 0;r<inputMap.length-words[i].length;r++){
                    if (inputMap[r][c]==words[i].substring(wordL,wordL+1)){
                        let notFound = false;
                        var co = [r,c];
                        r++;
                        wordL++;
                        while(!notFound){
                            if (inputMap[r][c]==words[i].substring(wordL,wordL+1)){
                                r++;
                                wordL++;
                                if (wordL==words[i].length){
                                    co.push(r-1);
                                    co.push(c);
                                    resV.push(co);
                                    console.log("Found Horizontally "+words[i]+" at "+co[0]+" "+co[1]+" "+co[2]+" "+co[3]);
                                }
                            }
                            else {
                                wordL = 0;
                                notFound = true;
                            }
                        }
                    }
                }
                }
            }
            console.log(res);
        let yL = 20;
        for (let k = 0;k<rowsC;k++){
            let xL = 10;
            for (let i = 0;i<column;i++){
                for (let a = 0; a<res.length;a++){
                        if (k==res[a][0]&&i==res[a][1]){
                            context.fillText(inputMap[k][i],xL,yL);
                            context.fillText(inputMap[k][i],xL,yL);
                            context.fillText(inputMap[k][i],xL,yL);
                            context.moveTo(xL,yL);
                            context.beginPath();
                            context.arc(xL,yL-3,10,Math.PI*1.5,Math.PI/2,true);
                            context.stroke();
                            context.lineTo(xL+((res[a][3]-res[a][1])*50),yL+7);
                            context.stroke();
                        }
                        if (k==res[a][2]&&i==res[a][3]){
                            context.fillText(inputMap[k][i],xL,yL);
                            context.fillText(inputMap[k][i],xL,yL);
                            context.fillText(inputMap[k][i],xL,yL);
                            context.moveTo(xL,yL);
                            context.beginPath();
                            context.arc(xL,yL-3,10,Math.PI/2,Math.PI*1.5,true);
                            context.stroke();
                            context.lineTo(xL-((res[a][3]-res[a][1])*50),yL-13);
                            context.stroke();
                        }

                }
                for (let a = 0; a<resV.length;a++){
                        if (k==resV[a][0]&&i==resV[a][1]){
                            context.fillText(inputMap[k][i],xL,yL);
                            context.fillText(inputMap[k][i],xL,yL);
                            context.fillText(inputMap[k][i],xL,yL);
                            context.moveTo(xL,yL);
                            context.beginPath();
                            context.arc(xL+3,yL,10,0,Math.PI,true);
                            context.stroke();
                            context.lineTo(xL-7,yL-((resV[a][0]-resV[a][2])*50));
                            context.stroke();
                        }
                        if (k==resV[a][2]&&i==resV[a][3]){
                            context.fillText(inputMap[k][i],xL,yL);
                            context.fillText(inputMap[k][i],xL,yL);
                            context.fillText(inputMap[k][i],xL,yL);
                            context.moveTo(xL,yL);
                            context.beginPath();
                            context.arc(xL+3,yL,10,Math.PI,0,true);
                            context.stroke();
                            context.lineTo(xL+13,yL+((resV[a][0]-resV[a][2])*50));
                            context.stroke();
                        }
                }
                context.fillText(inputMap[k][i],xL,yL);
                xL+=50;
            }
            yL+=50;
        }
       
 });
    });
    //Solve 
    function moveToNext(e){
    var target = e.srcElement || e.target;
    var maxLength = target.maxLength;
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}
function test(){
    document.getElementById("manualButton").click();
    document.getElementById("manualRowsInput").value = 12;
    document.getElementById("manualColsInput").value = 12;
    document.getElementById("manualWordsInputSize").value = 12;
    document.getElementById("manualSubmitButton").click();
    for (let i = 0;i<rowsC;i++){
        for (let  k = 0;k<column;k++){
            document.getElementById("letterInput"+i+k).value = letters[i][k];
        }
    }
    for(let  i = 0;i<wordsT.length;i++){
        document.getElementById("word"+i).value = wordsT[i]
    }
    document.getElementById("mSubmitButton").click();
}
}
