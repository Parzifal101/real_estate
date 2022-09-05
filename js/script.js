"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.photo-desc'),
        leftMenu = document.querySelector('.slider-left'),
        rightMenu = document.querySelector('.slider-right'),
        slideBtns = document.querySelectorAll('.slider-left li'),
        sliderContainer = document.querySelector('.slider-container');


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
    screenTest();

    leftMenu.addEventListener('click', e => {
        const target = e.target;
        console.log(document.clientY);
        if (target) {

            slideBtns.forEach((btn, i) => {
                if (target == btn) {
                    screenTest(i);
                }
            });
        }
    });



    function screenTest(i) { //В данной функции используется ветвление для разных устройств
        if (screen.width < 430) {
            test();
        } else {
            hideSlide(i - 1);
            showSlide(i);
        }
    }

    function test() {
        window.addEventListener('scroll', startSliderByScroll);
        leftMenu.style.display = "none";
        rightMenu.style.cssText = "margin-left: 2%;";
    }

    function startSliderByScroll() {

        if (window.pageYOffset > 730 && window.pageYOffset < window.pageYOffset + document.documentElement.clientHeight) {
            sliderContainer.style.position = "fixed";
            window.addEventListener('scroll', (e) => {
                console.log(document.documentElement.clientHeight);
                var st = window.pageYOffset || document.documentElement.scrollTop;
                let lastScrollTop = 0;
                if (st > lastScrollTop) {
                    console.log("down");

                } else {
                    console.log("up");
                }

            });
        }

    }





});