"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.photo-desc'),
        leftMenu = document.querySelector('.slider-left'),
        slideBtns = document.querySelectorAll('.slider-left li'),
        imgsUpSlider = ['img/photo-1525351549016-1ddd272c8315.png', 'img/project.jpg', 'img/m1920x1080.jpg', 'img/1.jpg'],
        imgsDownSlider = ['../img/wellcome5.jpg', 'img/project.jpg', 'img/m1920x1080.jpg', 'img/photo-1525351549016-1ddd272c8315.png'],
        downSliderImg = document.querySelector('.project-down'),
        downSliderBtn = document.querySelector('.slider-btn'),
        downSliderText = document.querySelector('.office-text'),
        downSliderCounter = document.querySelector('.office-point span');



    function screenTest() { //В данной функции используется ветвление для разных устройств
        if (screen.width < 430) {
            sliderRebuild();
            footerRebuild();
        }
    }
    console.log(slideBtns[0].firstElementChild)

    function rollSlideUp(n = 0) {


        slides.forEach((slide) => {
            if (n == 0) {
                const counter = 0;
                slide.style.transform = `translateY(${counter}px)`;
                slideBtns[1].firstElementChild.removeAttribute('id', 'active');
                slideBtns[2].firstElementChild.removeAttribute('id', 'active');
                slideBtns[3].firstElementChild.removeAttribute('id', 'active');
            } else if (n == 1) {
                const counter = -560;
                slide.style.transform = `translateY(${counter}px)`;
                slideBtns[0].firstElementChild.removeAttribute('id', 'active');
                slideBtns[2].firstElementChild.removeAttribute('id', 'active');
                slideBtns[3].firstElementChild.removeAttribute('id', 'active');
            } else if (n == 2) {
                const counter = -560 * 2;
                slide.style.transform = `translateY(${counter}px)`;
                slideBtns[0].firstElementChild.removeAttribute('id', 'active');
                slideBtns[1].firstElementChild.removeAttribute('id', 'active');
                slideBtns[3].firstElementChild.removeAttribute('id', 'active');
            } else if (n == 3) {
                const counter = -560 * 3;
                slide.style.transform = `translateY(${counter}px)`;
                slideBtns[0].firstElementChild.removeAttribute('id', 'active');
                slideBtns[1].firstElementChild.removeAttribute('id', 'active');
                slideBtns[2].firstElementChild.removeAttribute('id', 'active');
            }
        });

    }

    function sliderRebuild() {
        const sliderRight = document.querySelector('.slider-right'),
            allPoints = document.querySelectorAll('.slider-left li');

        sliderRight.style.display = "none";
        downSliderText.style.opacity = "0%";
        for (let i = 0; i < allPoints.length; i++) {


            let mobileLayout = document.createElement('div');
            mobileLayout.innerHTML = ` <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra arcu et ornare consectetur vel lobortis urna</p>
                <div class="slider-img">
                    <img src="${imgsUpSlider[i]}" alt="">
                </div>`;
            allPoints[i].after(mobileLayout);

        }

    }

    function footerRebuild() {
        const contactInput = document.querySelector('.contact-input'),
            socialMedia = document.querySelector('.social-media'),
            contactInfo = document.querySelector('.contact-info');

        contactInput.style.cssText = `display: inline-block;
        position: relative;
        top: 35px;
        width: 100%;
        height: 48px;
        margin-left: 0%`;

        contactInfo.style.marginTop = '14%';
        contactInfo.lastElementChild.style.width = '100%';
        socialMedia.firstElementChild.remove();
        socialMedia.style.cssText = `width: 96%;
        height: 64px;
        display: block;
        margin-top: 14%;`;
        const rights = document.createElement('span');
        rights.style.cssText = `color: #fff;
        font-weight: 400;
        font-size: 14px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10%;
        width: 80%;
        display: block;`;
        rights.innerHTML = `2022 © Pinkhead and Doom rights`;
        socialMedia.after(rights);
    }

    function showSlide(i) {
        downSliderImg.style.opacity = '0%';
        downSliderImg.style.background = `url(${imgsDownSlider[i]})`;
        downSliderImg.style.backgroundPosition = 'center';
        downSliderImg.style.backgroundSize = '100% 100%';

        downSliderImg.style.opacity = '100%';
        downSliderCounter.textContent = `0${i+1}`;
    }
    screenTest();

    leftMenu.addEventListener('click', e => {
        const target = e.target;
        console.log(document.clientY);
        if (target) {

            slideBtns.forEach((btn, n) => {
                if (target == btn) {

                    slideBtns[n].firstElementChild.setAttribute('id', 'active');

                    rollSlideUp(n);

                }
            });
        }
    });
    let i = 1;
    downSliderBtn.addEventListener('click', e => {
        e.preventDefault();
        showSlide(i);
        if (i >= 2) {
            i = 0;
        } else {
            i = i + 1;
        }

    });


    //VIDEO PLAYER

    const playerBtn = document.querySelector('.play-img');
    const player = document.querySelector('.about-video');
    const btns = document.querySelectorAll('.main-buttons div');
    const video = document.querySelector('#player');
    const aboutUs = document.querySelector('.about-us');
    const getInTouchBtn = document.querySelector('.btn');
    console.log(btns);
    video.style.display = "none";
    // video.style.opacity = "0%";
    playerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        getInTouchBtn.style.zIndex = "0";
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


    //MOBILE MENU
    const button = document.querySelector('#menu-btn'),
        headerMenu = document.querySelector('nav ul');

    const rights = document.createElement('div');

    rights.innerHTML = "";
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

            headerMenu.style.display = 'block';
            headerMenu.classList.add('navOpen');

        }
    });

});