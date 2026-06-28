function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactSection = document.createElement('div');
    contactSection.className = 'contact-section';

    const heading = document.createElement('h2');
    heading.textContent = 'Get in Touch';

    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';

    const addressP = document.createElement('p');
    addressP.innerHTML = '<strong>Address:</strong><br>123 Main Street, Your City, ST 12345';

    const phoneP = document.createElement('p');
    phoneP.innerHTML = '<strong>Phone:</strong><br>(555) 123-4567';

    const hoursP = document.createElement('p');
    hoursP.innerHTML = '<strong>Hours:</strong><br>Monday - Thursday: 11am - 10pm<br>Friday - Saturday: 11am - 11pm<br>Sunday: 12pm - 9pm';

    contactInfo.appendChild(addressP);
    contactInfo.appendChild(phoneP);
    contactInfo.appendChild(hoursP);

    const form = document.createElement('form');
    form.className = 'contact-form';

    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'name';
    nameLabel.textContent = 'Name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.required = true;

    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'email';
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.required = true;

    const messageLabel = document.createElement('label');
    messageLabel.htmlFor = 'message';
    messageLabel.textContent = 'Message';
    const messageTextarea = document.createElement('textarea');
    messageTextarea.id = 'message';
    messageTextarea.required = true;

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Send Message';

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(messageLabel);
    form.appendChild(messageTextarea);
    form.appendChild(submitBtn);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });

    contactSection.appendChild(heading);
    contactSection.appendChild(contactInfo);
    contactSection.appendChild(form);
    content.appendChild(contactSection);

    // Update active button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('contactBtn').classList.add('active');
}

export { loadContact };
