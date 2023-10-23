 // BOOKING POLICY
// Checkbox
document.addEventListener("DOMContentLoaded", function() {
    function enableCheckbox() {
        const checkbox = document.getElementById("data_protection");
        const popup = document.getElementById("popup");

        if (checkbox.disabled) {
            return; // Se o checkbox estiver desabilitado, sair da função
        }

        if (popup.style.display === "none") {
            checkbox.disabled = true;
        } else {
            checkbox.disabled = false;
        }
    }

    const showPolicies = document.getElementById("showPolicies");
    const popup = document.getElementById("popup");
    const close = document.getElementById("closePopup");
    const checkbox = document.getElementById("data_protection");

    showPolicies.addEventListener("click", () => {
        popup.style.display = "block";
        enableCheckbox();
        checkbox.checked = false;
        checkbox.disabled = true;
    });

    close.addEventListener("click", () => {
        popup.style.display = "none";
        enableCheckbox();
        checkbox.checked = true;
        checkbox.disabled = true;
    });

    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
            enableCheckbox();
            checkbox.checked = true;
            checkbox.disabled = true;
        }
    });

    checkbox.addEventListener("click", enableCheckbox);

    window.addEventListener("load", enableCheckbox);
});


