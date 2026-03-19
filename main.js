// =====================
// Navbar dynamic
// =====================
function getCookie(name){ const value=`; ${document.cookie}`; const parts=value.split(`; ${name}=`); if(parts.length===2) return parts.pop().split(';').shift(); }

const navbar=document.getElementById('navbar');
if(navbar){
  const token = getCookie('token');
  if(token){
    navbar.innerHTML = `<a href="/#home">Home</a><a href="/services.html">Services</a><a href="/#gallery">Gallery</a><a href="/about.html">About</a><a href="/#contact">Contact</a><a href="/dashboard.html">Dashboard</a><a href="#" id="logoutBtn">Logout</a>`;
    document.getElementById('logoutBtn').addEventListener('click', async ()=>{
      await fetch('/logout');
      document.cookie='token=; Max-Age=0';
      window.location='/login.html';
    });
  } else {
    navbar.innerHTML = `<a href="/#home">Home</a><a href="/services.html">Services</a><a href="/#gallery">Gallery</a><a href="/about.html">About</a><a href="/#contact">Contact</a><a href="/login.html">Login</a><a href="/register.html">Register</a>`;
  }
}

// =====================
// Booking form
// =====================
const bookingForm = document.getElementById('bookingForm');
if(bookingForm){
  bookingForm.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const formData = {
      name:e.target.name.value,
      email:e.target.email.value,
      service:e.target.service.value,
      date:e.target.date.value,
      time:e.target.time.value,
      message:e.target.message.value
    };
    try{
      await fetch('/api/bookings',{
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body:JSON.stringify(formData)
      });
      alert('✅ Booking saved!');
      e.target.reset();
    }catch(err){
      alert('❌ Error sending booking');
    }
  });
}

// =====================
// Scroll to contact
// =====================
function scrollToContact(){ document.getElementById('contact').scrollIntoView({behavior:'smooth'}); }