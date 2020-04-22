const emailIcon = document.querySelector('.svg-icon');
const githubIcon = document.querySelector('.github');



emailIcon.addEventListener('click', e => {
    const element = e.target;
    element.style.fillOpacity = ".4"
    element.style.transform = "scale(1.3)"
});

githubIcon.addEventListener('click', e => {
    const element = e.target;
    element.style.fillOpacity= ".4"
    element.style.transform = "scale(1.3)"
});

