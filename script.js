/* =========================================
   SANDISILE MVANDABA WEBSITE JAVASCRIPT
   ========================================= */


/* ---------- DARK / LIGHT MODE ---------- */

const themeToggle = document.getElementById("themeToggle");


// Check if the user previously selected dark mode
const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    if (themeToggle) {
        themeToggle.textContent = "☀️";
    }
}


// Toggle theme when button is clicked
if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");


        if (isDark) {

            themeToggle.textContent = "☀️";

            localStorage.setItem("theme", "dark");

        } else {

            themeToggle.textContent = "🌙";

            localStorage.setItem("theme", "light");
        }

    });

}


/* ---------- GALLERY SLIDESHOW ---------- */

const slideImage = document.getElementById("slideImage");

const slideTitle = document.getElementById("slideTitle");

const slideDescription =
    document.getElementById("slideDescription");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");


const slides = [
    {
        image: "images/Gallery1.jpg",
        title: "A Special Moment",
        description: "One of my favourite moments."
    },

    {
        image: "images/Gallery2.jpg",
        title: "Beautiful Memories",
        description: "A moment that makes me smile."
    },

    {
        image: "images/Gallery3.jpg",
        title: "Special Memories",
        description: "A special part of my journey."
    },

    {
        image: "images/Gallery4.jpg",
        title: "A Day to Remember",
        description: "A memory I will always treasure."
    },

    {
        image: "images/Gallery5.jpg",
        title: "Family & Happiness",
        description: "Moments shared with people I love."
    },

    {
        image: "images/Gallery6.jpg",
        title: "Good Times",
        description: "Enjoying the simple moments in life."
    },

    {
        image: "images/Gallery7.jpg",
        title: "Making Memories",
        description: "Another beautiful moment from my journey."
    },

    {
        image: "images/gallery8.jpg",
        title: "A Moment to Treasure",
        description: "A memory that will always be special."
    },

    {
        image: "images/Gallery9.jpg",
        title: "Special Times",
        description: "A beautiful moment from my journey."
    },

    {
        image: "images/Gallery10.jpg",
        title: "Moments of Joy",
        description: "A moment filled with happiness."
    },

    {
        image: "images/Gallery11.jpg",
        title: "Memories I Love",
        description: "A memory that will always have a special place in my heart."
    },

    {
        image: "images/Gallery12.jpg",
        title: "A Beautiful Memory",
        description: "One more moment worth remembering."
    }
];


let currentSlide = 0;


function displaySlide(index) {

    if (!slideImage) {
        return;
    }


    slideImage.style.opacity = "0";


    setTimeout(function () {

        slideImage.src = slides[index].image;

        slideTitle.textContent = slides[index].title;

        slideDescription.textContent =
            slides[index].description;

        slideImage.style.opacity = "1";

    }, 200);

}


if (nextBtn) {

    nextBtn.addEventListener("click", function () {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        displaySlide(currentSlide);

    });

}


if (previousBtn) {

    previousBtn.addEventListener("click", function () {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        displaySlide(currentSlide);

    });

}


/* ---------- CONTACT FORM ---------- */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();


        if (name === "") {

            formMessage.textContent =
                "Please enter your name.";

            return;
        }


        formMessage.textContent =
            `Thank you, ${name}! Your message has been received. ✨`;


        contactForm.reset();

    });

  }
