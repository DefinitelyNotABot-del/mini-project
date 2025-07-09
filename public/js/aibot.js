// Function to toggle chatbot visibility
function toggleChat() {
    const chatPopup = document.getElementById("chatPopup");
    chatPopup.style.display = chatPopup.style.display === "block" ? "none" : "block";
}
// Function to toggle chatbot visibility
function toggleChat() {
    const chatPopup = document.getElementById("chatPopup");
    chatPopup.style.display = chatPopup.style.display === "block" ? "none" : "block";
}

// Text-to-Speech function
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        // Select the female voice
        const femaleVoice = voices.find(voice => voice.name.toLowerCase().includes("female")) || voices[0];
        utterance.voice = femaleVoice;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Text-to-speech is not supported in this browser.");
    }
}

// Sample responses
const botReplies = {
    "hello": "Hi! How can I assist you today?",
    "events":"Our department is hosting exciting events like the Datathon and Hackathon. Stay tuned for updates!",
    "bye": "Goodbye! Have a great day!",
    
    // Responses related to CSE-AIML department
    "cse-aiml department": "The CSE-AIML department focuses on Computer Science with a specialization in Artificial Intelligence and Machine Learning.",
    "hod": "The Head of the CSE-AIML department is Dr. Nandeeswar S B",
    "faculty": "Our department has experienced faculty like Dr. Lokesh , Dr.Vijay Kumar, Kavya P, Ambili K, L Sreenivas Perumal, Vinaya S, Bhagya Shree, Swati Srikanth .",
    "subjects": "Key subjects in CSE-AIML include Machine Learning, Artificial Intelligence, Data Structures, AI, Theory of Computation.",
    "usn details": "Your USN (University Seat Number) can be found on your student profile page or your admission letter. If you have trouble locating it, contact the department admin.",
    "exam dates": "The upcoming semester exams for CSE-AIML are scheduled from December 16th to December 18th, 2024.",
    "internship": "Eduskill Internships, Redhat, and AWS courses are provided.",
    "research": "Students are encouraged to collaborate on research papers in AI and machine learning.",
    "project guidance": "Faculty members are available to guide you on your projects.",
    "club activities": "The CSE-AIML department has an active NeuronNet Club that organizes workshops and seminars.",
    "clubs": "NeuronNet, Fusion Fiesta, Entrepreneur Club, Quantum Quicks",
    "Deadlines": "Submit your project proposals by December 10th, 2024. Contact your project guide for further details.",
    "SEPM (A)": "A section Monday:11:30-12:20  Tuesday: 9:30-10:20  Thursday: 10:20-11:10 Friday:11:30-12:20 ",
    "SEPM (B)": "B section Monday:11:30-12:20  Tuesday: 9:30-10:20  Thursday: 10:20-11:10 Friday:11:30-12:20 ",
    "Computer Networks (A)": "A section Monday: 10:00-11:00, Wednesday: 10:00-11:00, Friday: 10:00-11:00.",
    "Computer Networks (B)": "B section Monday: 11:30-12:30, Wednesday: 11:30-12:30, Friday: 11:30-12:30.",
    "TOC (A)": "A section Monday: 9:00-10:00, Wednesday: 9:00-10:00, Friday: 9:00-10:00.",
    "TOC (B)": "B section Monday: 2:00-3:00, Wednesday: 2:00-3:00, Friday: 2:00-3:00.",
    "DV Lab(A)": "A section Tuesday: 11:30-1:30, Thursday: 11:30-1:30.",
    "DV Lab (B)": "B section Tuesday: 2:00-4:00, Thursday: 2:00-4:00.",
    "Computer vision (A)": "A section Monday: 12:00-1:00, Wednesday: 12:00-1:00, Friday: 12:00-1:00.",
    "Computer vision (B)": "B section Monday: 1:30-2:30, Wednesday: 1:30-2:30, Friday: 1:30-2:30.",
    "R M (A)": "A section Tuesday: 9:00-10:00, Thursday: 9:00-10:00.",
    "R M (B))": "B section Tuesday: 3:00-4:00, Thursday: 3:00-4:00.",
    "CN lab (A)": "A section Monday: 2:00-3:00, Wednesday: 2:00-3:00, Friday: 2:00-3:00.",
    "CN lab (B)": "B section Monday: 3:30-4:30, Wednesday: 3:30-4:30, Friday: 3:30-4:30.",
    "Staff room": "CSE-AIML Department staff room is in 5th floor Main Building.",
    "Honours Degree": "To get more details on Honours Degree enquire Assistant Professor Vinaya.",
    "scholarship":"Need to inquire in the administration block accounts department.",

    "timetable": "Here is the timetable:",
    "ia paper": "Here is the IA paper:",
};

