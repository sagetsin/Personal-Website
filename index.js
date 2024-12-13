 // Get elements
        const popup = document.getElementById("popup");
        var popupOpen = false;

        // Open the pop-up
        function openPopup() {
            if(!popupOpen) {
                window.open("https://sagetsin.github.io/main/pages/spotify-player.html", "Spotify Player", "width=500,height=300");
                popupOpen = true;
            }
        }