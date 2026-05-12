export function initNavigation() {
    // =============================================
    // SCROLL SPY (Active Nav Highlighting)
    // =============================================
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("[data-nav]");
    
    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove("nav-active");
                    if (link.dataset.nav === id) {
                        link.classList.add("nav-active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // =============================================
    // BACK TO TOP BUTTON
    // =============================================
    const backToTop = document.getElementById("back-to-top");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 600) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    }, { passive: true });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
