const video = document.getElementById("camera");
video.autoplay = true;
video.muted = true;
video.playsInline = true;

const cameraSetting = {
    audio: false,
    video: {
        width: window.innerWidth * 0.7,
        height: window.innerHeight * 0.7,
        facingMode: "environment",
    }
}

navigator.mediaDevices.getUserMedia(cameraSetting)
.then(stream => {
    video.srcObject = stream;
}).catch(e => {
    console.log(e);
});

const shutterButton = document.getElementById("shutter");
const canvas = document.getElementById("camera-output");

shutterButton.addEventListener("click", ()=>{
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/png");
    sessionStorage.setItem('capturedImage', imageData);

    window.location.href = './edit.html';
});