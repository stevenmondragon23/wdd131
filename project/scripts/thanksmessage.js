const form = document.querySelector("#submit-action");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const name = document.querySelector("#GET-name").value.trim();
  const email = document.querySelector("#GET-EMAIL").value.trim();
  const selectedFrequency = document.querySelector('input[name="radio"]:checked');

  if (name === "" || email === "" || !selectedFrequency) {
    alert("⚠️ Please complete all obligatory fields before submiting");
    return;
  }


  form.innerHTML = `<p class="thanks-message">✅ Thank you for subscribing!</p>`;
});