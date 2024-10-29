const form = document.querySelector("form")
function sendEmail(){


Email.send({
    Host : "smtp.elasticemail.com",
    Username : "shariqalam4192@gmail.com",
    Password : "F9B27BEF29D1F58C0116CDE7818E98958968",
    To : 'shariqalam4192@gmail.com',
    From : "shariqalam4192@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    sendEmail();
})