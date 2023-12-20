const arrows = document.querySelectorAll('.arrow');
const sliderElements = document.querySelectorAll('.carousel-item');
let currentSlide = 1;
const slideCount = sliderElements.length;

arrows.forEach(arrow => arrow.addEventListener('click', e => {
    if(e.target.dataset.slide === 'next'){
        nextSlide();
    }
    if(e.target.dataset.slide === 'prev'){
        prevSlide();
    }
    
    handleChangeArrowNext();
    handleChangeArrowPrev();
}))



function nextSlide(){
    sliderElements[currentSlide].classList.remove('active');
    currentSlide+=1;
    sliderElements[currentSlide].classList.add('active');
}

function prevSlide(){
    sliderElements[currentSlide].classList.remove('active');
    currentSlide-=1;
    sliderElements[currentSlide].classList.add('active');
}

function handleChangeArrowNext(){
    if(currentSlide === slideCount-1){
       hideArrow(arrows[1])
    }else if(arrows[1].classList.contains('d-none')) {
       showArrow(arrows[1])
    }
}

function handleChangeArrowPrev(){
    if(currentSlide === 0){
        hideArrow(arrows[0])
    }else if(arrows[0].classList.contains('d-none')) {
        showArrow(arrows[0])
    }
    
}


function hideArrow(arrow){
    arrow.classList.add('d-none')
}

function showArrow(arrow){
    arrow.classList.remove('d-none')
}