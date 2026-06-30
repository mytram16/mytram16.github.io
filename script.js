/* ================================================================
   PREMIUM PORTFOLIO WEBSITE - JAVASCRIPT
   Smooth scrolling, animations, dark mode, mobile menu, scroll effects
   ================================================================ */

// ============== DOM ELEMENTS ==============
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');
const backToTopBtn = document.getElementById('backToTop');
const navbar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.nav-link');
const pageSections = document.querySelectorAll('section');
const languageButtons = document.querySelectorAll('.language-option');

// ============== CONTENT REGISTRY ==============
// Replace images, stories, videos, and social links here without editing layout markup.
const siteContent = {
    language: {
        default: 'vi',
        supported: ['vi', 'en']
    },
    explore: [
        {
            image: 'assets/journey-placeholder.svg',
            alt: 'Northern Vietnam',
            title: 'Northern Vietnam',
            destinations: ['Hanoi', 'Ninh Binh', 'Ha Long', 'Sapa'],
            descriptionVi: 'Cảm nhận nhịp sống phố cổ Hà Nội, vẻ đẹp mơ màng của vịnh Hạ Long và những tầng mây dịu trên núi rừng Sapa.',
            descriptionEn: "Feel the rhythm of Hanoi's Old Quarter, the dreamy beauty of Ha Long Bay, and the soft layers of clouds over Sapa's mountains.",
            width: 900,
            height: 620
        },
        {
            image: 'assets/journey-placeholder.svg',
            alt: 'Central Vietnam',
            title: 'Central Vietnam',
            destinations: ['Da Nang', 'Hue', 'Hoi An'],
            descriptionVi: 'Đi qua Hội An rực đèn lồng, những bờ biển xanh của Đà Nẵng và chiều sâu di sản cung đình Huế.',
            descriptionEn: "Pass through Da Nang's blue coastlines, Hue's deep imperial heritage, and lantern-lit Hoi An.",
            width: 900,
            height: 620
        },
        {
            image: 'assets/journey-placeholder.svg',
            alt: 'Southern Vietnam',
            title: 'Southern Vietnam',
            destinations: ['Ho Chi Minh City', 'Mekong Delta', 'Phu Quoc'],
            descriptionVi: 'Chạm vào năng lượng của Thành phố Hồ Chí Minh, dòng nước miền Tây và những ngày biển êm ở Phú Quốc.',
            descriptionEn: 'Touch the energy of Ho Chi Minh City, the waterways of the Mekong Delta, and the calm sea days of Phu Quoc.',
            width: 900,
            height: 620
        }
    ],
    gallery: [
        {
            title: 'Vietnam Through My Eyes',
            location: 'Vietnam',
            descriptionVi: 'Một album mở để lưu giữ những khung hình dịu dàng về Việt Nam.',
            descriptionEn: 'An open album for gentle frames of Vietnam.',
            category: 'eyes',
            variant: 'gallery-item-tall',
            placeholder: 'assets/gallery-placeholder.svg',
            thumb: 'assets/gallery-placeholder.svg',
            full: 'assets/gallery-placeholder.svg',
            alt: 'Vietnam Through My Eyes album placeholder'
        },
        {
            title: 'Culture',
            location: 'Vietnam',
            descriptionVi: 'Không gian dành cho những câu chuyện văn hóa và đời sống địa phương.',
            descriptionEn: 'A space for cultural stories and local life.',
            category: 'culture',
            placeholder: 'assets/gallery-placeholder.svg',
            thumb: 'assets/gallery-placeholder.svg',
            full: 'assets/gallery-placeholder.svg',
            alt: 'Culture album placeholder'
        },
        {
            title: 'Cuisine',
            location: 'Vietnam',
            descriptionVi: 'Nơi những hương vị địa phương sẽ được kể lại bằng hình ảnh.',
            descriptionEn: 'A place where local flavors will be told through images.',
            category: 'cuisine',
            variant: 'gallery-item-wide',
            placeholder: 'assets/gallery-placeholder.svg',
            thumb: 'assets/gallery-placeholder.svg',
            full: 'assets/gallery-placeholder.svg',
            alt: 'Cuisine album placeholder'
        },
        {
            title: 'Landscapes',
            location: 'Vietnam',
            descriptionVi: 'Những miền núi, biển xanh và khoảng trời Việt Nam sẽ được thêm vào sau.',
            descriptionEn: 'Mountains, blue seas, and Vietnamese skies will be added later.',
            category: 'landscapes',
            variant: 'gallery-item-tall',
            placeholder: 'assets/gallery-placeholder.svg',
            thumb: 'assets/gallery-placeholder.svg',
            full: 'assets/gallery-placeholder.svg',
            alt: 'Landscapes album placeholder'
        },
        {
            title: 'Moments',
            location: 'Vietnam',
            descriptionVi: 'Những khoảnh khắc nhỏ, mềm và đáng nhớ trên đường đi.',
            descriptionEn: 'Small, soft, memorable moments along the way.',
            category: 'moments',
            placeholder: 'assets/gallery-placeholder.svg',
            thumb: 'assets/gallery-placeholder.svg',
            full: 'assets/gallery-placeholder.svg',
            alt: 'Moments album placeholder'
        }
    ],
    stories: [
        {
            cover: 'https://via.placeholder.com/350x200/ff5f95/ffffff?text=Story+1',
            alt: 'Halong Bay at Sunrise',
            title: 'Halong Bay at Sunrise',
            storyVi: 'Cảm nhận bình minh kỳ diệu trên những đảo đá vôi của vịnh Hạ Long.',
            storyEn: "Experience the magical sunrise over Halong Bay's limestone islands.",
            videoUrl: ''
        },
        {
            cover: 'https://via.placeholder.com/350x200/ff5f95/ffffff?text=Story+2',
            alt: 'Street Food of Hanoi',
            title: 'Street Food of Hanoi',
            storyVi: 'Thưởng thức ẩm thực đường phố Việt Nam chân thật ngay giữa lòng Hà Nội.',
            storyEn: 'Taste authentic Vietnamese street food in the heart of Hanoi.',
            videoUrl: ''
        },
        {
            cover: 'https://via.placeholder.com/350x200/ff5f95/ffffff?text=Story+3',
            alt: 'Mekong Delta Adventures',
            title: 'Mekong Delta Adventures',
            storyVi: 'Khám phá những dòng kênh uốn lượn và chợ nổi của miền Tây.',
            storyEn: 'Explore the winding waterways and floating markets of the Mekong Delta.',
            videoUrl: ''
        }
    ],
    contactLinks: {
        email: 'mailto:your-email@gmail.com',
        zalo: '#',
        whatsapp: '#',
        viber: '#',
        youtube: '#',
        tiktok: '#',
        facebook: '#',
        instagram: '#'
    },
    socialLinks: [
        { label: 'YouTube', url: '#', icon: 'icon-youtube' },
        { label: 'TikTok', url: '#', icon: 'icon-tiktok' },
        { label: 'Facebook', url: '#', icon: 'icon-facebook' },
        { label: 'Instagram', url: '#', icon: 'icon-instagram' }
    ]
};

