// Animação do formulário
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('.submit-btn');
    const originalText = btn.innerHTML;

    // Estado de loading
    btn.innerHTML = '<span>⏳</span> Enviando...';
    btn.disabled = true;

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            formStatus.className = 'form-status success';
            formStatus.innerHTML = '<span>✅</span> Mensagem enviada com sucesso! Retornarei em breve.';
            form.reset();
        } else {
            throw new Error('Erro no envio');
        }
    } catch (error) {
        formStatus.className = 'form-status error';
        formStatus.innerHTML = '<span>❌</span> Ocorreu um erro. Tente novamente ou use outro canal de contato.';
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;

        setTimeout(() => {
            formStatus.className = 'form-status';
        }, 5000);
    }
});

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.contact-card, .social-btn, .form-group').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});
