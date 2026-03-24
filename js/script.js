document.getElementById("bookingForm")?.addEventListener("submit", async (e)=>{
  e.preventDefault();

  const f = e.target;

  await fetch("/api/bookings", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      name:f.name.value,
      email:f.email.value,
      service:f.service.value,
      date:f.date.value,
      time:f.time.value,
      message:f.message.value
    })
  });

  alert("Booking sent!");
  f.reset();
});

/* LIKE SYSTEM */
function toggleLike(imageId, imagePath, btn){
  const heart = btn.querySelector(".heart");

  heart.innerText = heart.innerText === "🤍" ? "❤️" : "🤍";

  alert("Liked ❤️)");
}

function toggleMode(){
  document.body.classList.toggle("light-mode");

  const btn = document.getElementById("modeBtn");

  if(document.body.classList.contains("light-mode")){
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
}