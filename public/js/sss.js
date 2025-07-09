function verifyDocument() {
    const fileInput = document.getElementById('fileInput');
    const resultText = document.getElementById('resultText');

    // Reset result text
    resultText.textContent = "Processing...";
    resultText.className = "processing";

    // Check if a file is selected
    if (!fileInput.files[0]) {
        resultText.textContent = "Please upload a document to verify.";
        return;
    }

    const fileName = fileInput.files[0].name.toLowerCase();

    // Simulate file name processing
    setTimeout(() => {
        if (fileName.includes('r')) {
            resultText.textContent = "Result: Real";
            resultText.className = "result-real";
        } else if (fileName.includes('f')) {
            resultText.textContent = "Result: Fake";
            resultText.className = "result-fake";
        } else {
            resultText.textContent = "Unable to determine result.";
            resultText.className = "result-unknown";
        }
    }, 3000);

    // Prepare the file for upload
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    // Send file to the server
    fetch('http://127.0.0.1:5000/verify', {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
            return response.json(); // Process the server's JSON response
        })
        .then(data => {
            // Handle server response
            console.log('Server response:', data);
            resultText.textContent = `Server Response: ${data.message || "File verified successfully."}`;
        })
        .catch(error => {
            console.error('Error during verification:', error);
            resultText.textContent = "An error occurred during verification.";
            resultText.className = "result-fake"; // Optional: Set a specific class for error
        });
}

function navigateTo(page) {
    window.location.href = page; // Navigate to the provided URL
}
