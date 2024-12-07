// Get elements
const profileBtn = document.getElementById('profile-btn');
const dropdown = document.getElementById('dropdown');
const closeBtn = document.getElementById('close-btn');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

// Show or hide dropdown on profile icon click
profileBtn.addEventListener('click', () => {
  dropdown.classList.toggle('hidden'); // Toggle visibility
});

// Close dropdown if clicked outside
window.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target) && e.target !== profileBtn) {
    dropdown.classList.add('hidden');
  }
});

// Handle option clicks (using IDs)
option1.addEventListener('click', () => {
  window.location.href = '#option1';  // Simulate navigating to the section with ID 'option1'
  dropdown.classList.add('hidden');
});

option2.addEventListener('click', () => {
  window.location.href = '#option2';  // Simulate navigating to the section with ID 'option2'
  dropdown.classList.add('hidden');
});

option3.addEventListener('click', () => {
  window.location.href = '#option3';  // Simulate navigating to the section with ID 'option3'
  dropdown.classList.add('hidden');
});
