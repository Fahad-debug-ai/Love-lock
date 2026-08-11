/*=========================================================
    LETTER SECTION
    Version : 2.0
=========================================================*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
        ELEMENTS
    =====================================================*/

    const letterSection = document.querySelector("#letter");

    const envelope = document.querySelector("#openLetter");

    const letterPaper = document.querySelector(".letter-paper");

    const flap = document.querySelector(".envelope-flap");

    const typingText = document.querySelector("#typingText");

    const heading = document.querySelector("#letterHeading");

    const description = document.querySelector("#letterDescription");

    const signature = document.querySelector("#letterSignature");

    const teddy = document.querySelector(".letter-teddy");

    /*=====================================================
        SAFETY CHECK
    =====================================================*/

    if (

        !letterSection ||

        !envelope ||

        !letterPaper ||

        !flap ||

        !typingText ||

        !heading ||

        !description ||

        !signature ||

        !teddy

    ){

        console.error("Letter Section Elements Missing.");

        return;

    }

    /*=====================================================
        CONFIG
    =====================================================*/

    const LETTER = CONFIG.letter;

    const SETTINGS = CONFIG.letterSettings;

    const HEARTS = CONFIG.hearts;

    const AUDIO = CONFIG.audio;

    const ANIMATION = CONFIG.animation;

    /*=====================================================
        VARIABLES
    =====================================================*/

    let isOpened = false;

    let typingInterval = null;

    let openAudio = null;

    /*=====================================================
        AUDIO
    =====================================================*/

    try{

        openAudio = new Audio(AUDIO.letterOpen);

        openAudio.preload = "auto";

        openAudio.volume = 0.6;

    }

    catch(error){

        console.warn("Letter audio could not load.");

    }

    /*=====================================================
        INITIALIZE CONTENT
    =====================================================*/

    function initializeLetter(){

        heading.textContent = LETTER.heading;

        description.textContent = LETTER.description;

        signature.textContent = LETTER.signature;

        typingText.textContent = "";

    }

    initializeLetter();

    /*=====================================================
        PLAY AUDIO
    =====================================================*/

    function playAudio(){

        if(!openAudio) return;

        openAudio.currentTime = 0;

        openAudio.play().catch(()=>{});

    }

    /*=====================================================
        TYPEWRITER RESET
    =====================================================*/

    function resetTyping(){

        clearInterval(typingInterval);

        typingText.textContent = "";

    }

    console.log(

        "%cLetter Section Loaded",

        "color:#ff5ea8;font-weight:bold;"

    );

        /*=====================================================
        TYPEWRITER EFFECT
    =====================================================*/

    function typeLetter(){

        resetTyping();

        const message = LETTER.message;

        let index = 0;

        typingInterval = setInterval(()=>{

            if(index >= message.length){

                clearInterval(typingInterval);

                return;

            }

            typingText.textContent += message.charAt(index);

            typingText.scrollTop = typingText.scrollHeight;

            index++;

        },SETTINGS.typingSpeed);

    }

    /*=====================================================
        TEDDY JUMP
    =====================================================*/

    function teddyJump(){

        teddy.classList.remove("jump");

        void teddy.offsetWidth;

        teddy.classList.add("jump");

        setTimeout(()=>{

            teddy.classList.remove("jump");

        },900);

    }

    /*=====================================================
        CREATE HEART
    =====================================================*/

    function createHeart(){

        const heart = document.createElement("span");

        heart.className = "letter-heart";

        heart.innerHTML =

            HEARTS.emojis[

                Math.floor(

                    Math.random()*HEARTS.emojis.length

                )

            ];

        heart.style.left =

            Math.random()*100 + "%";

        heart.style.fontSize =

            (18 + Math.random()*14) + "px";

        letterSection.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },HEARTS.lifeTime);

    }

    /*=====================================================
        HEART BURST
    =====================================================*/

    function heartBurst(){

        let count = 0;

        const interval = setInterval(()=>{

            createHeart();

            count++;

            if(count >= SETTINGS.heartBurstCount){

                clearInterval(interval);

            }

        },120);

    }

    /*=====================================================
        SCROLL TO BOTTOM OF LETTER
    =====================================================*/

    function scrollLetter(){

        letterPaper.scrollTop =

            letterPaper.scrollHeight;

    }

    /*=====================================================
        SMALL DELAY
    =====================================================*/

    function wait(ms){

        return new Promise(resolve=>{

            setTimeout(resolve,ms);

        });

    }

        /*=====================================================
        OPEN ENVELOPE
    =====================================================*/

    async function openEnvelope(){

        if(isOpened){

            return;

        }

        isOpened = true;

        playAudio();

        envelope.classList.add("open");

        teddyJump();

        heartBurst();

        await wait(650);

        typeLetter();

    }

    /*=====================================================
        CLOSE ENVELOPE
    =====================================================*/

    function closeEnvelope(){

        clearInterval(typingInterval);

        typingText.textContent = "";

        envelope.classList.remove("open");

        teddy.classList.remove("jump");

        isOpened = false;

    }

    /*=====================================================
        CLICK EVENT
    =====================================================*/

    envelope.addEventListener("click",()=>{

        openEnvelope();

    });

    /*=====================================================
        KEYBOARD SUPPORT
    =====================================================*/

    envelope.setAttribute("tabindex","0");

    envelope.addEventListener("keydown",(event)=>{

        if(

            event.key==="Enter" ||

            event.key===" "

        ){

            event.preventDefault();

            openEnvelope();

        }

    });

    /*=====================================================
        OPTIONAL AUTO START
    =====================================================*/

    if(SETTINGS.autoStart){

        const observer = new IntersectionObserver(

            (entries)=>{

                entries.forEach(entry=>{

                    if(

                        entry.isIntersecting &&

                        !isOpened

                    ){

                        observer.unobserve(letterSection);

                    }

                });

            },

            {

                threshold:0.4

            }

        );

        observer.observe(letterSection);

    }

    /*=====================================================
        RESET API
    =====================================================*/

    window.resetLetter = function(){

        closeEnvelope();

    };

    /*=====================================================
        OPEN API
    =====================================================*/

    window.openLetter = function(){

        openEnvelope();

    };

        /*=====================================================
        CURSOR BLINK (OPTIONAL)
    =====================================================*/

    if(SETTINGS.showCursor){

        const cursor = document.createElement("span");

        cursor.className = "typing-cursor";

        cursor.textContent = "|";

        typingText.after(cursor);

    }

    /*=====================================================
        AUTO SCROLL TO PROPOSAL
    =====================================================*/

    function goToProposal(){

        const proposalSection = document.querySelector("#proposal");

        if(

            !proposalSection ||

            !CONFIG.website.smoothScroll

        ){

            return;

        }

        setTimeout(()=>{

            proposalSection.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        },9000);

    }

    /*=====================================================
        UPDATE OPEN FUNCTION
    =====================================================*/

    const originalOpenEnvelope = openEnvelope;

    openEnvelope = async function(){

        await originalOpenEnvelope();

        goToProposal();

    };

    /*=====================================================
        PAGE VISIBILITY
    =====================================================*/

    document.addEventListener(

        "visibilitychange",

        ()=>{

            if(document.hidden){

                clearInterval(typingInterval);

            }

        }

    );

    /*=====================================================
        WINDOW RESIZE
    =====================================================*/

    window.addEventListener(

        "resize",

        ()=>{

            scrollLetter();

        }

    );

    /*=====================================================
        DEBUG
    =====================================================*/

    if(CONFIG.developer.debug){

        console.log(

            "%cLetter.js Ready",

            "color:#ff5ea8;font-size:14px;font-weight:bold;"

        );

    }

});