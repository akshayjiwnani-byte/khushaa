
// Script to handle autoplay and play/pause button
const audio = document.getElementById('bgAudio');
const playBtn = document.getElementById('playBtn');

async function tryPlayOnLoad(){
  try{
    await audio.play();
    playBtn.textContent = 'Pause Music';
  }catch(e){
    // Autoplay blocked by browser; user must click to start.
    playBtn.textContent = 'Play Music';
    console.log('Autoplay blocked:', e);
  }
}

window.addEventListener('load', ()=>{
  // user requested autoplay; attempt to play
  tryPlayOnLoad();
});

playBtn.addEventListener('click', ()=>{
  if(audio.paused){
    audio.play();
    playBtn.textContent = 'Pause Music';
  }else{
    audio.pause();
    playBtn.textContent = 'Play Music';
  }
});
