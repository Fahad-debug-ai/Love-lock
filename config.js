/*=========================================================
    LOVE LOCK TEMPLATE
    CONFIGURATION FILE
    Version : 1.0
=========================================================*/

"use strict";

/*=========================================================
    MAIN CONFIG
=========================================================*/

const CONFIG = {

    /*=====================================================
        PERSONAL INFORMATION
    =====================================================*/
    landing: {

        lockTitle: "Welcome ❤️",

        lockSubtitle: "Enter Your Birth Year To Unlock",

        placeholder: "Birth Year",

        unlockButton: "Unlock",

        correctYear: "2005",

        wrongPasswordMessage: "Oops! Wrong Birth Year ❤️"

    },

    personal: {

        girlName: "Emily",

        boyName: "Davis",

        nickname: "Princess",

        proposalDate: "14 February 2027",

        birthdayYear: "2005"

    },



    /*=====================================================
    HERO SETTINGS
=====================================================*/

hero:{

    badge:"💖 Happy Birthday",

    title:"Happy Birthday",

    subtitle:"Today is not just another day... It is the day when the most beautiful soul came into this world.",

    buttonText:"Open Gallery ❤️",

    image:"img1.png"

},

/*=====================================================
    GALLERY SETTINGS
=====================================================*/

gallery:{

    badge:"📸 Beautiful Memories",

    title:"Every Picture",

    highlight:"Tells A Story ❤️",

    description:"Every smile, every moment and every memory with you is priceless.",

    images:[

        "img2.png",

        "img3.png",

        "img4.png",

        "img5.png",

        "img6.png",

        "img7.png"

    ]

},



    /*=====================================================
        LETTER SECTION
    =====================================================*/

   letter:{

    heading:"My Dearest ❤️",

    description:"Sometimes feelings become too beautiful to be spoken. That's why I wrote them here.",

    signature:"Forever Yours,\nDavis",

    message:

`From the very first moment, you became someone truly special to me.

Every smile of yours makes my day brighter, and every memory with you is priceless.

No matter what happens, you'll always have a special place in my heart. ❤️`

},



    /*=====================================================
        PROPOSAL SECTION
    =====================================================*/

    proposal: {

        title: "Will You Be Mine Forever?",

        description:

            "Every beautiful story deserves a beautiful beginning.",

        successMessage:

            "Thank You For Saying Yes ❤️",

        yesButton: "Yes ❤️",

        noButton: "No 🙈"

    },



    /*=====================================================
    TIMELINE SECTION
=====================================================*/

timeline:{

    title:"Our Journey",

    description:"Every memory tells a beautiful story.",

    events:[

        {

            icon:"❤️",

            title:"First Meeting",

            date:"12 Jan 2025",

            description:"The day everything started."

        },

        {

            icon:"😊",

            title:"First Smile",

            date:"20 Jan 2025",

            description:"Your smile stole my heart."

        },

        {

            icon:"💬",

            title:"First Conversation",

            date:"10 Feb 2025",

            description:"Hours felt like minutes."

        },

        {

            icon:"💕",

            title:"Best Friends",

            date:"20 Mar 2025",

            description:"Our bond became stronger."

        },

        {

            icon:"🌹",

            title:"Fell In Love",

            date:"14 Aug 2025",

            description:"I realized I truly love you."

        },

        {

            icon:"💍",

            title:"Proposal Day",

            date:"14 Feb 2027",

            description:"The happiest day of my life."

        }

    ]

},

}




/*=========================================================
    AUDIO
=========================================================*/

CONFIG.audio = {

    backgroundMusic:

        "Assets/Audio/background.mp3",

    letterOpen:

        "Assets/Audio/paper-open.mp3",

    proposalSuccess:

        "Assets/Audio/success.mp3"

};



/*=========================================================
    COUNTDOWN
=========================================================*/

CONFIG.countdown = {

    targetDate:

        "2027-02-14T00:00:00"

};



/*=========================================================
    TEDDY SETTINGS
=========================================================*/

CONFIG.teddy = {

    floating: true,

    glow: true,

    happyBounce: true,

    waveAnimation: true

};



/*=========================================================
    ANIMATION SETTINGS
=========================================================*/

CONFIG.animation = {

    typingSpeed: 28,

    heartInterval: 700,

    floatingHeartCount: 20,

    confettiCount: 60,

    revealDelay: 180,

    smoothScroll: true

};



/*=========================================================
    THEME SETTINGS
=========================================================*/

CONFIG.theme = {

    primary: "#ff5f9d",

    secondary: "#ff9bc7",

    accent: "#9d6cff",

    glassOpacity: 0.08

};
/*=========================================================
    LETTER SETTINGS
=========================================================*/

CONFIG.letterSettings = {

    typingSpeed: 28,

    autoStart: true,

    showCursor: true,

    heartBurstCount: 20

};



/*=========================================================
    PROPOSAL SETTINGS
=========================================================*/

CONFIG.proposalSettings = {

    yesText: "Yes ❤️",

    noText: "No 🙈",

    noMessages: [

        "🙈 Let Me Think",

        "🥺 Really?",

        "❤️ Think Again",

        "😊 Please?",

        "💖 One More Chance"

    ],

    celebrationDelay: 2000,

    autoScroll: true

};



/*=========================================================
    CONFETTI
=========================================================*/

CONFIG.confetti = {

    amount: 60,

    colors: [

        "#ff4d8d",

        "#ff8fb8",

        "#ffd166",

        "#ffffff",

        "#9d6cff",

        "#6ecbff"

    ]

};



/*=========================================================
    FLOATING HEARTS
=========================================================*/

CONFIG.hearts = {

    emojis: [

        "❤️",

        "💖",

        "💕",

        "💗",

        "💝"

    ],

    interval: 700,

    lifeTime: 3000

};



/*=========================================================
    WEBSITE SETTINGS
=========================================================*/

CONFIG.website = {

    title: "Love Lock Template",

    author: "Fahad",

    version: "1.0",

    enableConsoleMessage: true,

    smoothScroll: true

};
/*=========================================================
    SOCIAL LINKS
=========================================================*/

CONFIG.social = {

    instagram: "https://instagram.com/your_username",

    tiktok: "https://tiktok.com/@your_username",

    youtube: "https://youtube.com/@your_channel",

    github: "https://github.com/your_username"

};



/*=========================================================
    DEFAULT IMAGES
=========================================================*/

CONFIG.images = {

    heroImage: "Assets/Hero/hero.jpg",

    proposalImage: "Assets/Proposal/proposal.jpg",

    teddy: "Assets/Teddy/teddy.svg",

    placeholder: "Assets/Common/placeholder.jpg"

};



/*=========================================================
    DEVELOPER SETTINGS
=========================================================*/

CONFIG.developer = {

    debug: true,

    version: "1.0.0",

    templateName: "Love Lock Premium",

    developer: "Fahad"

};



/*=========================================================
    FREEZE CONFIG
=========================================================*/

Object.freeze(CONFIG);