function escapeHTML(value = '') {
    return String(value).replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[char]));
}

function renderExploreCards() {
    const grid = document.getElementById('exploreGrid');
    if (!grid) return;

    grid.innerHTML = siteContent.explore.map((card, index) => `
        <article class="explore-card glass fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="card-image">
                <img src="${escapeHTML(card.image)}" alt="${escapeHTML(card.alt || card.title)}" width="${card.width || 400}" height="${card.height || 250}" loading="lazy" decoding="async">
                <div class="card-overlay"></div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${escapeHTML(card.title)}</h3>
                <div class="card-destinations">
                    ${card.destinations.map(destination => `<span class="destination-tag">${escapeHTML(destination)}</span>`).join('')}
                </div>
                <p class="card-description text-vi">${escapeHTML(card.descriptionVi)}</p>
                <p class="card-description text-en">${escapeHTML(card.descriptionEn)}</p>
                <button class="explore-btn" type="button" onclick="scrollToSection('contact')" aria-label="Explore ${escapeHTML(card.title)}">Explore Now <svg class="icon icon-arrow" aria-hidden="true"><use href="#icon-arrow-right"></use></svg></button>
            </div>
        </article>
    `).join('');
}

function getGalleryImageSize(variant = '') {
    if (variant.includes('tall')) return { width: 700, height: 897 };
    if (variant.includes('wide')) return { width: 700, height: 593 };
    return { width: 700, height: 784 };
}

