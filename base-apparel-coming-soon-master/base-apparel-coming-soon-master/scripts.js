document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("email-form").addEventListener("submit", function(event) {
        event.preventDefault();

        var form = event.target;
        var formData = new FormData(form);

       

        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                document.querySelector(".email-form-alert").textContent = "Thank you for subscribing!";
                document.querySelector(".email-form-alert").classList.add("success");
            } else {
                document.querySelector(".email-form-alert").textContent = "Sorry, there was an error. Please try again.";
                document.querySelector(".email-form-alert").classList.add("error");
            }
        })
        .catch(error => {
            document.querySelector(".email-form-alert").textContent = "Network error. Please try again later.";
            document.querySelector(".email-form-alert").classList.add("error");
        });
    });
});
