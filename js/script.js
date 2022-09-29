"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.photo-desc'),
        leftMenu = document.querySelector('.slider-left'),
        rightMenu = document.querySelector('.slider-right'),
        mobileWrapper = document.querySelector('.slider-right-wrapper'),
        slideBtns = document.querySelectorAll('.slider-left li'),
        sliderContainer = document.querySelector('.slider-container');


    console.log(slides[0]);

    function showSlide(i = 0) {
        slides[i].classList.remove('hide');
        slides[i].classList.add('show');

        slides[i].style.transform = `translateY(${-840}px)`;

        slideBtns[i].childNodes[0].classList.add('active-btn');
    }

    function hideSlide(i = 0) {
        slides.forEach((slide, i) => {
            slide.classList.remove('show');
            slide.classList.add('hide');
            if (slide.classList.contains('hide')) {
                slide.style.transform = `translateY(${-840}px)`;
            }
        });

        slideBtns.forEach(btn => {
            btn.childNodes[0].classList.remove('active-btn');
        });

    }

    function rollSlideUp(i = 0) {
        // console.log(slides[i].offsetHeight * (-1));
        let counter = 0;
        slides.forEach((slide, i) => {
            // console.log(slide.offsetHeight);
            slide.style.transform = `translateY(${slide.offsetHeight * (-1)}px)`;
            counter = slide.offsetHeight * (-1);
            // counter *= 2;
        });
        slides[i].style.transform = `translateY(${slides[i].offsetHeight * (-1)}px)`;
        console.log(counter);

    }

    // function rollSlideDown(i = 0) {
    //     slides.forEach((slide, i) => {
    //         // console.log(slide.offsetHeight);
    //         slide.style.transform = `translateY(${560}px)`;
    //     });

    // }
    // hideSlide();
    // showSlide();
    screenTest();

    leftMenu.addEventListener('click', e => {
        const target = e.target;
        console.log(document.clientY);
        if (target) {

            slideBtns.forEach((btn, i) => {
                if (target == btn) {
                    // hideSlide();
                    // showSlide();
                    // rollSlideDown();
                    rollSlideUp();

                }
            });
        }
    });



    function screenTest() { //В данной функции используется ветвление для разных устройств
        if (screen.width < 430) {
            // test();
        } else {
            // hideSlide(i - 1);
            // showSlide(i);
        }
    }

    function test() {
        window.addEventListener('scroll', startSliderBySwipe);
        leftMenu.style.display = "none";
        rightMenu.style.cssText = "margin-left: 2%;";
        mobileWrapper.style.overflow = "scroll";
    }

    function startSliderBySwipe() {
        if (window.pageYOffset > 730 && window.pageYOffset < window.pageYOffset + document.documentElement.clientHeight) {
            // sliderContainer.style.position = "fixed";

        }
        if (window.pageYOffset > window.innerHeight) {
            console.log(window.innerHeight);
            sliderContainer.style.position = "fixed";
        }
        console.log(window.pageYOffset);
        // console.log(window.innerHeight);
        // mobileWrapper.addEventListener('scroll', rollSlideUp);
    }


    //VIDEO PLAYER

    const playerBtn = document.querySelector('.play-img');
    const player = document.querySelector('.about-video');
    const btns = document.querySelectorAll('.main-buttons div');
    const video = document.querySelector('#player');
    const aboutUs = document.querySelector('.about-us');
    console.log(btns);
    video.style.display = "none";
    // video.style.opacity = "0%";
    playerBtn.addEventListener('click', (e) => {
        e.preventDefault();

        btns.forEach(btn => {
            btn.style.opacity = "0%";
            console.log(btn);
        });
        btns[2].style.opacity = "100%";

        setTimeout(() => {
            player.style.display = "block";

            setTimeout(() => {
                player.style.width = "100%";

            }, 200);
            setTimeout(() => {

                player.style.height = "1000px";
                video.style.display = "block";

            }, 200);
            setTimeout(() => {

                player.style.top = "0px";
                // video.style.opacity = "100%";

            }, 2000);



        }, 500);


    });

    const button = document.querySelector('#menu-btn'),
        headerMenu = document.querySelector('nav ul');


    button.classList.remove('open');
    button.addEventListener('click', (e) => {
        e.preventDefault();

        if (button.classList.contains('open')) {
            button.classList.remove('open');
            button.classList.add('close');
            headerMenu.style.opacity = "0%";
            headerMenu.style.display = "none";

        } else {
            button.classList.remove('close');
            button.classList.add('open');
            headerMenu.style.display = "block";
            headerMenu.style.opacity = "100%";
        }
    });

});