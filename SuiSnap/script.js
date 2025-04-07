function startVerification() {
  const status = document.getElementById('status');
  status.innerText = '🔄 Starting camera...';

  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(stream => {
      const video = document.createElement('video');
      video.srcObject = stream;
      video.autoplay = true;
      video.width = 320;
      video.height = 240;
      const container = document.getElementById('camera-container');
      container.innerHTML = '';
      container.appendChild(video);
      status.innerText = '📷 Verifying using AI (mock)...';

      setTimeout(() => {
        stream.getTracks().forEach(track => track.stop());
        video.remove();
        status.innerText = '✅ Verified! Minting Soulbound NFT...';
        mintNFT();
      }, 4000); // Mock AI check
    })
    .catch(() => {
      status.innerText = '❌ Camera access denied.';
    });
}

function mintNFT() {
  // Placeholder for Sui blockchain integration
  setTimeout(() => {
    document.getElementById('status').innerText = '🎉 Soulbound NFT minted on Sui!';
  }, 3000);
}
