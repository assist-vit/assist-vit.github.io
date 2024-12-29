document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from reloading the page

    // Get form values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // Data to be sent to Google Apps Script
    const formData = {
        name: name,
        age: age
    };

    // URL of your deployed Google Apps Script
    const scriptUrl = "https://script.google.com/macros/s/AKfycbwyuDjlQHsG99E89mdOKBStylkQGFUFUNe73netKzcJzwxZrgCe4WagpSvxE57WvDLW/exec";

    // Send the data to the Google Apps Script endpoint
    fetch(scriptUrl, {
        redirect: "follow", // Follow any redirects from the server
        method: "POST",
        body: JSON.stringify(formData), // Convert the formData object to JSON string
        headers: {
            "Content-Type": "application/json;charset=utf-8", // Set the correct Content-Type for JSON
        },
    })
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        console.log("Success:", data);
        alert("Data submitted successfully!");
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("There was an error submitting the form.");
    });
});
