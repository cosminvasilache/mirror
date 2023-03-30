import './style.css'

const video = document.querySelector('video')!;

navigator.mediaDevices
  .getUserMedia({
    audio: false,
    video: {
      width: 1920,
      height: 1080,
    },
  })
  .then((stream) => {
    const videoTracks = stream.getVideoTracks();
    console.log(`Using video device: ${videoTracks[0].label}`);
    stream.onremovetrack = () => {
      console.log("Stream ended");
    };
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error(error);
  });