/**
 * WILD WEST BRUTALIST PORTFOLIO
 * Raw JavaScript. No frameworks.
 */

// === UTILITIES ===
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// === SCROLL REVEAL ANIMATION ===
const initScrollReveal = () => {
    const reveals = $$('.case-file, .weapon-rack, .section-header, .telegraph-station, .dossier-card, .contact-info');
    
    reveals.forEach(el => {
        el.classList.add('reveal');
    });
    
    const checkReveal = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < triggerBottom) {
                el.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);
};

// === SKILL BARS ANIMATION ===
const initSkillBars = () => {
    const skillSection = $('#arsenal');
    const weaponFills = $$('.weapon-fill');
    let animated = false;
    
    const animateSkills = () => {
        if (animated) return;
        
        const rect = skillSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            weaponFills.forEach((fill, index) => {
                const targetWidth = fill.style.getPropertyValue('--fill');
                fill.style.width = '0%';
                
                setTimeout(() => {
                    fill.style.width = targetWidth;
                }, index * 100);
            });
            animated = true;
        }
    };
    
    window.addEventListener('scroll', animateSkills);
};

// === NAVIGATION HIGHLIGHT ===
const initNavHighlight = () => {
    const sections = $$('section[id], header[id]');
    const navLinks = $$('.nav-link');
    
    const highlightNav = () => {
        let current = '';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', highlightNav);
};

// === TYPEWRITER EFFECT ===
const initTypewriter = () => {
    const text = '[THE CODE SLINGER]'; 
    const target = $('.nav-brand');
    
    if (!target) return;
    
    let i = 0;
    target.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            target.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    };
    
    setTimeout(type, 500);
};

// === CONTACT DATE ===
const initContactDate = () => {
    const dateSpan = $('#current-date');
    
    // Set current date
    if (dateSpan) {
        const today = new Date();
        dateSpan.textContent = today.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
};

// === PARALLAX EFFECT ===
const initParallax = () => {
    const poster = $('.wanted-poster');
    
    if (!poster) return;
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        
        poster.style.transform = `rotate(${-1 + x * 0.1}deg) translate(${x}px, ${y}px)`;
    });
};

// === SMOOTH SCROLL ===
const initSmoothScroll = () => {
    $$('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = $(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};

// === STAMP ANIMATION ===
const initStampAnimation = () => {
    const stamps = $$('.stamp');
    
    stamps.forEach((stamp, index) => {
        stamp.style.opacity = '0';
        stamp.style.transform = 'scale(2) rotate(var(--rotation, 0deg))';
        
        setTimeout(() => {
            stamp.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            stamp.style.opacity = '0.6';
            stamp.style.transform = 'scale(1) rotate(var(--rotation, 0deg))';
        }, 1000 + index * 200);
    });
};

// === INITIALIZE ===
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initSkillBars();
    initNavHighlight();
    initTypewriter();
    initContactDate();
    initParallax();
    initSmoothScroll();
    initStampAnimation();
    
    console.log('%c[LENDRA DWI PUTRA]', 'color: #8B0000; font-family: monospace; font-size: 20px; font-weight: bold;');
    console.log('%cFullstack Developer | Depok, Indonesia', 'color: #5C4033; font-family: monospace;');
    console.log('%cWANTED FOR: Zero-to-One Product Development', 'color: #A0522D; font-family: monospace;');
    console.log('%cNo frameworks were harmed in the making of this site.', 'color: #8B7355; font-family: monospace; font-size: 10px;');
});