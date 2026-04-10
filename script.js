/**
 * PIERRE SILVA ADVOCACIA - JAVASCRIPT
 * JavaScript Vanilla ES6
 * Funcionalidades: Navbar, Menu Mobile, Animações, FAQ, Formulário
 */

// ========================================
// UTILIDADES
// ========================================

const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// ========================================
// NAVBAR
// ========================================

class Navbar {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.scrollThreshold = 80;
        this.init();
    }

    init() {
        this.handleScroll();
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 100), { passive: true });
    }

    handleScroll() {
        const scrollY = window.scrollY;
        if (scrollY > this.scrollThreshold) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }
}

// ========================================
// MENU MOBILE
// ========================================

class MobileMenu {
    constructor() {
        this.toggle = document.querySelector('.nav-toggle');
        this.menu = document.getElementById('mobile-menu');
        this.closeBtn = document.querySelector('.mobile-close');
        this.links = document.querySelectorAll('.mobile-links a');
        this.isOpen = false;
        this.init();
    }

    init() {
        if (!this.toggle || !this.menu) return;

        this.toggle.addEventListener('click', () => this.open());
        this.closeBtn.addEventListener('click', () => this.close());
        
        // Fechar ao clicar nos links
        this.links.forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        // Fechar ao pressionar Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });

        // Fechar ao clicar fora
        this.menu.addEventListener('click', (e) => {
            if (e.target === this.menu) {
                this.close();
            }
        });
    }

    open() {
        this.isOpen = true;
        this.menu.classList.add('active');
        this.toggle.setAttribute('aria-expanded', 'true');
        this.menu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Focar no primeiro link para acessibilidade
        setTimeout(() => {
            const firstLink = this.menu.querySelector('a');
            if (firstLink) firstLink.focus();
        }, 100);
    }

    close() {
        this.isOpen = false;
        this.menu.classList.remove('active');
        this.toggle.setAttribute('aria-expanded', 'false');
        this.menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        
        // Retornar foco ao botão
        this.toggle.focus();
    }
}

// ========================================
// SCROLL ANIMATIONS (IntersectionObserver)
// ========================================

class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('[data-animate]');
        this.observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };
        this.init();
    }

    init() {
        if (!this.elements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        this.elements.forEach(el => observer.observe(el));
    }
}

// ========================================
// BENTO GRID ANIMATIONS
// ========================================

class BentoAnimations {
    constructor() {
        this.cards = document.querySelectorAll('.bento-card');
        this.observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };
        this.init();
    }

    init() {
        if (!this.cards.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        this.cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 80}ms`;
            observer.observe(card);
        });
    }
}

// ========================================
// TIMELINE ANIMATIONS
// ========================================

class TimelineAnimations {
    constructor() {
        this.items = document.querySelectorAll('.timeline-item');
        this.observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };
        this.init();
    }

    init() {
        if (!this.items.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        this.items.forEach((item, index) => {
            const node = item.querySelector('.timeline-node');
            if (node) {
                node.style.transitionDelay = `${index * 200}ms`;
            }
            observer.observe(item);
        });
    }
}

// ========================================
// TESTIMONIALS ANIMATIONS
// ========================================

class TestimonialsAnimations {
    constructor() {
        this.cards = document.querySelectorAll('.testimonial-card');
        this.observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };
        this.init();
    }

    init() {
        if (!this.cards.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        this.cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 100}ms`;
            observer.observe(card);
        });
    }
}

// ========================================
// GALERIA ANIMATIONS
// ========================================

class GaleriaAnimations {
    constructor() {
        this.items = document.querySelectorAll('.galeria-item');
        this.observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        this.init();
    }

    init() {
        if (!this.items.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        this.items.forEach((item, index) => {
            // Stagger only the first few items to not delay everything too much
            item.style.transitionDelay = `${(index % 5) * 150}ms`;
            observer.observe(item);
        });
    }
}

// ========================================
// FAQ ACCORDION
// ========================================

class FAQAccordion {
    constructor() {
        this.items = document.querySelectorAll('.faq-item');
        this.init();
    }

    init() {
        if (!this.items.length) return;

        this.items.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Fechar todos os outros
                this.items.forEach(otherItem => {
                    if (otherItem !== item) {
                        this.closeItem(otherItem);
                    }
                });
                
                // Toggle o item atual
                if (isActive) {
                    this.closeItem(item);
                } else {
                    this.openItem(item);
                }
            });
        });
    }

    openItem(item) {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
        answer.setAttribute('aria-hidden', 'false');
    }

    closeItem(item) {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        item.classList.remove('active');
        question.setAttribute('aria-expanded', 'false');
        answer.setAttribute('aria-hidden', 'true');
    }
}

