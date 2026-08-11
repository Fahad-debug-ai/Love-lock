/*=========================================================
    TIMELINE SECTION
    Version : 2.0
=========================================================*/

"use strict";

document.addEventListener("DOMContentLoaded",()=>{

    /*=====================================================
        ELEMENTS
    =====================================================*/

    const timelineSection =
        document.querySelector("#timeline");

    const timelineDescription =
        document.querySelector("#timelineDescription");

    const timelineItems =
        document.querySelectorAll(".timeline-item");

    const timelineIcons =
        document.querySelectorAll(".timeline-icon");

    const timelineTitles =
        document.querySelectorAll(".timeline-title");

    const timelineDates =
        document.querySelectorAll(".timeline-date");

    const timelineTexts =
        document.querySelectorAll(".timeline-text");

    /*=====================================================
        SAFETY CHECK
    =====================================================*/

    if(

        !timelineSection ||

        !timelineDescription ||

        timelineItems.length===0

    ){

        console.error("Timeline Section Missing.");

        return;

    }

    /*=====================================================
        CONFIG
    =====================================================*/

    const TIMELINE = CONFIG.timeline;

    const EVENTS = TIMELINE.events;

    /*=====================================================
        INITIALIZE CONTENT
    =====================================================*/

    function initializeTimeline(){

        timelineDescription.textContent =

            TIMELINE.description;

        timelineItems.forEach((item,index)=>{

            if(!EVENTS[index]) return;

            timelineIcons[index].textContent =

                EVENTS[index].icon;

            timelineTitles[index].textContent =

                EVENTS[index].title;

            timelineDates[index].textContent =

                EVENTS[index].date;

            timelineTexts[index].textContent =

                EVENTS[index].description;

        });

    }

    initializeTimeline();

    console.log(

        "%cTimeline Section Loaded",

        "color:#ff5f9d;font-weight:bold;"

    );
        /*=====================================================
        REVEAL ANIMATION
    =====================================================*/

    function revealTimeline(){

        timelineItems.forEach((item)=>{

            const rect = item.getBoundingClientRect();

            const trigger = window.innerHeight * 0.82;

            if(rect.top < trigger){

                item.classList.add("show");

            }

        });

    }

    /*=====================================================
        ACTIVE CARD
    =====================================================*/

    function updateActiveCards(){

        timelineItems.forEach((item)=>{

            const rect = item.getBoundingClientRect();

            const center = window.innerHeight / 2;

            if(

                rect.top < center &&

                rect.bottom > center

            ){

                item.classList.add("active");

            }

            else{

                item.classList.remove("active");

            }

        });

    }

    /*=====================================================
        SCROLL HANDLER
    =====================================================*/

    function handleScroll(){

        revealTimeline();

        updateActiveCards();

    }

    /*=====================================================
        INITIAL RUN
    =====================================================*/

    handleScroll();

    /*=====================================================
        SCROLL EVENT
    =====================================================*/

    window.addEventListener(

        "scroll",

        handleScroll,

        {

            passive:true

        }

    );

    /*=====================================================
        RESIZE EVENT
    =====================================================*/

    window.addEventListener(

        "resize",

        handleScroll

    );
        /*=====================================================
        INTERSECTION OBSERVER
    =====================================================*/

    const observer = new IntersectionObserver(

        (entries)=>{

            entries.forEach((entry)=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold:0.20

        }

    );

    timelineItems.forEach((item)=>{

        observer.observe(item);

    });

    /*=====================================================
        TIMELINE LINE ANIMATION
    =====================================================*/

    const timelineLine =

        document.querySelector(".timeline-line");

    function animateTimelineLine(){

        if(!timelineLine) return;

        const rect = timelineSection.getBoundingClientRect();

        const sectionHeight = timelineSection.offsetHeight;

        const visible =

            Math.min(

                Math.max(

                    window.innerHeight - rect.top,

                    0

                ),

                sectionHeight

            );

        const progress =

            (visible / sectionHeight) * 100;

        timelineLine.style.background = `linear-gradient(
            180deg,
            #ff5f9d 0%,
            #9d6cff ${progress}%,
            rgba(255,255,255,.15) ${progress}%,
            rgba(255,255,255,.15) 100%
        )`;

    }

    animateTimelineLine();

    window.addEventListener(

        "scroll",

        animateTimelineLine,

        {

            passive:true

        }

    );

    /*=====================================================
        DEBUG
    =====================================================*/

    if(CONFIG.developer.debug){

        console.log(

            "%cTimeline JS Ready",

            "color:#ff5f9d;font-size:14px;font-weight:bold;"

        );

    }

});