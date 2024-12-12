 // Get elements
        const openBtn = document.getElementById("openBtn");
        const closeBtn = document.getElementById("closeBtn");
        const popup = document.getElementById("popup");

        // Open the pop-up
        openBtn.onclick = function() {
            popup.style.display = "block";
        }

        // Close the pop-up
        closeBtn.onclick = function() {
            popup.style.display = "none";
        }

        // Optionally close the popup if the overlay is clicked
        popup.onclick = function(event) {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        }