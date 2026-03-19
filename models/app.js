// Booking form
document.getElementById('bookingForm')?.addEventListener('submit', async e=>{
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    service: form.service.value,
    date: form.date.value,
    time: form.time.value,
    message: form.message.value
  };
  const res = await fetch('/api/bookings', {
    method:'POST',
    headers:{ 'Content-Type':'application/json' },
    body: JSON.stringify(data)
  });
  const result = await res.json();
  alert(result.message);
  if(res.ok) form.reset();
});

// Scroll to contact
function scrollToContact(){ document.getElementById('contact').scrollIntoView({behavior:'smooth'}); }