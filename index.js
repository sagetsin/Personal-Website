$(document).ready(function(){
    var half_width = $(".rotating-img-left").width() / 2;
    $(".rotating-img-left").css("left", -half_width);
    var half_width = $(".rotating-img-right ").width() / 2;
        $(".rotating-img-right").css("right", -half_width);
});

document.addEventListener("DOMContentLoaded", function() {
  var playerContainer = document.getElementById("spotify-player");
  var spotifyEmbedCode = `<iframe style="border-radius:12px"
          src="https://open.spotify.com/embed/playlist/56gO4daG8F73crVNOvzMt1?utm_source=generator"
          width="100%" height="152" allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>`;
  playerContainer.innerHTML = spotifyEmbedCode;
});
