/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ----- ADD SHADOW ON SCROLL ----- */
window.onscroll = function () { headerShadow(); };
function headerShadow() {
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
    }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
    strings: ["Data Scientist", "Data Analyst", "Machine Learning Engineer", "GenAI & LLM Developer", "Data Engineer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});

/* ----- SCROLL REVEAL ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });
sr.reveal('.top-header', {});
sr.reveal('.project-card', { interval: 150 });
sr.reveal('.skill-card', { interval: 100 });

const srLeft = ScrollReveal({ origin: 'left', distance: '80px', duration: 2000, reset: true });
srLeft.reveal('.about-content', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

const srRight = ScrollReveal({ origin: 'right', distance: '80px', duration: 2000, reset: true });
srRight.reveal('.form-control', { delay: 100 });


/* ----- TIMELINE SCROLL REVEAL (animated, one-time reveal) ----- */
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    function revealTimelineItems() {
        const triggerPoint = window.innerHeight * 0.85;

        items.forEach((item, index) => {
            const rect = item.getBoundingClientRect();

            // Reveal when item enters viewport
            if (rect.top < triggerPoint && !item.classList.contains("show")) {
                // small stagger for a smoother interactive feel
                setTimeout(() => {
                    item.classList.add("show");
                }, index * 80);
            }
        });
    }

    window.addEventListener("scroll", revealTimelineItems, { passive: true });
    window.addEventListener("resize", revealTimelineItems);

    revealTimelineItems(); // initial check for items already visible
});

/* ----- ACTIVE NAV LINK ON SCROLL ----- */
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);
