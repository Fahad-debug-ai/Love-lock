"use strict";

/*=========================================================
    SUCCESS SECTION
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Ending Section Loaded");

    /*=====================================================
        ELEMENTS
    =====================================================*/

    const successSection =
        document.querySelector("#success");

    if (!successSection) return;

    const successHeading =
        document.querySelector("#successHeading");

    const successDescription =
        document.querySelector("#successDescription");

    const successMessage =
        document.querySelector("#successMessage");

    const successCouple =
        document.querySelector("#successCouple");

    const successDate =
        document.querySelector("#successDate");

    const successQuote =
        document.querySelector("#successQuote");

    const restartButton =
        document.querySelector("#restartWebsite");

    const boyTeddy =
        document.querySelector(".success-boy");

    const girlTeddy =
        document.querySelector(".success-girl");

    const heartRain =
        document.querySelector(".heart-rain");

    /*=====================================================
        CONFIG
    =====================================================*/

    const proposalConfig =
        CONFIG.proposal;

    const personalConfig =
        CONFIG.personal;

    /*=====================================================
        LOAD CONTENT
    =====================================================*/

    function loadSuccessContent(){

        successDescription.textContent =
            proposalConfig.description;

        successHeading.textContent =
            proposalConfig.successMessage;

        successMessage.textContent =
            "Thank you for making this journey so beautiful. Every smile, every memory and every heartbeat now feels complete because of you ❤️";

        successCouple.textContent =
            `${personalConfig.boyName} ❤️ ${personalConfig.girlName}`;

        successDate.textContent =
            personalConfig.proposalDate;

        successQuote.textContent =
            "Every love story is beautiful, but ours is my favorite.";

    }

    loadSuccessContent();

        /*=====================================================
        SECTION REVEAL
    =====================================================*/

    function revealSuccessSection(){

        const observer = new IntersectionObserver(

            (entries)=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        successSection.classList.add("show");

                        startHeartRain();

                        celebrateTeddies();

                    }

                });

            },

            {

                threshold:0.35

            }

        );

        observer.observe(successSection);

    }

    /*=====================================================
        HEART RAIN
    =====================================================*/

    function createHeart(){

        const heart=document.createElement("span");

        heart.className="success-heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"%";

        heart.style.animationDuration=

            3+Math.random()*3+"s";

        heart.style.fontSize=

            18+Math.random()*18+"px";

        heartRain.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },6000);

    }

    let heartInterval=null;

    function startHeartRain(){

        if(heartInterval) return;

        heartInterval=setInterval(

            createHeart,

            300

        );

    }

    /*=====================================================
        TEDDY CELEBRATION
    =====================================================*/

    function celebrateTeddies(){

        boyTeddy.classList.add("celebrate");

        girlTeddy.classList.add("celebrate");

    }

    revealSuccessSection();
        /*=====================================================
        SUCCESS SOUND
    =====================================================*/

    function playSuccessSound(){

        if(!CONFIG.audio?.proposalSuccess) return;

        const sound=new Audio(

            CONFIG.audio.proposalSuccess

        );

        sound.volume=.6;

        sound.play().catch(()=>{});

    }

    /*=====================================================
        SIMPLE CONFETTI
    =====================================================*/

    function createConfetti(){

        for(let i=0;i<60;i++){

            const piece=document.createElement("span");

            piece.className="confetti-piece";

            piece.style.left=Math.random()*100+"%";

            piece.style.background=

                CONFIG.confetti.colors[

                    Math.floor(

                        Math.random()*

                        CONFIG.confetti.colors.length

                    )

                ];

            piece.style.animationDuration=

                (2+Math.random()*2)+"s";

            piece.style.animationDelay=

                (Math.random()*0.5)+"s";

            successSection.appendChild(piece);

            setTimeout(()=>{

                piece.remove();

            },5000);

        }

    }

    /*=====================================================
        WATCH AGAIN
    =====================================================*/

    function restartWebsite(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

        setTimeout(()=>{

            location.reload();

        },1200);

    }

    restartButton.addEventListener(

        "click",

        restartWebsite

    );

    /*=====================================================
        START CELEBRATION
    =====================================================*/

    setTimeout(()=>{

        playSuccessSound();

        createConfetti();

    },1200);

});