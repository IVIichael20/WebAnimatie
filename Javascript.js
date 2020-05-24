var MyFunction;
document.getElementById("YellowLine1").addEventListener("click", MyFunction);

function MyFunction() {

    var classtoggleY1 = document.getElementById("YellowLine1");
    classtoggleY1.classList.toggle("Y1");
};



var DarkGreenShape;
document.getElementById("Darkgreenshape").addEventListener("click", DarkGreenShape);


function DarkGreenShape() {

    var yellowshapeLToggle = document.querySelector(".YS1");
    yellowshapeLToggle.classList.toggle("LinkerGeleBlok");

    var yellowshapeRToggle = document.querySelector(".YS2");
    yellowshapeRToggle.classList.toggle("RechterGeleBlok");

}








/* var addEvent = document.addEventListener ? function(target,type,action){
    if(target){
        target.addEventListener(type,action,false);
    }                                                                                                                                                                                          
} : function(target,type,action){
    if(target){
        target.attachEvent('on' + type,action,false);
    }
}

addEvent(document,'keydown',function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===68){
        document.getElementById("YellowLine1").style.display = "none";
        console.log("Minkol");
    }
}); 

*/
