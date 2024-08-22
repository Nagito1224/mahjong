window.onload = () => {
    const resultImageData = sessionStorage.getItem('resultImage');
    if (resultImageData) {
        const img = document.createElement("img");
        img.src = resultImageData;
        document.body.appendChild(img);
    } else {
        const message = document.createElement("p");
        message.textContent = "もう一度撮影を行ってください";
        document.body.appendChild(message);
    }

    if (document.readyState === "complete") {
        const titleButton = document.getElementById("to-title");
        titleButton.addEventListener("click", () => {
            sessionStorage.removeItem('resultImage');
            window.location.href = './index.html';
        });
    }
}