## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.




var ct=1;
function timer (){
    console.log(ct);
    ct+=1;
    console.clear();
    setTimeout(timer,1000);
}
setTimeout(timer,1000);



































































(Hint: setTimeout)