// ========================================
// FORM VALIDATION
// ========================================

class FormValidation {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.whatsappNumber = '5521993285673';
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Validação em tempo real
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const formGroup = field.closest('.form-group');
        const errorEl = formGroup.querySelector('.form-error');
        let errorMessage = '';

        // Validação por tipo de campo
        if (field.hasAttribute('required') && !value) {
            errorMessage = 'Este campo é obrigatório';
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\(\)\+]{10,20}$/;
            if (!phoneRegex.test(value)) {
                errorMessage = 'Digite um telefone válido';
            }
        }

        if (errorMessage) {
            formGroup.classList.add('error');
            errorEl.textContent = errorMessage;
            return false;
        }

        return true;
    }

    clearError(field) {
        const formGroup = field.closest('.form-group');
        const errorEl = formGroup.querySelector('.form-error');
        
        formGroup.classList.remove('error');
        errorEl.textContent = '';
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Validar todos os campos
        const inputs = this.form.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            // Focar no primeiro campo com erro
            const firstError = this.form.querySelector('.form-group.error input, .form-group.error textarea');
            if (firstError) firstError.focus();
            return;
        }

        // Construir mensagem do WhatsApp
        const nome = this.form.querySelector('#nome').value.trim();
        const telefone = this.form.querySelector('#telefone').value.trim();
        const caso = this.form.querySelector('#caso').value.trim();

        const mensagem = `Olá! Meu nome é ${nome}.\n\nTelefone: ${telefone}\n\nGostaria de falar sobre o seguinte caso:\n\n${caso}`;
        
        const encodedMessage = encodeURIComponent(mensagem);
        const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
        
        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
}

// ========================================
// MÁSCARA DE TELEFONE
// ========================================

class PhoneMask {
    constructor() {
        this.input = document.getElementById('telefone');
        this.init();
    }

    init() {
        if (!this.input) return;

        this.input.addEventListener('input', (e) => this.handleInput(e));
        this.input.addEventListener('keydown', (e) => this.handleKeydown(e));
    }

    handleInput(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 11) {
            value = value.slice(0, 11);
        }

        // Aplicar máscara
        if (value.length > 7) {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
        } else if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length > 0) {
            value = `(${value}`;
        }

        e.target.value = value;
    }

    handleKeydown(e) {
        // Permitir backspace, delete, arrows, tab
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
        if (allowedKeys.includes(e.key)) return;

        // Bloquear se não for número
        if (!/\d/.test(e.key) && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
        }
    }
}

// ========================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ========================================

class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    handleClick(e) {
        const href = e.currentTarget.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Atualizar URL sem recarregar
        history.pushState(null, '', href);
    }
}

// ========================================
// LAZY LOADING PARA IMAGENS
// ========================================

class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img[loading="lazy"]');
        this.init();
    }

    init() {
        if (!this.images.length) return;

        // Verificar suporte a IntersectionObserver
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px'
            });

            this.images.forEach(img => observer.observe(img));
        } else {
            // Fallback: carregar todas as imagens
            this.images.forEach(img => img.classList.add('loaded'));
        }
    }
}

// ========================================
// PERFORMANCE: WILL-CHANGE
// ========================================

class PerformanceOptimizer {
    constructor() {
        this.animatedElements = document.querySelectorAll('.bento-card, .testimonial-card, .timeline-item, .galeria-item');
        this.init();
    }

    init() {
        // Adicionar will-change apenas quando necessário
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.willChange = 'transform, opacity';
                } else {
                    entry.target.style.willChange = 'auto';
                }
            });
        }, {
            rootMargin: '100px'
        });

        this.animatedElements.forEach(el => observer.observe(el));
    }
}

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todos os módulos
    new Navbar();
    new MobileMenu();
    new ScrollAnimations();
    new BentoAnimations();
    new TimelineAnimations();
    new TestimonialsAnimations();
    new GaleriaAnimations();
    new FAQAccordion();
    new FormValidation();
    new PhoneMask();
    new SmoothScroll();
    new LazyLoader();
    new PerformanceOptimizer();

    // Log de inicialização
    console.log('🚀 Pierre Silva Advocacia - Site inicializado com sucesso!');
});

// ========================================
// SERVICE WORKER (OPCIONAL - PWA)
// ========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Descomente para ativar PWA
        // navigator.serviceWorker.register('/sw.js');
    });
}
