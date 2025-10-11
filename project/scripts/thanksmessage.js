const form = document.querySelector("#submit-action");

window.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem("formData"));
  if (savedData) {
    document.querySelector("#GET-name").value = savedData.name || "";
    document.querySelector("#message").value = savedData.message || "";
    
    if (savedData.selectedFrequency) {
      const radioToSelect = document.querySelector(
        `input[name="radio"][value="${savedData.selectedFrequency}"]`
      );
      if (radioToSelect) radioToSelect.checked = true;
    }
  }
});








form.addEventListener("submit", (e) => {
  e.preventDefault(); 


  const name = document.querySelector("#GET-name").value.trim();
  const email = document.querySelector("#GET-EMAIL").value.trim();
  const selectedFrequency = document.querySelector('input[name="radio"]:checked')?.value;
  const message = document.querySelector("#message").value.trim();
  
  
  const formData = { name, selectedFrequency, message };
  localStorage.setItem("formData", JSON.stringify(formData));
  



  if (name === "" || email === "" || !selectedFrequency) {
    alert("⚠️ Please complete all obligatory fields before submiting");
    return;
    
  }
    
    form.innerHTML = `<p class="thanks-message">✅ Thank you for subscribing!</p>`;
    localStorage.removeItem("formData");


  






  



});