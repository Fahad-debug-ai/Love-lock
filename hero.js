/*=========================================================
    HERO SECTION
    Version : 1.0
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /*=====================================================
        CONFIG
    =====================================================*/

    const heroConfig = CONFIG.hero;

    const personalConfig = CONFIG.personal;

    /*=====================================================
        ELEMENTS
    =====================================================*/

    const heroSection = document.querySelector("#hero");

    const heroBadge = document.querySelector(".hero-badge");

    const heroTitle = document.querySelector(".hero-title");

    const girlName = document.querySelector(".girl-name");

    const heroDescription = document.querySelector(".hero-description");

    const heroButton = document.querySelector(".hero-button");

    const heroImage = document.querySelector(".hero-image");

    const scrollIndicator = document.querySelector(".scroll-indicator");

    /*=====================================================
        SAFETY CHECK
    =====================================================*/

    if(

        !heroSection ||

        !heroBadge ||

        !heroTitle ||

        !girlName ||

        !heroDescription ||

        !heroButton ||

        !heroImage ||

        !scrollIndicator

    ){

        console.warn("Hero Section Elements Missing");

        return;

    }

    /*=====================================================
        STATE
    =====================================================*/

    const STATE = {

        initialized:false,

        buttonClicked:false

    };

    /*=====================================================
        INITIALIZE CONTENT
    =====================================================*/

    function initializeHero(){

        heroBadge.textContent = heroConfig.badge;

        girlName.textContent = personalConfig.girlName;

        heroDescription.textContent = heroConfig.subtitle;

        heroButton.textContent = heroConfig.buttonText;

        heroImage.src = heroConfig.image;

        heroImage.alt = personalConfig.girlName;

        STATE.initialized = true;

    }

    initializeHero();

        /*=====================================================
        UPDATE TITLE
    =====================================================*/

    function updateTitle(){

        heroTitle.innerHTML = `

            ${heroConfig.title}

            <span class="girl-name">

                ${personalConfig.girlName}

            </span>

        `;

    }

    updateTitle();

    /*=====================================================
        HERO ENTRANCE ANIMATION
    =====================================================*/

    function playEntranceAnimation(){

        heroSection.classList.add("hero-loaded");

    }

    /*=====================================================
        SCROLL TO NEXT SECTION
    =====================================================*/

    function scrollToNextSection(){

        const gallerySection = document.querySelector("#gallery");

        if(!gallerySection){

            console.warn("Gallery Section Not Found");

            return;

        }

        gallerySection.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    }

    /*=====================================================
        BUTTON CLICK
    =====================================================*/

    heroButton.addEventListener("click",()=>{

        if(STATE.buttonClicked) return;

        STATE.buttonClicked = true;

        heroButton.classList.add("clicked");

        setTimeout(()=>{

            scrollToNextSection();

        },700);

    });

    /*=====================================================
        SCROLL INDICATOR
    =====================================================*/

    scrollIndicator.addEventListener("click",()=>{

        scrollToNextSection();

    });

    /*=====================================================
        START ANIMATION
    =====================================================*/

    setTimeout(()=>{

        playEntranceAnimation();

    },300);

        /*=====================================================
        FLOATING IMAGE ANIMATION
    =====================================================*/

    function startImageFloat(){

        let time = 0;

        setInterval(()=>{

            time += 0.02;

            const y = Math.sin(time) * 8;

            heroImage.style.transform = `translateY(${y}px) scale(1)`;

        },16);

    }

    /*=====================================================
        HEART BURST
    =====================================================*/

    function createHeartBurst(){

        for(let i=0;i<20;i++){

            const heart = document.createElement("span");

            heart.className = "hero-heart";

            heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💖";

            const angle = Math.random()*360;

            const distance = 80 + Math.random()*70;

            const x = Math.cos(angle*Math.PI/180)*distance;

            const y = Math.sin(angle*Math.PI/180)*distance;

            heart.style.left = "50%";

            heart.style.top = "50%";

            heart.style.setProperty("--x",`${x}px`);

            heart.style.setProperty("--y",`${y}px`);

            heroButton.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },1500);

        }

    }

    /*=====================================================
        BUTTON EFFECT
    =====================================================*/

    heroButton.addEventListener("click",()=>{

        createHeartBurst();

    });

    /*=====================================================
        INITIALIZE
    =====================================================*/

    startImageFloat();

    /*=====================================================
        DEBUG
    =====================================================*/

    console.log(

        "%cHero Section Loaded",

        "color:#ff5f9a;font-weight:bold;"

    );

});