// Function to send and display messages
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    // Display user message
    displayMessage(userInput, "user-message");

    // Get bot response
    getBotResponse(userInput.toLowerCase());

    document.getElementById("userInput").value = ""; // Clear input
}

function displayMessage(message, className) {
    const messageContainer = document.createElement("div");
    messageContainer.className = `message ${className}`;
    messageContainer.textContent = message;

    document.getElementById("messages").appendChild(messageContainer);
    document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight; // Auto-scroll
}

// Function to get bot's response, display it, and read it aloud
function getBotResponse(userMessage) {
    // Convert user message to lowercase for case-insensitive comparison
    const lowerCaseMessage = userMessage.toLowerCase();

    let botResponse = botReplies[lowerCaseMessage] || "Sorry, I didn't understand that. Can you please ask something else?";

    const botContainer = document.createElement("div");
    botContainer.className = "bot-message";

    const botImage = document.createElement("img");
    botImage.src = "robot.jpeg"; // Path to the uploaded robot image
    botImage.alt = "Robot";

    const botText = document.createElement("div");
    botText.className = "bot-text";
    botText.textContent = botResponse;

    // Check for specific responses using includes() for flexibility
    if (lowerCaseMessage.includes("deadlines")) { // Matching 'deadlines' in the input text
        botResponse = "Important Deadline: Submit your project proposals by December 10th, 2024. Don't miss it!";
        botText.textContent = botResponse;
    } else if (lowerCaseMessage.includes("sepm (a)")) { // Matching 'sepm subject' in the input text
        botResponse = "Here are the SEPM subject timings for A Section: Monday 11:30-12:20, Tuesday 9:30-10:20, Thursday 10:20-11:10, Friday 11:30-12:20.";
        botText.textContent = botResponse;
    } else if(lowerCaseMessage.includes("sepm (b)")) { // Matching 'sepm subject' in the input text
        botResponse = "Here are the SEPM subject timings for B Section: Monday 9:30-10:20, Tuesday 2:00-2:50, Thursday 11:30-12:20, Friday 9:30-10:20.";
        botText.textContent = botResponse;
    }
    else if (lowerCaseMessage.includes("computer networks (a)")) {
        botResponse = "Here are the Computer Networks (A) section timings: Monday 2:00-2:50, Tuesday 11:30-12:20, Thursday 11:30-12:20.";
        botText.textContent = botResponse;
    } else if (lowerCaseMessage.includes("computer networks (b)")) {
        botResponse = "Here are the Computer Networks (B) section timings: Monday 11:30-12:20, Thursday 12:20-1:10 and 2:50-3:40.";
        botText.textContent = botResponse;
    } else if (lowerCaseMessage.includes("toc (a)")) {
        botResponse = "Here are the Theory of Computation (A) section timings: Monday 10:20-11:10, Tuesday 10:20-11:10,Wednesday 11:30-12:20, Thursday 9:00-10:20.";
        botText.textContent = botResponse;
    } else if (lowerCaseMessage.includes("toc (b)")) {
        botResponse = "Here are the Theory of Computation (B) section timings: Monday 2:00-2:50, Tuesday 12:20-1:10,Wednesday 9:30-10:20 and 2:00-2:50, Friday 10:20-11:10.";
        botText.textContent = botResponse;
    } else if (lowerCaseMessage.includes("dv lab (a)")) {
        botResponse = "Here are the DV Lab (A) section timings: Friday 9:30-10:20 and 2:00-3:40";
        botText.textContent = botResponse;
    } else if (lowerCaseMessage.includes("dv lab (b)")) {
        botResponse = "Here are the DV Lab (B) section timings: Tuesday 9:30-11:10 and Thursday 9:30-11:30.";
        botText.textContent = botResponse;
    } else if (lowerCaseMessage.includes("computer vision (a)")) {
        botResponse = "Here are the Computer Vision (A) section timings: Tuesday 2:00-2:50, Wednesday 12:20-1:10, Thursday 2:00-2:50.";
        botText.textContent = botResponse;
    } else if (lowerCaseMessage.includes("computer vision (b)")) {
        botResponse = "Here are the Computer Vision (B) section timings: Monday 10:20-11:10, Tuesday 11:30-12:20, Wednesday 10:20-11:10.";
        botText.textContent = botResponse;
    } else if (lowerCaseMessage.includes("r m (a)")) {
        botResponse = "Here are the R M (A) section timings: Monday 9:30-10:20 and 2:50-3:40,Tuesday 12:20-1:10,.";
        botText.textContent = botResponse;
    } else if (lowerCaseMessage.includes("r m (b)")) {
        botResponse = "Here are the R M (B) section timings: Monday 12:20-1:10, Thursday 2:00-2:50, Friday 11:30-12:20.";
        botText.textContent = botResponse;
    } else if (lowerCaseMessage.includes("cn lab (a)")) {
        botResponse = "Here are the CN Lab (A) section timings:Friday 9:30-10:20 and 2:00-3:40.";
        botText.textContent = botResponse;
    } else if (lowerCaseMessage.includes("cn lab (b)")) {
        botResponse = "Here are the CN Lab (B) section timings: Tuesday 9:30-11:10 and Thursday 9:30-11:30";
        botText.textContent = botResponse;
    }
    else if (lowerCaseMessage.includes("staff room")) { 
        // Matching 'staff room' in the input text
        botResponse = "CSE-AIML Department staff room is in the 5th floor of the Main Building.";
        botText.textContent = botResponse;
    } else if (lowerCaseMessage.includes("honours degree")) { 
        // Matching 'honours degree' in the input text
        botResponse = "To get more details on Honours Degree, enquire with Assistant Professor Vinaya.";
        botText.textContent = botResponse;
    } else if (lowerCaseMessage.includes("scholarship")) { 
        // Matching 'scholarship' in the input text
        botResponse = "Need to inquire in the administration block accounts department.";
        botText.textContent = botResponse;
    }
    
    else if (lowerCaseMessage.includes("timetable")) {
        const link = document.createElement("a");
        link.href = "timetable.pdf"; // Path to your timetable PDF file
        link.download = "timetable.pdf"; // File name for download
        link.textContent = "Click here to download the timetable.";
        link.style.color = "#6A0DAD"; // Optional styling
        link.style.textDecoration = "underline";
        botText.appendChild(link); // Append the link
    } else if (lowerCaseMessage.includes("ia paper")) {
        botResponse = "Here is the IA paper:";
        const link = document.createElement("a");
        link.href = "ia.pdf"; // Path to your IA paper PDF file
        link.download = "IA_Paper.pdf"; // File name for download
        link.textContent = "Click here to download the IA paper.";
        link.style.color = "#6A0DAD"; // Optional styling
        link.style.textDecoration = "underline";
        botText.appendChild(link); // Append the link
    } else {
        botText.textContent = botResponse; // Default response
    }

    // Append bot image and text to container
    botContainer.appendChild(botImage);
    botContainer.appendChild(botText);

    // Simulate delay, display the bot message, and speak it
    setTimeout(() => {
        document.getElementById("messages").appendChild(botContainer);
        document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight; // Auto-scroll
        speak(botResponse); // Speak out the bot's response
    }, 500);
}

