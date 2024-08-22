window.onload = () => {
    const resultImageData = sessionStorage.getItem('capturedImage');
    if (resultImageData) {
        const img = document.createElement("img");
        img.src = resultImageData;
        document.body.appendChild(img);
    } else {
        document.body.innerHTML = "<p>Sorry. We could not create processed Image.</p>"
    }
}