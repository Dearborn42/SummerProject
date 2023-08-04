let i=0;
let events = ["pic1", "pic2", "pic3"];

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