// Function to allow sending message with Enter key
function checkEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}


// Load available voices
let voices = [];
function loadVoices() {
    voices = window.speechSynthesis.getVoices();
}

// Greet user when chatbot loads
function greetUser() {
    const greeting = "Hi, welcome to ASK AI, how can I help you?";
    document.getElementById("chatbot").innerHTML += `<p>${greeting}</p>`;
    speak(greeting);
}

// Call greetUser and loadVoices when the page loads
window.onload = function() {
    greetUser();
    loadVoices(); // Load voices on startup
};

// Reload voices when they are changed
window.speechSynthesis.onvoiceschanged = loadVoices;


// Text-to-Speech function
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        // Select the female voice
        const femaleVoice = voices.find(voice => voice.name.toLowerCase().includes("female")) || voices[0];
        utterance.voice = femaleVoice;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Text-to-speech is not supported in this browser.");
    }
}



// Function to send and display messages
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    // Display user message
    displayMessage(userInput, "user-message");

    // Get bot response
    getBotResponse(userInput.toLowerCase());

    document.getElementById("userInput").value = ""; // Clear input
}

function displayMessage(message, className) {
    const messageContainer = document.createElement("div");
    messageContainer.className = `message ${className}`;
    messageContainer.textContent = message;

    document.getElementById("messages").appendChild(messageContainer);
    document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight; // Auto-scroll
}


    




