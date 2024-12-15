 // Get elements
        const left = document.getElementById("vinyl-left");
        const right = document.getElementById("vinyl-right");
        var popupOpen = false;
        let popupWindow = null;

        // Open the pop-up
        function openPopup() {
            if(!popupOpen || popupWindow.closed) {
                popupWindow = window.open("https://sagetsin.github.io/main/pages/spotify-player.html", "Spotify Player", "width=500,height=300");
                popupOpen = true;
                left.style.animation = "spin 10s linear infinite";
                right.style.animation = "spin 10s linear infinite";
                left.class = "rotate-left";
                right.class = "rotate-right";
            }
        }

        function closePopup(){
        console.log("attemping to close");
            if(popupOpen && !popupWindow.closed){
                popupWindow.close();
                popupWindow = null;
                popupOpen = false;
                left.style.animation = "none";
                right.style.animation = "none";

            }
        }