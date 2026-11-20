// Show a message when the demo contact form is submitted.
function showMessage() {
  var customerName = document.getElementById("name").value;

  alert("Thank you, " + customerName + ". Your message has been sent. We will get back to you shortly.");

  return false;
}
