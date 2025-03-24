function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;
    
 
    document.querySelectorAll('.error-message').forEach(error => error.textContent = '');
    
 
    if (!name.value.trim()) {
        document.getElementById('nameError').textContent = 'Numele este obligatoriu';
        isValid = false;
    }
    
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        document.getElementById('emailError').textContent = 'Adresa de email nu este validă';
        isValid = false;
    }
    
 
    if (!message.value.trim()) {
        document.getElementById('messageError').textContent = 'Mesajul este obligatoriu';
        isValid = false;
    }
    
    if (isValid) {
        
        showNotification('Mesajul a fost trimis cu succes!', 'success');
        
      
        document.getElementById('contactForm').reset();
    }
    
    return false;
}

function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}