

let counts=document.querySelectorAll(".c");
let time_p=5500;

counts.forEach((count)=>{
    let start=0;
    let end=parseInt(count.getAttribute("data-val"));
    let duration=Math.floor(time_p/end);
    let counter=setInterval(function () {
        start+=1;
        count.textContent=start;
        if(start>=end){
            clearInterval(counter)
        }
    },duration);
});