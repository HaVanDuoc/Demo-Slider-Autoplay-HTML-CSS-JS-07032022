// 
// Javascript For Slider
// 
const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

let index = 1;
const slideWidth = slide[index].clientWidth;

let interval = 3000;

// Init Slide Clone First and Last
const firstClone = slide[0].cloneNode(true);
const lastClone = slide[slide.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slides.append(firstClone);
slides.prepend(lastClone);

slides.style.transform = `translateX(${-slideWidth * index}px)`;

// Endles Loop For Slide
slides.addEventListener('transitionend', () => {
    slide = document.querySelectorAll(".slide");
    if (slide[index].id === firstClone.id) {
        slides.style.transition = 'none';
        index = 1;
        slides.style.transform = `translateX(${-slideWidth * index}px)`;
    }

    if (slide[index].id === lastClone.id) {
        slides.style.transition = 'none';
        index = slide.length - 2;
        slides.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

// Event for Button Next Slide
const moveToNextSlide = () => {
    slide = document.querySelectorAll(".slide");
    if (index >= slide.length - 1) return;
    index++;
    slides.style.transition = '.7s ease-out';
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
};

// Event for Button Next Slide
const moveToPrevSlide = () => {
    slide = document.querySelectorAll(".slide");
    if (index <= 0) return;
    index--;
    slides.style.transition = '.7s ease-out';
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
};

// Auto play for Slide
const autoPlay = () =>{
    autoplay = setInterval(()=>{
        moveToNextSlide();
    }, interval)
}

// Mouse enter is Stop
slider.addEventListener('mouseenter', ()=>{
    clearInterval(autoplay);
});

// Mouse leave is AutoPlay
slider.addEventListener('mouseleave', ()=>{
    autoPlay();
});

// Excute
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPrevSlide);
autoPlay();