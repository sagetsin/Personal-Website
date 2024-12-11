const playButton = document.getElementById('playButton');
const spotifyPlayer = document.getElementById('player');

playButton.addEventListener('click', () => {
    spotifyPlayer.contentWindow.postMessage({method: 'play'}, '*');
//    spotifyPlayer.style.display = 'block'; // Show the player
//    spotifyPlayer.src += '?autoplay=1'; // Append autoplay parameter
//    spotifyPlayer.style.display = 'none'; // Hide the player
    console.log('Music is playing...');
});