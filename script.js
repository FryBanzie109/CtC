document.getElementById("sendButton").addEventListener("click", sendMessage);
document.getElementById("messageInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value.trim();
    if (message !== "") {
        addMessageToChat(message, "sent");
        input.value = ""; // Clear input
        // Simulate receiving a response
        setTimeout(() => {
            addMessageToChat("nothing!", "received");
        }, 1000);
    }
}

function addMessageToChat(message, type) {
    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", type);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}