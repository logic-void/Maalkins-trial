(function () {
    emailjs.init("vqs5HCWrdUB8Amz6P");
})();
const sendBtn = document.getElementById("send-email");
const nameInput = document.getElementById("name-input");
const messageInput = document.getElementById("message-input");
sendBtn.addEventListener("click", e => {
    e.preventDefault();
    const name = nameInput.value;
    const message = messageInput.value;
    if (name && message) {
        emailjs.send("service_pcsf3oc", "template_utgqcs9", {
            name,
            message
        });
    }
});
