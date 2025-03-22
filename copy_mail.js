function copyEmail() {
    var tempInput = document.createElement("input");
    tempInput.value = "facchek@outlook.com";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Email copied!");
}