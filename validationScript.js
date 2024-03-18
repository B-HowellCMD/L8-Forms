document.addEventListener("DOMContentLoaded", function() {
  var inputField = document.getElementById("inputField")

  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault() // Prevents the submission of the form

    // Checks the input field for alphanumeric values 
    if (validateAlphanumeric(inputField.value)) {
      alert("Form sumbitted successfully!")
    } else {
      alert("Error: Only alphanumeric values only. ")
      inputField.focus(); // Puts the focus on the field for the user if there is an error. Found this online, thought it was neat.
    }
  });
  function validateAlphanumeric(value) {
    // ^ anchors the regex; a-z lowercase letters; A-Z uppercase letters; 0-9 numeric values; + makes it so that the form requires at least one alphanumeric value; $ anchors regex at the end
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;

    return alphanumericRegex.test(value);
}
});

//////////////////////////////////////////////////////BRYSON HOWELL/////////////////////////////////////////////////////////
