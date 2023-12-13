## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

var ct=1;
function timer (){
    console.log(ct);
    ct+=1;
    console.clear();
}
setInterval(timer,1000);