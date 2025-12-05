const form = document.getElementById("contactForm");
const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    message: document.getElementById("message")
};
const errors = {
    name: document.getElementById("nameError"),
    email: document.getElementById("emailError"),
    message: document.getElementById("messageError")
};
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", e => {
    e.preventDefault();

    let valid = true;
    successMessage.textContent = "";

    Object.keys(fields).forEach(k => {
        errors[k].textContent = "";
        fields[k].classList.remove("error-border");
        if (fields[k].value.trim() === "") {
            errors[k].textContent = k.charAt(0).toUpperCase() + k.slice(1) + " wajib diisi.";
            fields[k].classList.add("error-border");
            valid = false;
        }
    });

    if (valid) {
        successMessage.textContent = "Pesan berhasil dikirim!";
        form.reset();
    }
});
