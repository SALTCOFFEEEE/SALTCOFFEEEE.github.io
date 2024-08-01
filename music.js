document.addEventListener('DOMContentLoaded', (event) => {
    const playButton = document.getElementById('play-button');
    const audio = document.getElementById('background-music');

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.querySelector('img').src = 'images/pause.png'; // Change to pause icon 
        } else {
            audio.pause();
            playButton.querySelector('img').src = 'images/play.png';
        }
    });

    audio.addEventListener('ended', () => {
        playButton.querySelector('img').src = 'images/play.png'; // Reset to play icon 
    });
});
