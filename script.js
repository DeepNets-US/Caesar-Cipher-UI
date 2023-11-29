// Function to encode a message using the Caesar cipher
function encode(message, shift) {
    let encodedMessage = "";

    // Iterate through each character in the message
    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        // Check if the character is a letter
        if (char.match(/[a-z]/i)) {
            let code = message.charCodeAt(i);

            // Determine the case of the letter (uppercase or lowercase)
            if (code >= 65 && code <= 90) { // Uppercase letters (A-Z)
                char = String.fromCharCode((code + shift));
            } else if (code >= 97 && code <= 122) { // Lowercase letters (a-z)
                char = String.fromCharCode((code + shift));
            }
        }
        encodedMessage += char; // Append the processed character to the encoded message
    }

    return encodedMessage; // Return the encoded message
}

// Execute when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve elements from the HTML document
    const userMsg = document.getElementById("userMsg");
    const rndbtn = document.getElementById("rndbtn");
    const shiftParam = document.getElementById("shiftParam");
    const encodedTxt = document.getElementById("encodedTxt");

    // Event listener for the "Encode" button click
    rndbtn.addEventListener('click', () => {
        // Generate a random shift value if not provided by the user
        let shift = Math.floor(Math.random() * 25) + 1;

        // Get the user's input message
        let userMsgValue = userMsg.value;

        // Check if the user has entered a message
        if (userMsgValue.length === 0) {
            alert("Enter a message first.");
        } else {
            // Use user-provided shift value or random shift if not provided
            shift = (shiftParam.value.length === 0) ? shift : shiftParam.value;

            // Encode the user's message using the provided shift
            let encodedMessage = encode(userMsgValue, parseInt(shift, 10));

            // Display the encoded message in the specified output element
            encodedTxt.textContent = encodedMessage;
        }
    });
});
