 // Get elements
        const popup = document.getElementById("popup");

        // Open the pop-up
        function openPopup() {
            popup.style.display = "block";
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