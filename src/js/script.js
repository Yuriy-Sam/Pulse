import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', function() {
    slider({
        container: '.container',
        slide: '.slider_slide',
        nextArrow: '.slider_next',
        prevArrow: '.slider_prev',
        // totalCounter: '#total',
        // currentCounter: '#current',
        wrapper: '.slider_wrapper',
        field: '.slider_inner'
    });
});