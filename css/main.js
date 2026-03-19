// -------------------
// Dynamic Navbar
// -------------------
function getCookie(name){ 
  const value = `; ${document.cookie}`; 
  const parts = value.split(`; ${name}=`); 
  if(parts.length === 2) return parts.pop().split(';').shift();
}

const navbar = document.getElementById('navbar');
const token = getCookie('token');

if(token){
  navbar.innerHTML = `
    <a href="#home">Home</a>
    <a href="#services">Services</a>
    <a href="#gallery">Gallery</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <a href="/dashboard">Dashboard</a>
    <a href="#" id="logoutBtn">Logout</a>`;
  
  document.getElementById('logoutBtn').addEventListener('click', async () => {
    await fetch('/logout');
    document.cookie = 'token=; Max-Age=0';
    window.location = '/login';
  });
}else{
  navbar.innerHTML = `
    <a href="#home">Home</a>
    <a href="#services">Services</a>
    <a href="#gallery">Gallery</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <a href="/login">Login</a>
    <a href="/register">Register</a>`;
}

// -------------------
// Smooth Scroll
// -------------------
document.querySelectorAll('nav a').forEach(link => {
  if(link.hash){
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({behavior:'smooth'});
    });
  }
});

// -------------------
// Booking Form
// -------------------
document.getElementById('bookingForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = { 
    name:e.target.name.value, 
    email:e.target.email.value, 
    service:e.target.service.value, 
    date:e.target.date.value, 
    time:e.target.time.value, 
    message:e.target.message.value 
  };

  try {
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const result = await res.json();
    if(result.message){
      alert("✅ Booking saved!");
      e.target.reset();
    } else {
      alert("❌ "+result.error);
    }
  } catch(err){
    console.log(err);
    alert("❌ Error sending booking");
  }
});

// -------------------
// Scroll to Contact
// -------------------
function scrollToContact(){ 
  document.getElementById("contact").scrollIntoView({behavior:"smooth"}); 
}

// -------------------
// Gallery Lightbox
// -------------------
const galleryImages = document.querySelectorAll('.gallery img');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImage = document.getElementById('lightboxImage');
const closeBtn = document.querySelector('.closeBtn');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImage.src = img.src;
    lightboxOverlay.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => lightboxOverlay.style.display='none');
lightboxOverlay.addEventListener('click', e => {
  if(e.target === lightboxOverlay) lightboxOverlay.style.display='none';
});