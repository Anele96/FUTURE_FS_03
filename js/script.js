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
async function toggleLike(imageId, imagePath, btn){

  try{
    const email = prompt("Enter email:");
    if(!email) return;

    const heart = btn.querySelector(".heart");

    heart.innerText = heart.innerText === "🤍" ? "❤️" : "🤍";

    const res = await fetch("/api/likes", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({
        userEmail: email,
        imageId,
        imagePath
      })
    });

    if(!res.ok) throw new Error("Like failed");

  }catch(err){
    console.error(err);
    alert("Like failed ❌");
  }
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