/*=========================================================
    PROPOSAL SECTION
    Version : 2.0
=========================================================*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
        ELEMENTS
    =====================================================*/

    const proposalSection = document.querySelector("#proposal");

    const proposalTitle = document.querySelector("#proposalTitle");

    const proposalDescription = document.querySelector("#proposalDescription");

    const proposalMessage = document.querySelector("#proposalMessage");

    const yesButton = document.querySelector("#yesButton");

    const noButton = document.querySelector("#noButton");

    const teddy = document.querySelector(".proposal-teddy");

    const ring = document.querySelector(".proposal-ring");

    const proposalCard = document.querySelector(".proposal-card");

    /*=====================================================
        SAFETY CHECK
    =====================================================*/

    if (

        !proposalSection ||

        !proposalTitle ||

        !proposalDescription ||

        !proposalMessage ||

        !yesButton ||

        !noButton ||

        !teddy ||

        !ring ||

        !proposalCard

    ) {

        console.error("Proposal Section Elements Missing.");

        return;

    }

    /*=====================================================
        CONFIG
    =====================================================*/

    const PROPOSAL = CONFIG.proposal;

    const PERSONAL = CONFIG.personal;

    const HEARTS = CONFIG.hearts;

    const ANIMATION = CONFIG.animation;

    /*=====================================================
        VARIABLES
    =====================================================*/

    let noClickCount = 0;

    let accepted = false;

    /*=====================================================
        INITIALIZE CONTENT
    =====================================================*/

    function initializeProposal() {

        proposalDescription.textContent =

            PROPOSAL.description;

        proposalTitle.textContent =

            PROPOSAL.title;

        proposalMessage.innerHTML =

            `From the very first day I met you,
        I knew you were someone truly special.<br><br>

        Every smile of yours makes my world brighter,
        and every memory with you becomes my favorite memory.<br><br>

        ${PERSONAL.nickname},
        will you stay with me forever? ❤️`;

        yesButton.textContent =

            PROPOSAL.yesButton;

        noButton.textContent =

            PROPOSAL.noButton;

    }

    initializeProposal();

    console.log(

        "%cProposal Section Loaded",

        "color:#ff5f9d;font-weight:bold;"

    );

    /*=====================================================
    AUDIO
=====================================================*/

    let successAudio = null;

    try {

        successAudio = new Audio(

            CONFIG.audio.proposalSuccess

        );

        successAudio.preload = "auto";

        successAudio.volume = 0.7;

    }

    catch (error) {

        console.warn("Proposal audio not found.");

    }

    function playSuccessAudio() {

        if (!successAudio) return;

        successAudio.currentTime = 0;

        successAudio.play().catch(() => { });

    }

    /*=====================================================
        TEDDY CELEBRATION
    =====================================================*/

    function celebrateTeddy() {

        teddy.classList.add("celebrate");

        proposalSection.classList.add("proposal-success");

    }

    /*=====================================================
        RING ANIMATION
    =====================================================*/

    function showRing() {

        ring.style.opacity = "1";

        ring.style.transform =
            "translateX(-50%) translateY(-115px) scale(1.45) rotate(20deg)";

    }

    /*=====================================================
        CREATE HEART
    =====================================================*/

    function createHeart() {

        const heart = document.createElement("span");

        heart.className = "proposal-heart";

        heart.innerHTML =

            HEARTS.emojis[

            Math.floor(

                Math.random() * HEARTS.emojis.length

            )

            ];

        heart.style.left =

            Math.random() * 100 + "%";

        heart.style.fontSize =

            (20 + Math.random() * 18) + "px";

        proposalSection.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 3000);

    }

    /*=====================================================
        HEART BURST
    =====================================================*/

    function heartBurst() {

        let count = 0;

        const interval = setInterval(() => {

            createHeart();

            count++;

            if (

                count >= ANIMATION.floatingHeartCount

            ) {

                clearInterval(interval);

            }

        }, 100);

    }

    /*=====================================================
        CONFETTI PLACEHOLDER
    =====================================================*/

    function launchCelebration() {

        heartBurst();

        celebrateTeddy();

        showRing();

        playSuccessAudio();

    }

    /*=====================================================
    YES BUTTON
=====================================================*/

    yesButton.addEventListener("click", () => {

        if (accepted) return;

        accepted = true;

        launchCelebration();

        proposalTitle.textContent = "Yay! ❤️";

        proposalMessage.innerHTML =

            `Thank You For Accepting My Love ❤️<br><br>

        You just made me the happiest person in the world.<br><br>

        I promise to always love you,
        respect you and stay beside you forever.`;

        noButton.style.display = "none";

        yesButton.textContent = "Forever ❤️";

        yesButton.style.transform = "scale(1.12)";

        proposalCard.classList.add("accepted");

        setTimeout(() => {

            const successSection = document.querySelector("#success");

            if (successSection) {

                successSection.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }, 3500);

    });

    /*=====================================================
        NO BUTTON
    =====================================================*/

    const noMessages = [

        "🙈 Really?",

        "🥺 Think Again",

        "❤️ Please",

        "😊 One More Chance",

        "💖 Last Chance"

    ];

    noButton.addEventListener("click", () => {

        if (accepted) return;

        noClickCount++;

        if (noClickCount <= noMessages.length) {

            noButton.textContent = noMessages[noClickCount - 1];

        }

        const maxX = 140;

        const maxY = 90;

        const x = (Math.random() * maxX) - (maxX / 2);

        const y = (Math.random() * maxY) - (maxY / 2);

        noButton.style.transform =

            `translate(${x}px,${y}px)`;

        yesButton.style.transform =

            `scale(${1 + (noClickCount * 0.05)})`;

        if (noClickCount >= 5) {

            noButton.style.opacity = "0";

            noButton.style.pointerEvents = "none";

        }

    });

    /*=====================================================
        BUTTON HOVER
    =====================================================*/

    yesButton.addEventListener("mouseenter", () => {

        if (accepted) return;

        teddy.style.transform =

            "translateY(-10px) scale(1.03)";

    });

    yesButton.addEventListener("mouseleave", () => {

        if (accepted) return;

        teddy.style.transform = "";

    });

    /*=====================================================
        DEBUG
    =====================================================*/

    if (CONFIG.developer.debug) {

        console.log(

            "%cProposal JS Ready",

            "color:#ff5f9d;font-size:14px;font-weight:bold;"

        );

    }

});