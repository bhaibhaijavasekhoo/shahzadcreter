const display = document.getElementById(display);
let timer=null;
let starttime=0;
let elapsedtime=0;
let isrunning=false;

function start(){
if(isrunnin){
    starttime-Date.now()-elapsedtime;
    timer=setInterval(update,1000);
    isrunning=true;
}
}
function stop(){

}
function reset(){

}
function update(){
    const curenttime=date.now();
    elapsedtime=curenttime-starttime;
    
}