function renderGalleryCards() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    grid.innerHTML = siteContent.gallery.map(item => {
        const size = getGalleryImageSize(item.variant || '');
        return `
        <button type="button"
            class="gallery-item ${escapeHTML(item.variant || '')}"
            data-category="${escapeHTML(item.category || 'all')}"
            data-title="${escapeHTML(item.title)}"
            data-location="${escapeHTML(item.location)}"
            data-description-vi="${escapeHTML(item.descriptionVi)}"
            data-description-en="${escapeHTML(item.descriptionEn)}"
            data-full="${escapeHTML(item.full)}"
            aria-label="Open ${escapeHTML(item.title)}">
            <img src="${escapeHTML(item.placeholder || 'assets/gallery-placeholder.svg')}" data-src="${escapeHTML(item.thumb)}" alt="${escapeHTML(item.alt || item.title)}" width="${item.width || size.width}" height="${item.height || size.height}" loading="lazy" decoding="async">
            <span class="gallery-overlay"><span>${escapeHTML(item.title)}</span></span>
        </button>
    `;
    }).join('');
}

function renderStoryCards() {
    const grid = document.getElementById('storiesGrid');
    if (!grid) return;

    grid.innerHTML = siteContent.stories.map((story, index) => `
        <article class="story-card glass fade-in" style="animation-delay: ${index * 0.1}s" data-video-url="${escapeHTML(story.videoUrl || '')}">
            <div class="story-video">
                <img src="${escapeHTML(story.cover)}" alt="${escapeHTML(story.alt || story.title)}" width="${story.width || 350}" height="${story.height || 200}" loading="lazy" decoding="async">
                <button class="play-btn" type="button" aria-label="Play ${escapeHTML(story.title)} story" aria-disabled="${story.videoUrl ? 'false' : 'true'}">
                    <svg class="icon" aria-hidden="true"><use href="#icon-play"></use></svg>
                </button>
            </div>
            <div class="story-info">
                <h3>${escapeHTML(story.title)}</h3>
                <p class="text-vi">${escapeHTML(story.storyVi)}</p>
                <p class="text-en">${escapeHTML(story.storyEn)}</p>
            </div>
        </article>
    `).join('');
}

function renderSocialLinks() {
    const list = document.getElementById('socialLinks');
    if (!list) return;

    list.innerHTML = siteContent.socialLinks.map(link => `
        <a href="${escapeHTML(link.url)}" class="social-icon glass" title="${escapeHTML(link.label)}" aria-label="${escapeHTML(link.label)}">
            <svg class="icon" aria-hidden="true"><use href="#${escapeHTML(link.icon)}"></use></svg>
            <span>${escapeHTML(link.label)}</span>
            <svg class="icon social-arrow" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
        </a>
    `).join('');
}

function applyContactLinkPlaceholders() {
    document.querySelectorAll('[data-contact-link]').forEach(link => {
        const key = link.dataset.contactLink;
        if (siteContent.contactLinks[key]) {
            link.href = siteContent.contactLinks[key];
        }
    });
}

function renderReusableContent() {
    renderExploreCards();
    renderGalleryCards();
    renderStoryCards();
    renderSocialLinks();
    applyContactLinkPlaceholders();
}

renderReusableContent();

// ============== LANGUAGE SYSTEM ==============
/**
 * Store a simple language preference now while keeping bilingual content visible.
 * Future phases can use document.body.dataset.lang to show fuller translations.
 */
function initLanguageSystem() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const initialLanguage = siteContent.language.supported.includes(savedLanguage)
        ? savedLanguage
        : siteContent.language.default;

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.body.dataset.lang = lang;
        localStorage.setItem('preferredLanguage', lang);

        languageButtons.forEach(button => {
            const isActive = button.dataset.lang === lang;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    }

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (siteContent.language.supported.includes(button.dataset.lang)) {
                setLanguage(button.dataset.lang);
            }
        });
    });

    setLanguage(initialLanguage);
}

initLanguageSystem();

// ============== MOBILE MENU TOGGLE ==============
/**
 * Toggle mobile menu visibility
 */
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    navbar?.classList.toggle('menu-open', navLinks.classList.contains('active'));
});

// Close mobile menu when a link is clicked
navItems.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        navbar?.classList.remove('menu-open');
    });
});

// ============== DARK MODE TOGGLE ==============
/**
 * Initialize dark mode from localStorage
 */
function initDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#icon-sun"></use></svg>';
    }
}

/**
 * Toggle dark mode
 */
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    themeToggle.innerHTML = isDarkMode 
        ? '<svg class="icon" aria-hidden="true"><use href="#icon-sun"></use></svg>' 
        : '<svg class="icon" aria-hidden="true"><use href="#icon-moon"></use></svg>';
});

// Initialize dark mode on page load
initDarkMode();

