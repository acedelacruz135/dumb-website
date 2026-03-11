let slides=document.querySelectorAll(".slide");
let index=0;

function showSlide(i){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[i].classList.add("active");

}


function nextSlide(){

index++;

if(index>=slides.length){
index=0;
}

showSlide(index);

}



function prevSlide(){

index--;

if(index<0){
index=slides.length-1;
}

showSlide(index);

}



let auto=setInterval(nextSlide,3000);



let slider=document.getElementById("slider");

slider.addEventListener("mouseenter",()=>{
clearInterval(auto);
});

slider.addEventListener("mouseleave",()=>{
auto=setInterval(nextSlide,3000);
});



slides.forEach(slide=>{

if(slide.tagName==="VIDEO"){

slide.addEventListener("play",()=>{
clearInterval(auto);
});

slide.addEventListener("pause",()=>{
auto=setInterval(nextSlide,3000);
});

}

});



slides.forEach(media=>{

media.onerror=function(){

let bar=document.getElementById("errorBar");

bar.style.display="block";

setTimeout(()=>{
bar.style.display="none";
},4000);

};

});
