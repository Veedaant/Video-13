let ctr = 0;

function Callback(){
    console.log(ctr);
    ctr = ctr+1;
}

setInterval(Callback,1000);