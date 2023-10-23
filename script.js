 // BOOKING POLICY
// Checkbox
document.addEventListener("DOMContentLoaded", function() {
    function enableCheckbox() {
        const checkbox = document.getElementById("data_protection");
        const popup = document.getElementById("popup");

        if (popup.style.display === "none") {
            checkbox.disabled = true;
        } else {
            checkbox.disabled = false;
        }
    }

    const showPolicies = document.getElementById("showPolicies");
    const popup = document.getElementById("popup");
    const close = document.getElementById("closePopup");

    showPolicies.addEventListener("click", () => {
        popup.style.display = "block";
        enableCheckbox(); 
    });

    close.addEventListener("click", () => {
        popup.style.display = "none";
        enableCheckbox();
    });

    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
            enableCheckbox();
        }
    });

    const checkbox = document.getElementById("data_protection");
    checkbox.addEventListener("click", enableCheckbox);

    window.addEventListener("load", enableCheckbox);
});
