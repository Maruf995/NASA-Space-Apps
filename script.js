// script.js

const slidesData = [
    {
        image: 'media/1.png',
        title: 'Cosmic Cliffs is an infrared image capturing a “stunning vista of the cosmic cliffs of the Carina Nebula.”',
        description: 'The image is divided horizontally by an undulating line between a cloudscape forming a nebula along the bottom portion and a comparatively clear upper portion. Speckled across both portions is a starfield, showing innumerable stars of many sizes. The smallest of these are small, distant, and faint points of light. The largest of these appear larger, closer, brighter, and more fully resolved with 8-point diffraction spikes. The upper portion of the image is blueish, and has wispy translucent cloud-like streaks rising from the nebula below. The orangish cloudy formation in the bottom half varies in density and ranges from translucent to opaque. The stars vary in color, the majority of which have a blue or orange hue. The cloud-like structure of the nebula contains ridges, peaks, and valleys – an appearance very similar to a mountain range. Three long diffraction spikes from the top right edge of the image suggest the presence of a large star just out of view.'
    },
    {
        image: 'media/2.png',
        title: 'The Pillars of Creation was made famous by the dazzling 1994 Hubble Space Telescope image. However, the pillars, the star cluster NGC 6611, and the surrounding Eagle Nebula have been studied for decades by researchers using many telescopes that observe light across the electromagnetic spectrum.',
        description: 'Pillars of Creation is a photograph taken by the Hubble Space Telescope of elephant trunks of interstellar gas and dust in the Eagle Nebula, in the Serpens constellation, some 6,500–7,000 light-years (2,000–2,100 pc; 61–66 Em) from Earth.[1] These elephant trunks had been discovered by John Charles Duncan in 1920 on a plate made with the Mount Wilson Observatory 60-inch telescope.[2][3] They are so named because the gas and dust are in the process of creating new stars, while also being eroded by the light from nearby stars that have recently formed.'
    },
    {
        image: 'media/3.png',
        title: 'The luminous, hot star called Wolf-Rayet 124 was imaged by NASA’s James Webb Space Telescope. Bright clumps of gas and dust appear like tadpoles swimming toward the star with tails streaming out behind them, blown back by the stellar wind. The surrounding nebula stretches about 10 light-years across. Credit: NASA, ESA, CSA, STScI, Webb ERO Production Team',
        description: 'This image is one of the most unique scenes captured by Webb, as it is only observable for a relatively short period of time. This image is the massive star WR 124, which is on the verge of going supernova. This is when a star explodes at the end of its life cycle and releases a massive cloud of hot gas and space dust into the cosmos.'
    },
    {
        image: 'media/4.png',
        title: 'James Webb Telescope Captures Image Of A Star Being Born',
        description: 'As well as seeing the death of stars, Webb also helps us to see the birth of them too. A group of astronomers – led by the Dublin Institute for Advanced Studies (DIAS) – revealed a detailed image of one of the youngest stars known to scientists with the help of the James Webb Space Telescope.'
    },
    {
        image: 'media/5.png',
        title: 'The NASA/ESA/CSA James Webb Space Telescope has observed the well-known Ring Nebula with unprecedented detail. Formed by a star throwing off its outer layers as it runs out of fuel, the Ring Nebula is an archetypal planetary nebula. Also known as M57 and NGC 6720, it is both relatively close to Earth at roughly 2,500 light-years away.',
        description: "The Ring Nebula is a planetary nebula in the northern constellation of Lyra. It is relatively close to Earth at roughly 2,500 light years away, making it an important object for scientists.\n"+
            "But this detailed image by Webb went a step beyond previous observations, as it shows the intricate details of the filament structure of the inner ring and the concentric features of the outer regions of the nebulae’s ring."
    },  
];

let currentIndex = 0;

const mainImage = document.querySelector('.main-image');
const copyImage = document.querySelector('.copy-image');
const titleElement = document.querySelector('.name h2');
const descriptionElement = document.querySelector('.description p');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Функция обновления слайда
function updateSlide() {
    const slide = slidesData[currentIndex];
    mainImage.src = slide.image;
    copyImage.src = slide.image;
    titleElement.textContent = slide.title;
    descriptionElement.textContent = slide.description;

    // Анимация появления копии
    copyImage.classList.remove('visible');
    void copyImage.offsetWidth; // Перезапуск анимации
    copyImage.classList.add('visible');
}

// Обработчики событий для кнопок
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
    updateSlide();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slidesData.length;
    updateSlide();
});

// Обработчики событий для клавиатуры
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
        updateSlide();
    } else if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % slidesData.length;
        updateSlide();
    }
});

// Инициализация первого слайда при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    updateSlide();
});


document.getElementById("scrollBtn").addEventListener("click", function() {
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
    window.location.href = 'page-2/history.html'; // Перенос на вторую страницу
});

