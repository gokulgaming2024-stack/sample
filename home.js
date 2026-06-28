function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const hero = document.createElement('div');
    hero.className = 'hero';

    const heading = document.createElement('h2');
    heading.textContent = 'Welcome to The Cozy Corner';

    const description = document.createElement('p');
    description.textContent = 'Experience authentic cuisine in our warm and welcoming atmosphere. We pride ourselves on serving fresh, locally-sourced ingredients prepared by our talented chefs. Whether you\'re here for a casual lunch or a special celebration, we promise an unforgettable dining experience.';

    hero.appendChild(heading);
    hero.appendChild(description);
    content.appendChild(hero);

    // Update active button
    setActiveButton('homeBtn');
}

function setActiveButton(buttonId) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(buttonId).classList.add('active');
}

export { loadHome, setActiveButton };
