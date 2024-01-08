


let menuLi = document.querySelectorAll('header ul li a ');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");

}

activeMenu();
window.addEventListener("scroll", activeMenu);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items"); // Corrected the class name
        } else {
            entry.target.classList.remove("show-items"); // Corrected the class name
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el)); // Corrected the variable name

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el)); // Corrected the variable name


// read more button


document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and additional content
    const readMoreButton = document.getElementById('readMoreButton');
    const additionalContent = document.querySelector('.additional-content');

    // Add click event listener to the button
    readMoreButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Toggle the visibility of the additional content
        if (additionalContent.style.display === 'none') {
            additionalContent.style.display = 'block';
            readMoreButton.innerText = 'Read less';
        } else {
            additionalContent.style.display = 'none';
            readMoreButton.innerText = 'Read more';
        }
    });
});


// custom cursor

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    //cursorOutline.style.left = `${posX}px`;
    //cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill:"forwards"});

});