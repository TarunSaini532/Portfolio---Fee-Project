// smtp- sending email without a server from a browser

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "tarunsaini532@gmail.com",
    Password: "F033A45BF29FE8371AE70F2AA9D37ED44986",
    To: "tarun.esports01@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone No.: " +
      document.getElementById("phone").value +
      "<br> Subject: " +
      document.getElementById("sub").value +
      "<br> Message: " +
      document.getElementById("mess").value,
  }).then((message) => alert("message sent"));
}
