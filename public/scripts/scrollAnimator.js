/**
 * Adds animations to elements when they are visable. elements must look like
 *  <element data-inviewport="anim-name"> to be watched
 */
export const setupScrollAnimations = () => {
    const inViewport = (entries, observer) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
        });
    };

    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
    ELs_inViewport.forEach(EL => {
        Obs.observe(EL, obsOptions);
    });
}