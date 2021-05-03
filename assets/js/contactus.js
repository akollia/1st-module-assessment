$(document).ready(function() {
    // document.getElementById("contact-us").onsubmit = function() { sendContact() };

    $('#submit-button').click(function() {
        sendContact()
    })

    // $('#submit-button').on('click', function() {
    //     alert($('#fname').value)
    // });

    function sendContact() {
        // var nameValue = document.getElementById("fname").value;
        // var lnameValue = document.getElementById("lname").value;
        var contactForm = {
            firstName: document.getElementById("fname").value,
            lastName: document.getElementById("lname").value,
            country: document.getElementById("country").value,
            message: document.getElementById("subject").value
        };

        // http request to a backend service
        alert(JSON.stringify(contactForm, null, 4));
    }
});