const imagesToLoad = document.querySelectorAll('[data-src]');

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px -50px 0px'
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
}

const imgObserver = new IntersectionObserver ((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            loadImages(entry.target);
            imgObserver.unobserve(entry.target);
        } 
    })
}, imgOptions);

imagesToLoad.forEach((image) => {
    imgObserver.observe(image);
});