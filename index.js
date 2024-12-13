 // Get elements
        const left = document.getElementById("vinyl-left");
        const right = document.getElementById("vinyl-right");
        var popupOpen = false;

        // Open the pop-up
        function openPopup() {
            if(!popupOpen) {
                window.open("https://sagetsin.github.io/main/pages/spotify-player.html", "Spotify Player", "width=500,height=300");
                popupOpen = true;
                left.setAttribute("class", "rotate-left");
                right.setAttribute("class", "rotate-right");
            }
        }

        function closePopup(){
            if(popupOpen){
                window.close();
                popupOpen = false;
                left.setAttribute("class", "vinyl-left");
                right.setAttribute("class", "vinyl-right");
            }
        }