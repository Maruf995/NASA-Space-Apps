const slides = [
    {
        year: " Early Concept (1996-2002)",
        description: " - 1996: Discussions begin on the next space telescope to follow Hubble. \n" +
                    "- 2002: The project was officially named after NASA's second administrator, James Webb, who led the agencies in the 1960s.",
        photo: "media/1.jpg"
    },
    {
        year: "Development and Engineering (2002-2011).",
        description: "- 2002-2011: Design and engineering work begins on the telescope. The 18-segment body of the huge mirror is designed to act as a sun shield to protect against heat.\n",
        photo: "media/2.jpg"
    },
    {
        year: " Assembly and Testing (2016-2021)",
        description: " - 2016: The telescope is fully assembled and undergoing ground testing.",
        photo: "media/3.jpg"
    },
    {
        year: " Launch Preparations (2021)",
        description: "- March 2021: The telescope is delivered to the launch pad at the Guiana Space Centre in French Guiana.",
        photo: "media/4.jpg"
    },
    {
        year: "Calibration and First Operation (2022)",
        description: "- February-June 2022: Calibration of science instruments and sporting mirror segments.",
        photo: "media/5.jpg"
    },
];

let currentSlide = 0;

function updateSlide() {
    const yearElement = document.querySelector('.year');
    const descriptionElement = document.querySelector('.description p');
    const photoElement = document.querySelector('.photo-image');

    yearElement.textContent = slides[currentSlide].year;
    descriptionElement.textContent = slides[currentSlide].description;
    photoElement.src = slides[currentSlide].photo;
}

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Зацикливаем на последнем слайде
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Зацикливаем на первом слайде
    }

    updateSlide();
}

// Инициализация слайдера
updateSlide();
