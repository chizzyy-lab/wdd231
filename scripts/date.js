// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Insert the current year into the first paragraph of the footer
document.querySelector("footer p:nth-of-type(1)").textContent = `© ${currentYear}`;

// Insert the last modified date into the second paragraph of the footer
document.querySelector("footer p:nth-of-type(2)").textContent = `Last modified: ${document.lastModified}`;