function copyToClipboard(button) {
    const codeBlock = button.nextElementSibling;
    const textArea = document.createElement("textarea");
    textArea.value = codeBlock.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    button.innerText = "Copied!";
    setTimeout(() => {
        button.innerText = "Copy";
    }, 2000);
}
