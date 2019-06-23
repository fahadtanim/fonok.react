export default class CarosellService {
    constructor(sliderClass, sliderContainerClassName, dotclass, dotActiveClass, intervalTime) {
        this.slideIndex = 0;
        this.x = 0;
        this.sliderClassName = sliderClass;
        this.sliderContainerClassName = sliderContainerClassName;
        this.dotClassName = dotclass;
        this.dotActiveClass = dotActiveClass;
        this.slideIntervalTime = intervalTime;
        this.setSliderWidth();
    }
    setSliderWidth() {
        let i;
        let slide;
        let width;
        const slides = document.getElementsByClassName(this.sliderClassName);
        const slideLen = document.getElementsByClassName(this.sliderClassName).length;
        width = 0;
        for (i = slideLen - 1; i >= this.slideIndex; i--) {
            slide = slides[i];
            width += slide.clientWidth;
        }
        document.getElementById(this.sliderContainerClassName).style.width = width + 'px';
    }
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
    showSlides(n) {
        let i;
        let slide;
        const slides = document.getElementsByClassName(this.sliderClassName);
        const slideLen = slides.length;
        const dots = document.getElementsByClassName(this.dotClassName);
        if (n >= slideLen) {
            this.slideIndex = 0;
        }
        if (n < 0) {
            this.slideIndex = slideLen;
        }
        for (i = slideLen - 1; i >= this.slideIndex; i--) {
            slide = slides[i];
            slide.style.marginLeft = '0%';
        }
        for (i = 0; i < this.slideIndex; i++) {
            slide = slides[i];
            slide.style.marginLeft = '-100%';
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace((' ' + this.dotActiveClass), '');
        }
        slide = slides[this.slideIndex];
        slide.style.marginLeft = '0%';
        dots[this.slideIndex].className += (' ' + this.dotActiveClass);
    }
    currentSlide(n) {
        const len = document.getElementsByClassName(this.dotClassName).length;
        if (n >= len) {
            n = 0;
        }
        this.showSlides(this.slideIndex = n);
    }
    increment() {
        const len = document.getElementsByClassName(this.dotClassName).length;
        if (this.x < len) {
            this.currentSlide(this.x);
            this.x++;
        }
        else {
            this.currentSlide(0);
            this.x = 0;
        }
    }
    stopAnimate() {
        clearInterval(this.slideInterval);
    }
    animate() {
        this.slideInterval = setInterval(this.increment.bind(this), this.slideIntervalTime * 1000);
    }
}
