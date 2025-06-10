const themeToggleBtn = document.getElementById('theme-toggle');
const menuToggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.querySelector('.hamburger');

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.innerHTML = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = '☀️';
        localStorage.setItem('theme', 'dark');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggleBtn.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
}

function toggleMenu() {
    navMenu.classList.toggle('open');
    menuToggleBtn.classList.toggle('open');
    const expanded = navMenu.classList.contains('open');
    menuToggleBtn.setAttribute('aria-expanded', expanded);
}

function closeMenuOnLinkClick() {
    if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        menuToggleBtn.classList.remove('open');
        menuToggleBtn.setAttribute('aria-expanded', false);
    }
}

themeToggleBtn.addEventListener('click', toggleTheme);
menuToggleBtn.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenuOnLinkClick);
});

loadTheme();

if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#bb86fc' },
            shape: {
                type: 'circle',
                stroke: { width: 0, color: '#000000' },
                polygon: { nb_sides: 5 },
                image: { src: 'img/github.svg', width: 100, height: 100 }
            },
            opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: '#bb86fc', opacity: 0.4, width: 1 },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true,
        config_demo: {
            hide_card: false,
            background_color: '#b61924',
            background_image: '',
            background_position: '50% 50%',
            background_repeat: 'no-repeat',
            background_size: 'cover'
        }
    });
}

// ScrollReveal initialization
ScrollReveal().reveal('.intro', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
    duration: 800
});

ScrollReveal().reveal('.contact-section', {
    delay: 400,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
    duration: 800,
    viewFactor: 0.2
});

ScrollReveal().reveal('.bio-section', {
    delay: 300,
    distance: '50px',
    origin: 'left',
    opacity: 0,
    easing: 'ease-out',
    duration: 800,
    viewFactor: 0.2
});

ScrollReveal().reveal('.skills-section', {
    delay: 400,
    distance: '50px',
    origin: 'right',
    opacity: 0,
    easing: 'ease-out',
    duration: 800,
    viewFactor: 0.2
});

ScrollReveal().reveal('.project-card', {
    delay: 200,
    distance: '30px',
    origin: 'bottom',
    opacity: 0,
    interval: 100, // Stagger animation for each card
    easing: 'ease-out',
    duration: 600,
    viewFactor: 0.1
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-level').forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0';
        setTimeout(() => {
            skill.style.width = width;
        }, 100);
    });
});
