// products array as per instruction
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const productSelect = document.getElementById("productName");
  
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;        // value = id
      option.textContent = product.name; // text = name
      productSelect.appendChild(option);
    });
  } else {
    console.error("Select element with ID 'productName' not found.");
  }
});
