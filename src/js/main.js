// Custom scripts

const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100 / 375) * (0.1 * $(window).width()) * rem;
    }
};

const heroSwiper = document.querySelector('.hero__swiper');

if (heroSwiper) {
    const swiper = new Swiper('.hero__swiper', {
        pagination: {
            el: '.hero-pagination',
            clickable: true
        },
        grabCursor: true,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        keyboard: {
            enabled: true
        },
        creativeEffect: {
            prev: {
                opacity: 0,
                translate: [rem(4), 0, 0],
                scale: 0.9
            },
            next: {
                opacity: 0,
                translate: [rem(4), 0, 0],
                scale: 0.9
            }
        },
        navigation: {
            nextEl: '.hero-next',
            prevEl: '.hero-prev'
        },
        on: {
            init: ({ slides }) => {
                const selector = document.querySelector('.hero-length-slides');
                selector.textContent = `${slides.length.toString().padStart(2, '0')}`;
            },
            slideChange: ({ realIndex, slides }) => {
                $('.hero-current-slide').text(String(realIndex + 1).padStart(2, '0'));
            }
        }
    });
}

function bindModal(trigger, modal, close) {
    (trigger = document.querySelector(trigger)),
        (modal = document.querySelector(modal)),
        (close = document.querySelector(close));

    const body = document.body;

    if (!trigger || !modal || !close) return

    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        body.classList.add('locked');
    });
    close.addEventListener('click', () => {
        modal.style.display = 'none';
        body.classList.remove('locked');
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            body.classList.remove('locked');
        }
    });
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal('.request-button', '#request-modal', '#request-modal .modal__close');
