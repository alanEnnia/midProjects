document.getElementById("GenAiForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const promptInput = document.getElementById("promptInput").value; // Get the value from the input field

    // Fetch the result from the server with the input value as the prompt
    const response = await fetch('/generateContent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: promptInput }) // Send the prompt as JSON data
    });
    const result = await response.text();

    // Update the content of the result div
    document.getElementById("result").innerText = result;
});
