/*=========================================================
    GALLERY SECTION
    Version : 1.0
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /*=====================================================
        CONFIG
    =====================================================*/

    const galleryConfig = CONFIG.gallery;

    /*=====================================================
        ELEMENTS
    =====================================================*/

    const gallerySection = document.querySelector("#gallery");

    const galleryBadge = document.querySelector(".gallery-badge");

    const galleryTitle = document.querySelector(".gallery-title");

    const galleryDescription = document.querySelector(".gallery-description");

    const galleryCards = document.querySelectorAll(".gallery-card");

    const galleryImages = document.querySelectorAll(".gallery-image");

    const lightbox = document.querySelector(".gallery-lightbox");

    const lightboxImage = document.querySelector(".lightbox-image");

    const lightboxClose = document.querySelector(".lightbox-close");

    /*=====================================================
        SAFETY CHECK
    =====================================================*/

    if(

        !gallerySection ||

        !galleryBadge ||

        !galleryTitle ||

        !galleryDescription ||

        galleryCards.length === 0 ||

        galleryImages.length === 0 ||

        !lightbox ||

        !lightboxImage ||

        !lightboxClose

    ){

        console.warn("Gallery Section Elements Missing");

        return;

    }

    /*=====================================================
        STATE
    =====================================================*/

    const STATE = {

        lightboxOpen:false,

        animationPlayed:false

    };

    /*=====================================================
        INITIALIZE CONTENT
    =====================================================*/

    function initializeGallery(){

        galleryBadge.textContent = galleryConfig.badge;

        galleryTitle.innerHTML = `

            ${galleryConfig.title}

            <span>

                ${galleryConfig.highlight}

            </span>

        `;

        galleryDescription.textContent =

            galleryConfig.description;

        galleryImages.forEach((image,index)=>{

            image.src = galleryConfig.images[index];

            image.alt = `Gallery Image ${index+1}`;

        });

    }

    initializeGallery();

        /*=====================================================
        OPEN LIGHTBOX
    =====================================================*/

    function openLightbox(image){

        if(STATE.lightboxOpen) return;

        STATE.lightboxOpen = true;

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    }

    /*=====================================================
        CLOSE LIGHTBOX
    =====================================================*/

    function closeLightbox(){

        if(!STATE.lightboxOpen) return;

        STATE.lightboxOpen = false;

        lightbox.classList.remove("show");

        document.body.style.overflow = "";

        setTimeout(()=>{

            lightboxImage.src = "";

        },300);

    }

    /*=====================================================
        IMAGE CLICK EVENTS
    =====================================================*/

    galleryImages.forEach((image)=>{

        image.addEventListener("click",()=>{

            openLightbox(image);

        });

    });

    /*=====================================================
        CLOSE BUTTON
    =====================================================*/

    lightboxClose.addEventListener("click",()=>{

        closeLightbox();

    });

    /*=====================================================
        CLICK OUTSIDE IMAGE
    =====================================================*/

    lightbox.addEventListener("click",(event)=>{

        if(event.target === lightbox){

            closeLightbox();

        }

    });

    /*=====================================================
        ESC KEY
    =====================================================*/

    document.addEventListener("keydown",(event)=>{

        if(event.key === "Escape"){

            closeLightbox();

        }

    });

        /*=====================================================
        SCROLL REVEAL
    =====================================================*/

    function revealGallery(){

        if(STATE.animationPlayed) return;

        const observer = new IntersectionObserver((entries)=>{

            entries.forEach((entry)=>{

                if(entry.isIntersecting){

                    STATE.animationPlayed = true;

                    galleryCards.forEach((card,index)=>{

                        setTimeout(()=>{

                            card.classList.add("show");

                        },index * 150);

                    });

                    observer.unobserve(gallerySection);

                }

            });

        },{

            threshold:0.25

        });

        observer.observe(gallerySection);

    }

    revealGallery();

    /*=====================================================
        CARD HOVER EFFECT
    =====================================================*/

    galleryCards.forEach((card)=>{

        card.addEventListener("mousemove",(e)=>{

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x",`${x}px`);

            card.style.setProperty("--mouse-y",`${y}px`);

        });

    });

    /*=====================================================
        DEBUG
    =====================================================*/

    console.log(

        "%cGallery Section Loaded",

        "color:#ff5f9a;font-weight:bold;"

    );

});