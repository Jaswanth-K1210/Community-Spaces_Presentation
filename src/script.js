export function initCinematicAnimations() {
    let animationFrameId;

    // --- Scroll Progress Bar & Navbar ---
    const progressBar = document.getElementById("scroll-progress");
    const navbar = document.getElementById("navbar");

    // --- Parallax Elements ---
    const heroMockup = document.getElementById("hero-mockup");
    const showcaseLeft = document.getElementById("showcase-left");
    const showcaseCenter = document.getElementById("showcase-center");
    const showcaseRight = document.getElementById("showcase-right");

    // --- Smooth Scroll State ---
    let targetScroll = window.scrollY;
    let currentScroll = window.scrollY;
    let scrollRafId;

    const onScroll = () => {
        targetScroll = window.scrollY;
    };
    // Passive listener for maximum scroll performance
    window.addEventListener("scroll", onScroll, { passive: true });

    const smoothScrollLoop = () => {
        // Lerp (Linear Interpolation) for buttery smoothness
        currentScroll += (targetScroll - currentScroll) * 0.08;

        // Stop calculating if difference is microscopic to save CPU
        if (Math.abs(targetScroll - currentScroll) > 0.1) {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollHeight > 0 ? (currentScroll / scrollHeight) : 0;

            if (progressBar) progressBar.style.transform = `scaleX(${progress})`;

            if (currentScroll > 50) {
                navbar?.classList.add("scrolled");
            } else {
                navbar?.classList.remove("scrolled");
            }

            // Hero 3D Rotation based on smooth scroll
            if (heroMockup && currentScroll < window.innerHeight + 200) {
                const rotateX = Math.max(0, 15 - currentScroll * 0.05);
                const rotateY = -15 + currentScroll * 0.05;
                const translateZ = currentScroll * 0.2;
                heroMockup.style.transform = `translate3d(0,0,0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
            }

            // Showcase Scroll Overlapping Parallax - Optimized
            const showcaseSection = document.getElementById("showcase-section");
            if (showcaseSection) {
                const rect = showcaseSection.getBoundingClientRect();
                const distance = rect.top + (targetScroll - currentScroll) + rect.height / 2 - window.innerHeight / 2;
                const parallaxFactor = distance * 0.08;

                if (showcaseLeft) showcaseLeft.style.transform = `translate3d(0, ${parallaxFactor * 1.5}px, 0) rotateY(15deg)`;
                if (showcaseCenter) showcaseCenter.style.transform = `translate3d(0, ${parallaxFactor * -0.5}px, 50px)`;
                if (showcaseRight) showcaseRight.style.transform = `translate3d(0, ${parallaxFactor * 1.5}px, 0) rotateY(-15deg)`;
            }
        }

        scrollRafId = requestAnimationFrame(smoothScrollLoop);
    };

    // Start the smooth scroll loop
    smoothScrollLoop();

    // --- Intersection Observers for Cinematic Reveals ---
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "-50px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Stagger children if it has stagger class
                if (entry.target.classList.contains('stagger-container')) {
                    const children = entry.target.querySelectorAll('.stagger-item');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, index * 150);
                    });
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.cinematic-reveal').forEach((el) => {
        revealObserver.observe(el);
    });

    // --- Simple Cinematic Canvas Particles ---
    const canvas = document.getElementById("cinematic-canvas");
    let particlesArray = [];
    let _w = window.innerWidth;
    let _h = window.innerHeight;
    let isCanvasVisible = true;

    class Particle {
        constructor(w, h) {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3 - 0.5; // Drift upwards
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        update(w, h) {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.y < 0) {
                this.y = h;
                this.x = Math.random() * w;
            }
            if (this.x < 0 || this.x > w) this.speedX *= -1;
        }
        draw(ctx) {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const initCanvas = () => {
        if (!canvas) return;
        _w = window.innerWidth;
        _h = window.innerHeight;
        canvas.width = _w;
        canvas.height = _h;
        particlesArray = [];
        // Reduce particles on low-end devices
        const count = window.innerWidth < 768 ? 40 : 120;
        for (let i = 0; i < count; i++) {
            particlesArray.push(new Particle(_w, _h));
        }
    };

    // Pause canvas when off-screen
    if (canvas) {
        const canvasObserver = new IntersectionObserver((entries) => {
            isCanvasVisible = entries[0].isIntersecting;
        }, { threshold: 0 });
        canvasObserver.observe(canvas);
    }

    const animateCanvas = () => {
        if (!canvas) return;

        // Skip rendering if canvas is off-screen
        if (!isCanvasVisible) {
            animationFrameId = requestAnimationFrame(animateCanvas);
            return;
        }

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, _w, _h);

        // Slight gradient glow
        const gradient = ctx.createRadialGradient(_w / 2, _h / 2, 0, _w / 2, _h / 2, _w);
        gradient.addColorStop(0, 'rgba(224, 101, 75, 0.1)'); // Primary coral glow
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, _w, _h);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update(_w, _h);
            particlesArray[i].draw(ctx);
        }
        animationFrameId = requestAnimationFrame(animateCanvas);
    };

    if (canvas) {
        initCanvas();
        animateCanvas();
        window.addEventListener('resize', initCanvas);
    }

    // Return a cleanup function
    return () => {
        window.removeEventListener("scroll", onScroll);
        if (canvas) window.removeEventListener('resize', initCanvas);
        revealObserver.disconnect();
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        if (scrollRafId) cancelAnimationFrame(scrollRafId);
    };
}