// ============== SMOOTH SCROLLING ==============
/**
 * Smooth scroll to section when clicking navigation links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const target = href !== '#' ? document.querySelector(href) : null;
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 60; // Account for sticky navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/**
 * Scroll to section utility function
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 60;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ============== BACK TO TOP BUTTON ==============
function updateBackToTopState() {
    backToTopBtn?.classList.toggle('show', window.scrollY > 300);
}

/**
 * Scroll to top when button is clicked
 */
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============== INTERSECTION OBSERVER FOR ANIMATIONS ==============
/**
 * Trigger animations when elements come into view
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = '';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el);
});

// ============== JOURNEY TIMELINE INTERACTION ==============
const journeyStops = document.querySelectorAll('.journey-stop');

function setActiveJourneyStop(activeStop) {
    journeyStops.forEach(stop => {
        stop.classList.toggle('is-active', stop === activeStop);
    });
}

if (journeyStops.length) {
    const journeyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveJourneyStop(entry.target);
            }
        });
    }, {
        threshold: 0.42,
        rootMargin: '-18% 0px -38% 0px'
    });

    journeyStops.forEach(stop => {
        journeyObserver.observe(stop);
        stop.addEventListener('mouseenter', () => setActiveJourneyStop(stop));
        stop.addEventListener('focusin', () => setActiveJourneyStop(stop));
    });
}

// ============== CONTACT FORM HANDLING ==============
/**
 * Handle contact form submission
 */
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputs = form.querySelectorAll('.form-input');
    
    const formData = {
        name: inputs[0].value,
        email: inputs[1].value,
        tripType: inputs[2].value,
        message: inputs[3].value
    };

    const formProvider = form.dataset.formProvider || 'placeholder';
    const formEndpoint = form.dataset.formEndpoint || '';

    // Future Formspree setup: set data-form-provider="formspree" and add the endpoint in HTML.
    if (formProvider === 'formspree' && formEndpoint) {
        try {
            const response = await fetch(formEndpoint, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error(error);
            showNotification('Something went wrong. Please try again soon.', 'error');
            return;
        }
    }
    
    // Placeholder mode keeps the current UI ready for EmailJS/Formspree without changing layout.
    console.log('Form submitted:', formData);
    
    // Show success message
    showNotification(`Thank you, ${formData.name}! I'll review your trip details and get back to you soon.`, 'success');
    
    // Reset form
    form.reset();
}

// ============== NOTIFICATION SYSTEM ==============
/**
 * Show temporary notification message
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#ff5f95' : '#ff6b6b'};
        color: white;
        padding: 16px 24px;
        border-radius: 10px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideInDown 0.3s ease;
        font-weight: 500;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ============== SCROLL EFFECT FOR NAVBAR ==============
/**
 * Toggle glass navbar after leaving the top of the page
 */
function updateNavbarState() {
    navbar?.classList.toggle('scrolled', window.scrollY > 12);
}

// ============== HERO PORTRAIT PARALLAX ==============
/**
 * Add a subtle pointer parallax to the hero portrait.
 */
const portraitWrapper = document.querySelector('.profile-image-wrapper');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (portraitWrapper && !prefersReducedMotion.matches) {
    portraitWrapper.addEventListener('pointermove', (event) => {
        if (event.pointerType === 'touch') return;

        const rect = portraitWrapper.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        portraitWrapper.style.setProperty('--portrait-x', `${x * 7}px`);
        portraitWrapper.style.setProperty('--portrait-y', `${y * 5}px`);
        portraitWrapper.style.setProperty('--portrait-rotate-x', `${y * -3}deg`);
        portraitWrapper.style.setProperty('--portrait-rotate-y', `${x * 3.5}deg`);
    });

    portraitWrapper.addEventListener('pointerleave', () => {
        portraitWrapper.style.setProperty('--portrait-x', '0px');
        portraitWrapper.style.setProperty('--portrait-y', '0px');
        portraitWrapper.style.setProperty('--portrait-rotate-x', '0deg');
        portraitWrapper.style.setProperty('--portrait-rotate-y', '0deg');
    });
}

