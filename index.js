import './styles.css';
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';

// Test that webpack is working
console.log('🍽️ Restaurant page loaded! Webpack is working!');

// Load home page on initial page load
document.addEventListener('DOMContentLoaded', () => {
    loadHome();

    // Set up event listeners for navigation buttons
    document.getElementById('homeBtn').addEventListener('click', loadHome);
    document.getElementById('menuBtn').addEventListener('click', loadMenu);
    document.getElementById('contactBtn').addEventListener('click', loadContact);
});
