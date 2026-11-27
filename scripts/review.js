
// Get the previous review count
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase the count
reviewCount++;

// Save the new count
localStorage.setItem("reviewCount", reviewCount);

// Display the count
document.querySelector("#reviewCounter").textContent = reviewCount;
