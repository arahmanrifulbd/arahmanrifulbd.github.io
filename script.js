const translations = document.querySelectorAll("[data-en][data-bn]");
let currentLang = "en";
document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "bn" : "en";
  translations.forEach(el => {
    const value = el.getAttribute("data-" + currentLang);
    if (value !== null) {
      if (el.tagName === "H2" && value.includes("<em>")) el.innerHTML = value;
      else el.textContent = value;
    }
  });
  document.getElementById("langToggle").textContent = currentLang === "en" ? "বাংলা" : "English";
  document.documentElement.lang = currentLang;
});
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("reviewForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent("Website client review — A Rahman Riful");
  const body = encodeURIComponent(
    "Client name: " + data.get("name") + "\nRating: " + data.get("rating") + "/5\nReview:\n" + data.get("review") +
    "\n\nPlease review this feedback before publishing."
  );
  document.getElementById("reviewStatus").textContent = "Your email app will open. Please send the prepared message to submit your review.";
  window.location.href = "mailto:arahmanriful880@gmail.com?subject=" + subject + "&body=" + body;
});
