function sendMail(){
    var params = {
        from_name : document.getElementById("fullname").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_c5buabe","template_qxelshc", params).then(function (res) {
        alert("message send " + res.status);
    })
}