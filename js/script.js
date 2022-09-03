"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");

    const mouseMove = function(e) {
        let x = e.clientX;
        let y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    };

    document.addEventListener("mousemove", mouseMove);
    const slides = document.querySelectorAll('.photo-desc'),
        leftMenu = document.querySelector('.slider-left'),
        slideBtns = document.querySelectorAll('.slider-left li');





    console.log(slides[0].childNodes[5]);

    function showSlide(i = 0) {
        slides[i].classList.remove('hide');
        slides[i].classList.add('show');

        slides[i].childNodes[5].style.transform = `translateY(${0}px)`;

        slideBtns[i].childNodes[0].classList.add('active-btn');
    }

    function hideSlide(i = 0) {
        slides.forEach((slide, i) => {
            slide.classList.remove('show');
            slide.classList.add('hide');
            if (slide.classList.contains('hide')) {
                slide.childNodes[5].style.transform = `translateY(${2000}px)`;
            }
        });



        slideBtns.forEach(btn => {
            btn.childNodes[0].classList.remove('active-btn');
        });

    }
    hideSlide();
    showSlide();

    leftMenu.addEventListener('click', e => {
        const target = e.target;

        if (target) {

            slideBtns.forEach((btn, i) => {
                if (target == btn) {
                    hideSlide(i - 1);
                    showSlide(i);
                }
            });
        }
    });

});