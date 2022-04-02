const header = document.querySelector('header');
const sectionInicio = document.querySelector('#inicio');

const sectionOneOptiInicio = {
    rootMargin: '-100px 0px 0px 0px',
};

const sectionOneObserInicio = new IntersectionObserver(function (
    entries,
    sectionOneObserInicio
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
},
sectionOneOptiInicio);

sectionOneObserInicio.observe(sectionInicio);
