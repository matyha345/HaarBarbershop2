const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // spaceBetween: 20,
    // slidesPerView: 3,
    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    // Navigation arrows
    navigation: {
        nextEl: '.btn__next',
        prevEl: '.btn__prev',
    },
    breakpoints: {
        // Когда ширина экрана меньше 800px
        1100: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // Когда ширина экрана меньше 500px
        900: {
            slidesPerView: '2',
            spaceBetween: 5
        }

    }
    // autoplay: {
    //     delay: 1500,
    // },
});

// =================================================================

function generateSwiper() {
    const results = document.getElementById('results')
    function generateCards() {
        const cards = [];
        for (let i = 0; i < data.length; i++) {
            cards.push(`
                <div class="swiper-slide">
                    <img width="280px" src="${data[i].imgSrc}" alt="#">
                    <h2 class="swiper__slide-name">${data[i].name}</h2>
                    <p class="swiper__slide-text">${data[i].description}</p>
                </div>
            `);
        }
        return cards
    }
    const cardsArr = generateCards();
    results.innerHTML = cardsArr.join('')
}
generateSwiper()

// =================================================================