const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100 / 375) * (0.1 * $(window).width()) * rem;
    }
};

const swiperSettings = (init, ...payload) => ({
    loop: true,
    speed: 1200,
    keyboard: {
        enabled: true
    },
    pagination: {
        el: `.${init}-pagination`,
        clickable: true
    },
    navigation: {
        nextEl: `.${init}-next`,
        prevEl: `.${init}-prev`
    },
    on: {
        init: ({ slides, loopedSlides }) => {
            const totalSlidesLength = slides.length - loopedSlides * 2;
            const selector = document.querySelector(`.${init}-length-slides`);

            selector.textContent = totalSlidesLength.toString().padStart('2', 0);
        },
        slideChange: ({ realIndex }) => {
            $(`.${init}-current-slide`).text(String(realIndex + 1).padStart(2, '0'));
        }
    },
    ...payload
});

$('input[type="tel"]').inputmask({
    "mask": "+7 (999) 999 99-99",
    "placeholder": "+7 (999) 999 99-99",
    "clearMaskOnLostFocus": false
});

new Swiper('.hero__swiper', {
    grabCursor: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    ...swiperSettings('hero')
});

new Swiper('.categories__swiper', {
    spaceBetween: rem(3),
    slidesPerView: 1,
    ...swiperSettings('categories')
});

new Swiper('.brands__swiper', {
    slidesPerView: 1,
    grabCursor: true,
    centeredSlides: true,
    speed: 1200,
    loop: true,
    pagination: {
        el: `.brands-pagination`,
        clickable: true
    },
    navigation: {
        nextEl: `.brands-next`,
        prevEl: `.brands-prev`
    },
    on: {
        init: ({ slides, loopedSlides }) => {
            const totalSlidesLength = slides.length - loopedSlides * 2;
            const selector = document.querySelector(`.brands-length-slides`);

            selector.textContent = totalSlidesLength.toString().padStart('2', 0);
        },
        slideChange: ({ realIndex }) => {
            $(`.brands-current-slide`).text(String(realIndex + 1).padStart(2, '0'));
        }
    },
});

new Swiper('.brands__swiper-mobile', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    speed: 1200,
    pagination: {
        el: `.brands-mobile-pagination`,
        clickable: true
    },
    navigation: {
        nextEl: `.brands-mobile-next`,
        prevEl: `.brands-mobile-prev`
    },
    on: {
        init: ({ slides, loopedSlides }) => {
            const totalSlidesLength = slides.length - loopedSlides * 2;
            const selector = document.querySelector(`.brands-mobile-length-slides`);

            selector.textContent = totalSlidesLength.toString().padStart('2', 0);
        },
        slideChange: ({ realIndex }) => {
            $(`.brands-mobile-current-slide`).text(String(realIndex + 1).padStart(2, '0'));
        }
    },
});

new Swiper('.shares__swiper', {
    ...swiperSettings('shares'),
    spaceBetween: rem(3),
    slidesPerView: 1,
    grabCursor: true,
    speed: 700
});

new Swiper('.shares-categories__swiper', {
    slidesPerView: 'auto',
    grabCursor: true,
    speed: 1200,
    navigation: {
        nextEl: `.shares-categories-next`,
        prevEl: `.shares-categories-prev`
    }
});

new Swiper('.leaders__swiper', {
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    spaceBetween: rem(3),
    ...swiperSettings('leaders')
});

new Swiper('.novelties__swiper', {
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    spaceBetween: rem(3),
    ...swiperSettings('novelties')
});

document.querySelector('.our-services__swiper');
const swiper = new Swiper('.our-services__swiper', {
    spaceBetween: rem(4),
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    ...swiperSettings('our-services')
});

new Swiper('.showroom__swiper', {
    spaceBetween: rem(4),
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    ...swiperSettings('showroom')
});

new Swiper('.interested__swiper', {
    spaceBetween: rem(4),
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    ...swiperSettings('interested')
});

new Swiper('.service-products__swiper', {
    spaceBetween: rem(4),
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    ...swiperSettings('service-products')
});

new Swiper('.usable-materials__swiper', {
    spaceBetween: rem(4),
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    ...swiperSettings('usable-materials')
});

new Swiper('.project__swiper', {
    slidesPerView: 1.5,
    grabCursor: true,
    speed: 700,
    breakpoints: {
        1: {
            spaceBetween: rem(1)
        },
        768: {
            spaceBetween: rem(3)
        }
    },
    ...swiperSettings('project')
});

new Swiper('.related-products__swiper', {
    spaceBetween: rem(4),
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    ...swiperSettings('related-products')
});

const feedbackSlider = new Swiper('.feedback__swiper', {
    slidesPerView: 1,
    speed: 1200,
    loop: true,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

const swiperFeedbackImages = new Swiper('.feedback-list__swiper', {
    slidesPerView: 3,
    speed: 1200,
    allowTouchMove: false,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    thumbs: {
        swiper: feedbackSlider
    },
    navigation: {
        nextEl: `.feedback-next`,
        prevEl: `.feedback-prev`
    }
});

const productSlider = new Swiper('.product__slider-thumb__swiper', {
    spaceBetween: rem(3),
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    grabCursor: true
});
const productSliderThumb = new Swiper('.product__slider__swiper', {
    spaceBetween: rem(1),
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    keyboard: {
        enabled: true
    },
    thumbs: {
        swiper: productSlider
    }
});