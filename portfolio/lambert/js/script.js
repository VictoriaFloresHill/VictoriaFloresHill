// *********** Handles the responsive Navbar with Hamburger menu *****
function toggleMenu() {
    document.querySelector('.nav-list').classList.toggle('active');
}

// Add event listeners to all nav links to close menu when clicked
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.nav-list').classList.remove('active');
        });
    });
});

// ************ Navigation Menu change from gray to white background *****
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// *************Handles the 'Our Team' bio for each Chef **********

// Prevent body scrolling when modal is open
function toggleBodyScroll(isModalOpen) {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    toggleBodyScroll(true);

    // Close modal when clicking outside
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal(modalId);
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal(modalId);
        }
    });
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    toggleBodyScroll(false);
}