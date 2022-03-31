const header = document.querySelector('header');
const sectionHero = document.querySelector('#hero');

const sectionOneOptiHero = {
    rootMargin: '-300px 0px 0px 0px',
};

const sectionOneObserHero = new IntersectionObserver(function (
    entries,
    sectionOneObserHero
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('header-scrolled');
            sectionHero.classList.add('hero-scrolled');
        } else {
            header.classList.remove('header-scrolled');
            sectionHero.classList.remove('hero-scrolled');
        }
    });
},
sectionOneOptiHero);

sectionOneObserHero.observe(sectionHero);
