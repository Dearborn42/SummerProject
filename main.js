let i=0;
let events = ["I hung out with my girlfriend throughout the summer. We went out to dinner, the gym, to each other's house, on car rides, and numerous other activities.", "Over the summer I got a flat tire and had to fix it. During the process my wrench broke and I had to wait for my dad to get me a new one. The jack that sat out in the sun started to melt the asphalt of the road from the Arizona heat.", "Over the summer I started to go to a different gym with my friends. We spent have been going every day."];

$(".carousel-control-next").on("click", ()=>{
    if(i<2) i++;
    else i=0;
    $(".card-text").html(events[i]);
})
$(".carousel-control-prev").on("click", ()=>{
    if(i>0) i--;
    else i=2;
    $(".card-text").html(events[i]);
})

function toggleDMode(){
    $("body").toggleClass("dark-mode");
}