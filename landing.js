/*=========================================================
    LANDING SECTION
    Version : 3.0
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /*=====================================================
        CONFIG
    =====================================================*/

    const landingConfig = CONFIG.landing;

    /*=====================================================
        ELEMENTS
    =====================================================*/

    const landingSection = document.querySelector("#landing");

    const landingCard = document.querySelector(".landing-card");

    const unlockForm = document.querySelector(".unlock-form");

    const yearInput = document.querySelector("#birthYear");

    const unlockButton = document.querySelector(".unlock-button");

    const mouseGlow = document.querySelector(".mouse-glow");

    const landingTitle = document.querySelector(".landing-title");

    const landingDescription = document.querySelector(".landing-description");

    const teddy = document.querySelector(".teddy-image");

    /*=====================================================
        SAFETY CHECK
    =====================================================*/

    if (

        !landingSection ||

        !landingCard ||

        !unlockForm ||

        !yearInput ||

        !unlockButton ||

        !mouseGlow ||

        !landingTitle ||

        !landingDescription ||

        !teddy

    ) {

        console.warn("Landing Section Elements Missing");

        return;

    }

    /*=====================================================
        STATE
    =====================================================*/

    const STATE = {

        unlocked: false,

        busy: false

    };

    /*=====================================================
        INITIALIZE CONTENT
    =====================================================*/

    function initializeLanding() {

        landingTitle.innerHTML =
            `${landingConfig.lockTitle}<span></span>`;

        landingDescription.textContent =
            landingConfig.lockSubtitle;

        yearInput.placeholder =
            landingConfig.placeholder;

        unlockButton.textContent =
            landingConfig.unlockButton;

    }

    initializeLanding();

    /*=====================================================
        MOUSE GLOW
    =====================================================*/

    landingSection.addEventListener("mousemove", (e) => {

        const rect = landingSection.getBoundingClientRect();

        mouseGlow.style.left =

            `${e.clientX - rect.left}px`;

        mouseGlow.style.top =

            `${e.clientY - rect.top}px`;

        mouseGlow.style.opacity = "1";

    });

    landingSection.addEventListener("mouseleave", () => {

        mouseGlow.style.opacity = "0";

    });

    /*=====================================================
    SHOW ERROR
=====================================================*/

    function showError() {

        if (STATE.busy) return;

        STATE.busy = true;

        landingCard.classList.add("shake");

        yearInput.value = "";

        yearInput.focus();

        unlockButton.textContent = landingConfig.wrongPasswordMessage;

        setTimeout(() => {

            landingCard.classList.remove("shake");

            unlockButton.textContent = landingConfig.buttonText;

            STATE.busy = false;

        }, 1000);

    }


    /*=====================================================
        SHOW SUCCESS
    =====================================================*/

    function showSuccess() {

        unlockButton.textContent = "Unlocked ❤️";

        landingCard.classList.add("success");

    }


    /*=====================================================
        VALIDATE YEAR
    =====================================================*/

    function validateYear() {

        if (STATE.unlocked || STATE.busy) {

            return;

        }

        const enteredYear = yearInput.value.trim();

        if (enteredYear === landingConfig.correctYear) {

            STATE.unlocked = true;

            showSuccess();

            unlockWebsite();

        }

        else {

            showError();

        }

    }

    /*=====================================================
    UNLOCK WEBSITE
=====================================================*/

    function unlockWebsite() {

        createHeartBurst();

        STATE.busy = true;

        landingCard.classList.add("unlocking");

        teddy.classList.add("happy");

        unlockButton.disabled = true;

        yearInput.disabled = true;

        setTimeout(() => {

            landingSection.classList.add("hide");

        }, 1800);

        setTimeout(() => {

            const heroSection = document.querySelector("#hero");

            if (heroSection) {

                heroSection.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }, 2200);

    }

    /*=====================================================
    HEART BURST
=====================================================*/

    function createHeartBurst() {

        for (let i = 0; i < 18; i++) {

            const heart = document.createElement("span");

            heart.className = "landing-heart";

            heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💖";

            const angle = Math.random() * 360;

            const distance = 80 + Math.random() * 70;

            const x = Math.cos(angle * Math.PI / 180) * distance;

            const y = Math.sin(angle * Math.PI / 180) * distance;

            heart.style.left = "50%";

            heart.style.top = "50%";

            heart.style.setProperty("--x", `${x}px`);

            heart.style.setProperty("--y", `${y}px`);

            landingCard.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 1500);

        }

    }

    /*=====================================================
        ENTER KEY SUPPORT
    =====================================================*/

    yearInput.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            e.preventDefault();

            validateYear();

        }

    });

    /*=====================================================
        FORM SUBMIT
    =====================================================*/

    unlockForm.addEventListener("submit", (e) => {

        e.preventDefault();

        validateYear();

    });



    /*=====================================================
        DEBUG
    =====================================================*/

    console.log(

        "%cLanding Section Loaded",

        "color:#ff5f9a;font-weight:bold;"

    );

});