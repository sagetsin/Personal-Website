 // Get elements
        const popup = document.getElementById("popup");

        // Open the pop-up
        function openPopup() {
            popup.style.display = "block";
            window.open("https://sagetsin.github.io/main/pages/spotify-player.html", "Spotify Player", "width=500,height=300");
        }

        // Close the pop-up
        function close() {
            popup.style.display = "none";
        }

        // Optionally close the popup if the overlay is clicked
        function offPop(event) {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        }
