
/* Tab Button Function */
function agentType(agent){
    var i ;
    var x=document.getElementsByClassName("agents");
    for(i=0; i<x.length;i++){
        x[i].style.display="none";
    }
    document.getElementById(agent).style.display="block"
}
/* Tab Button Function Codding Stop */