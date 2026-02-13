/**
 * Gravity Animation - First Visit Only
 * Animates page elements with a falling/gravity effect on first visit
 */

(function () {
    'use strict';

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        return; // Exit early if user prefers reduced motion
    }

    // Check if this is the first visit in this session
    const hasVisited = sessionStorage.getItem('gravity-animation-played');

    if (hasVisited) {
        return; // Exit early if animation already played
    }

    // Mark as visited
    sessionStorage.setItem('gravity-animation-played', 'true');

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGravityAnimation);
    } else {
        initGravityAnimation();
    }

    function initGravityAnimation() {
        // Add body class to prevent scrolling during animation
        document.body.classList.add('gravity-animating');

        // Create loading overlay
        const overlay = document.createElement('div');
        overlay.className = 'gravity-loading-overlay';
        document.body.appendChild(overlay);

        // Select elements to animate
        const elementsToAnimate = [
            document.querySelector('header'),
            document.querySelector('main'),
            document.querySelector('.profile'),
            document.querySelector('.main'),
            document.querySelector('footer')
        ].filter(el => el !== null); // Remove null elements

        // Add gravity-animate class to elements
        elementsToAnimate.forEach((element, index) => {
            element.classList.add('gravity-animate');

            // Stagger the animations
            setTimeout(() => {
                const animationClass = `active-${(index % 5) + 1}`;
                element.classList.add(animationClass);
            }, 50);
        });

        // Remove overlay after animation starts
        setTimeout(() => {
            overlay.classList.add('fade-out');
            setTimeout(() => {
                overlay.remove();
            }, 500);
        }, 300);

        // Cleanup after all animations complete
        const longestAnimation = 2600; // 2.1s animation + 0.5s delay
        setTimeout(() => {
            // Remove animation classes
            elementsToAnimate.forEach(element => {
                element.classList.remove('gravity-animate');
                element.classList.add('completed');
                // Remove active classes
                for (let i = 1; i <= 5; i++) {
                    element.classList.remove(`active-${i}`);
                }
            });

            // Re-enable scrolling
            document.body.classList.remove('gravity-animating');

            // Clean up completed class after transition
            setTimeout(() => {
                elementsToAnimate.forEach(element => {
                    element.classList.remove('completed');
                });
            }, 500);
        }, longestAnimation);
    }

    // Optional: Add method to reset animation (for testing)
    window.resetGravityAnimation = function () {
        sessionStorage.removeItem('gravity-animation-played');
        console.log('Gravity animation reset. Reload the page to see it again.');
    };
})();
