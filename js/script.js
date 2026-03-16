// smooth scroll
function scrollContact(){
document.getElementById("contact").scrollIntoView({
behavior:"smooth"
});
}

// dark mode
const btn = document.getElementById("darkModeBtn");

btn.addEventListener("click",()=>{
document.body.classList.toggle("dark");
});

// scroll animations
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{

elements.forEach(el=>{
const position = el.getBoundingClientRect().top;

if(position < window.innerHeight - 100){
el.classList.add("show");
}

});

});

// booking form
document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Booking request sent successfully!");

this.reset();

});