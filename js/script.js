function handleForm(event) {

event.preventDefault();

alert("Thank you! Your booking request has been sent.");

event.target.reset();

return false;

}