function copyEmail() {
    // Create a temporary input element
    var tempInput = document.createElement("input");
    // Set the input value to the email address
    tempInput.value = "facchek@outlook.com";
    // Append the input element to the body
    document.body.appendChild(tempInput);
    // Select the input value
    tempInput.select();
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    // Remove the temporary input element
    document.body.removeChild(tempInput);
    // Alert the user that the email has been copied
    alert("Email copied!");
}