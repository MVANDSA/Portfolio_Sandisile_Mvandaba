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
        image: "images/IMG-20220609-WA0020.jpg",
        title: "A moment to remember",
        description: "One of my favourite moments."
    },

    {
        image: "images/IMG_20240205_133214_171.jpg",
        title: "Good memories",
        description: "A moment that makes me smile."
    },

    {
        image: "images/IMG-20230412-WA0029.jpg",
        title: "Life & learning",
        description: "Growing, learning and enjoying the journey."
    },

    {
        image: "images/IMG2-20241209-WA0050.jpg",
        title: "My journey",
        description: "Another little piece of my story."
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
