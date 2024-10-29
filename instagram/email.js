 const form = document.getElementById("wrapper");
 function sendEmail(){
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "Username",
        Password: "Password"
        To:''
    })
 }