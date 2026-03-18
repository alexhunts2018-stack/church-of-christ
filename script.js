function setupField(field, defaultText) {
    field.value = defaultText;

    field.addEventListener("focus", () => {
        if (field.value === defaultText) {
            field.value = "";
        }
    });

    field.addEventListener("blur", () => {
        if (field.value.trim() === "") {
            field.value = defaultText;
        }
    });

    field.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            console.log(field.value);
        }
    });
}


// Run after page loads
document.addEventListener("DOMContentLoaded", () => {
    setupField(document.getElementById("Name"), "Name");
    setupField(document.getElementById("Email2"), "Email");
    setupField(document.getElementById("message"), "Enter message...");
    setupField(document.getElementById("email"), "Enter Your Email Here");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));