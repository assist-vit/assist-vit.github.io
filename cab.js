document.addEventListener("DOMContentLoaded", function() {
    // Attach an event listener to the form submission
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the form from submitting the traditional way

        // Get form data
        const formData = new FormData(event.target);
        const formObject = {};
        
        // Convert FormData to a plain object
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Send form data as JSON to Google Apps Script
        fetch("https://script.google.com/macros/s/AKfycbxtG2lUABQ3dmBBCE_qHM_fWXfdCL-81mo2p2ofQSeC3cZ13x-BzqchCTW0dn9_Bk_T/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formObject)  // Convert form data to JSON string
        })
        .then(response => response.json())  // Parse JSON response from Apps Script
        .then(data => {
            console.log("Success:", data);
            alert("Form submitted successfully!");  // Show success alert
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to submit form.");  // Show error alert
        });
    });
});