// ============== PREMIUM GALLERY ==============
const galleryFilters = document.querySelectorAll('.gallery-filter');
let galleryItems = document.querySelectorAll('.gallery-item');
const galleryLightbox = document.getElementById('galleryLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

function openGalleryLightbox(item) {
    if (!galleryLightbox || !lightboxImage || !lightboxCaption || !lightboxClose) return;

    const img = item.querySelector('img');
    const title = item.dataset.title || img.alt;
    const location = item.dataset.location || '';
    const descriptionVi = item.dataset.descriptionVi || '';
    const descriptionEn = item.dataset.descriptionEn || '';
    const imageSrc = item.dataset.full || img.currentSrc || img.src || img.dataset.src;

    lightboxImage.src = imageSrc;
    lightboxImage.alt = img.alt;
    lightboxCaption.innerHTML = `
        <span class="lightbox-title">${escapeHTML(title)}</span>
        ${location ? `<span class="lightbox-location">${escapeHTML(location)}</span>` : ''}
        ${descriptionVi ? `<span class="lightbox-description text-vi">${escapeHTML(descriptionVi)}</span>` : ''}
        ${descriptionEn ? `<span class="lightbox-description text-en">${escapeHTML(descriptionEn)}</span>` : ''}
    `;
    galleryLightbox.classList.add('open');
    galleryLightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    lightboxClose.focus();
}

function closeGalleryLightbox() {
    if (!galleryLightbox || !lightboxImage) return;

    galleryLightbox.classList.remove('open');
    galleryLightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    lightboxImage.src = '';
}

galleryFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        const activeCategory = filter.dataset.filter;

        galleryFilters.forEach(button => {
            button.classList.toggle('active', button === filter);
        });

        galleryItems.forEach(item => {
            const shouldShow = activeCategory === 'all' || item.dataset.category === activeCategory;
            item.classList.toggle('is-hidden', !shouldShow);
        });
    });
});

function bindGalleryItems() {
    galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => openGalleryLightbox(item));
    });
}

bindGalleryItems();

document.querySelectorAll('.story-card .play-btn').forEach(button => {
    button.addEventListener('click', () => {
        const storyCard = button.closest('.story-card');
        const videoUrl = storyCard?.dataset.videoUrl;

        if (videoUrl) {
            window.open(videoUrl, '_blank', 'noopener,noreferrer');
        }
    });
});

if (galleryLightbox && lightboxClose) {
    lightboxClose.addEventListener('click', closeGalleryLightbox);
    galleryLightbox.addEventListener('click', (event) => {
        if (event.target === galleryLightbox) {
            closeGalleryLightbox();
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && galleryLightbox && galleryLightbox.classList.contains('open')) {
        closeGalleryLightbox();
    }
});

// ============== ACTIVE NAV LINK INDICATOR ==============
/**
 * Update active nav link based on current section
 */
function updateActiveNavLink() {
    let currentSectionId = '';
    
    pageSections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    navItems.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
    });
}

let scrollTicking = false;

function updateScrollDrivenUI() {
    updateBackToTopState();
    updateNavbarState();
    updateActiveNavLink();
}

function requestScrollUpdate() {
    if (scrollTicking) return;

    scrollTicking = true;
    window.requestAnimationFrame(() => {
        updateScrollDrivenUI();
        scrollTicking = false;
    });
}

window.addEventListener('scroll', requestScrollUpdate, { passive: true });
updateScrollDrivenUI();

// ============== KEYBOARD SHORTCUTS ==============
/**
 * Keyboard shortcuts:
 * - 'D' to toggle dark mode
 * - 'ESC' to close mobile menu
 */
document.addEventListener('keydown', (e) => {
    // Toggle dark mode with 'D' key
    if (e.key.toLowerCase() === 'd' && !e.ctrlKey && !e.metaKey) {
        themeToggle.click();
    }
    
    // Close mobile menu with ESC key
    if (e.key === 'Escape') {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        navbar?.classList.remove('menu-open');
    }
});

// ============== CONSOLE WELCOME MESSAGE ==============
console.log(
    '%cWelcome to Mỹ Trâm\'s Portfolio!',
    'font-size: 18px; font-weight: bold; color: #ff5f95;'
);
console.log(
    '%cExplore Vietnam through my eyes.',
    'font-size: 14px; color: #555; font-style: italic;'
);

// ============== PERFORMANCE: LAZY LOADING ==============
/**
 * Lazy load images
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
} else {
    document.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
}

// ============== PAGE INITIALIZE ==============
/**
 * Initialize all features on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Mỹ Trâm\'s portfolio initialized successfully!');
    
    // Add initial animations
    const heroElements = document.querySelectorAll('.hero .fade-in-up');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

// ============== SMOOTH TRANSITION ON PAGE LOAD ==============
document.body.style.opacity = '0';
window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
});
