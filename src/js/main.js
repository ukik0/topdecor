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

const categoriesSwiper = document.querySelector('.categories__swiper');
if (categoriesSwiper) {
    const swiper = new Swiper('.categories__swiper', {
        pagination: {
            el: '.categories-pagination',
            clickable: true
        },
        spaceBetween: 30,
        slidesPerView: 1,
        keyboard: {
            enabled: true
        },
        effect: 'creative',
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
            nextEl: '.categories-next',
            prevEl: '.categories-prev'
        },
        on: {
            init: ({ slides }) => {
                const selector = document.querySelector('.categories-length-slides');
                selector.textContent = `${slides.length.toString().padStart(2, '0')}`;
            },
            slideChange: ({ realIndex, slides }) => {
                $('.categories-current-slide').text(String(realIndex + 1).padStart(2, '0'));
            }
        }
    });
}

const brandsSwiper = document.querySelector('.brands__swiper');
if (brandsSwiper) {
    const swiper = new Swiper('.brands__swiper', {
        pagination: {
            el: '.brands-pagination',
            clickable: true
        },
        slidesPerView: 5,
        autoplay: true,
        grabCursor: true,
        speed: 700,
        centeredSlides: true,
        loop: true,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.brands-next',
            prevEl: '.brands-prev'
        },
        breakpoints: {
            1: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 5
            }
        },
        on: {
            init: ({ slides }) => {
                const selector = document.querySelector('.brands-length-slides');
                selector.textContent = `${slides[0].ariaLabel
                    .split('/')[1]
                    .toString()
                    .trim()
                    .padStart(2, '0')}`;
            },
            slideChange: ({ realIndex }) => {
                $('.brands-current-slide').text(String(realIndex + 1).padStart(2, '0'));
            }
        }
    });
}

const sharesSlider = document.querySelector('.shares__swiper');
if (sharesSlider) {
    const swiper = new Swiper('.shares__swiper', {
        pagination: {
            el: '.shares-pagination',
            clickable: true
        },
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.shares-next',
            prevEl: '.shares-prev'
        },
        on: {
            init: ({ slides }) => {
                const selector = document.querySelector('.shares-length-slides');
                selector.textContent = `${slides[0].ariaLabel
                    .split('/')[1]
                    .toString()
                    .trim()
                    .padStart(2, '0')}`;
            },
            slideChange: ({ realIndex }) => {
                $('.shares-current-slide').text(String(realIndex + 1).padStart(2, '0'));
            }
        }
    });
}

const leadersSlider = document.querySelector('.leaders__swiper');
if (leadersSlider) {
    const swiper = new Swiper('.leaders__swiper', {
        pagination: {
            el: '.leaders-pagination',
            clickable: true
        },
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.leaders-next',
            prevEl: '.leaders-prev'
        },
        on: {
            init: ({ slides }) => {
                const selector = document.querySelector('.leaders-length-slides');
                selector.textContent = `${slides[0].ariaLabel
                    .split('/')[1]
                    .toString()
                    .trim()
                    .padStart(2, '0')}`;
            },
            slideChange: ({ realIndex }) => {
                $('.leaders-current-slide').text(String(realIndex + 1).padStart(2, '0'));
            }
        }
    });
}

const noveltiesSlider = document.querySelector('.novelties__swiper');
if (noveltiesSlider) {
    const swiper = new Swiper('.novelties__swiper', {
        pagination: {
            el: '.novelties-pagination',
            clickable: true
        },
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.novelties-next',
            prevEl: '.novelties-prev'
        },
        on: {
            init: ({ slides }) => {
                const selector = document.querySelector('.novelties-length-slides');
                selector.textContent = `${slides[0].ariaLabel
                    .split('/')[1]
                    .toString()
                    .trim()
                    .padStart(2, '0')}`;
            },
            slideChange: ({ realIndex }) => {
                $('.novelties-current-slide').text(String(realIndex + 1).padStart(2, '0'));
            }
        }
    });
}

const ourServicesSlider = document.querySelector('.our-services__swiper');
if (ourServicesSlider) {
    const swiper = new Swiper('.our-services__swiper', {
        pagination: {
            el: '.our-services-pagination',
            clickable: true
        },
        spaceBetween: rem(4),
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.our-services-next',
            prevEl: '.our-services-prev'
        },
        on: {
            init: ({ slides }) => {
                const selector = document.querySelector('.our-services-length-slides');
                selector.textContent = `${slides[0].ariaLabel
                    .split('/')[1]
                    .toString()
                    .trim()
                    .padStart(2, '0')}`;
            },
            slideChange: ({ realIndex }) => {
                $('.our-services-current-slide').text(String(realIndex + 1).padStart(2, '0'));
            }
        }
    });
}

const showroomSlider = document.querySelector('.showroom__swiper');
if (showroomSlider) {
    const swiper = new Swiper('.showroom__swiper', {
        pagination: {
            el: '.showroom-pagination',
            clickable: true
        },
        spaceBetween: rem(4),
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.showroom-next',
            prevEl: '.showroom-prev'
        },
        on: {
            init: ({ slides }) => {
                const selector = document.querySelector('.showroom-length-slides');
                selector.textContent = `${slides[0].ariaLabel
                    .split('/')[1]
                    .toString()
                    .trim()
                    .padStart(2, '0')}`;
            },
            slideChange: ({ realIndex }) => {
                $('.showroom-current-slide').text(String(realIndex + 1).padStart(2, '0'));
            }
        }
    });
}

const interestedSlider = document.querySelector('.interested__swiper');
if (interestedSlider) {
    const swiper = new Swiper('.interested__swiper', {
        pagination: {
            el: '.interested-pagination',
            clickable: true
        },
        spaceBetween: rem(4),
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.interested-next',
            prevEl: '.interested-prev'
        },
        on: {
            init: ({ slides }) => {
                const selector = document.querySelector('.interested-length-slides');
                selector.textContent = `${slides[0].ariaLabel
                    .split('/')[1]
                    .toString()
                    .trim()
                    .padStart(2, '0')}`;
            },
            slideChange: ({ realIndex }) => {
                $('.interested-current-slide').text(String(realIndex + 1).padStart(2, '0'));
            }
        }
    });
}

const serviceProductsSlider = document.querySelector('.service-products__swiper');
if (serviceProductsSlider) {
    const swiper = new Swiper('.service-products__swiper', {
        pagination: {
            el: '.service-products-pagination',
            clickable: true
        },
        spaceBetween: rem(4),
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.service-products-next',
            prevEl: '.service-products-prev'
        },
        on: {
            init: ({ slides }) => {
                const selector = document.querySelector('.service-products-length-slides');
                selector.textContent = `${slides[0].ariaLabel
                    .split('/')[1]
                    .toString()
                    .trim()
                    .padStart(2, '0')}`;
            },
            slideChange: ({ realIndex }) => {
                $('.service-products-current-slide').text(String(realIndex + 1).padStart(2, '0'));
            }
        }
    });
}

const projectSlider = document.querySelector('.project__swiper');
if (projectSlider) {
    const swiper = new Swiper('.project__swiper', {
        pagination: {
            el: '.project-pagination',
            clickable: true
        },
        slidesPerView: 1.5,
        grabCursor: true,
        speed: 700,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.project-next',
            prevEl: '.project-prev'
        },
        on: {
            init: ({ slides }) => {
                const selector = document.querySelector('.project-length-slides');
                selector.textContent = `${slides.length.toString().padStart(2, '0')}`;
            },
            slideChange: ({ realIndex, slides }) => {
                console.log(realIndex)
                $('.project-current-slide').text(String(realIndex + 1).padStart(2, '0'));
            }
        },
        breakpoints: {
            1: {
                spaceBetween: rem(1),
            },
            768: {
                spaceBetween: rem(3),
            }
        },
    });
}

$('.burger-entry').on('click', function () {
    $('.header__burger-menu').addClass('--active');
    $('body').addClass('locked');
});

$('.header__burger-close').on('click', function () {
    $('.header__burger-menu').removeClass('--active');
    $('body').removeClass('locked');
});

function bindModal(trigger, modal, close, callback = () => null) {
    (modal = document.querySelector(modal)), (close = document.querySelector(close));

    const body = document.body;
    const modalBody = modal.querySelector('.modal');

    if (!$(trigger) || !modal || !close || !modalBody) return;

    $(trigger).each(function () {
        $(this).on('click', (e) => {
            e.preventDefault();
            modal.classList.add('--active');
            modalBody.classList.add('--active');
            body.classList.add('locked');
        });
    });
    $(close).on('click', () => {
        modalBody.classList.remove('--active');
        modal.classList.remove('--active');
        body.classList.remove('locked');
    });
    $(modal).on('click', (e) => {
        if (e.target === modal) {
            modalBody.classList.remove('--active');
            modal.classList.remove('--active');
            body.classList.remove('locked');
        }
    });

    callback();
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal('.request-button', '#request-modal', '#request-modal .modal__close');
bindModal(
    '.request-success-button',
    '#request-modal-success',
    '#request-modal-success .modal__close',
    bindSuccessModal
);
bindModal('.room-setup__form-button', '#request-modal-success', '#request-modal-success .modal__close');
bindModal('.designers-request-button', '#request-modal', '#request-modal .modal__close', bindSuccessModal);
bindModal(
    '.designers-request-mobile-button',
    '#request-modal',
    '#request-modal .modal__close',
    bindSuccessModal
);
bindModal('.our-services-request-button', '#request-modal', '#request-modal .modal__close', bindSuccessModal);
bindModal(
    '.banner-paints-request-button',
    '#request-modal-paints',
    '#request-modal-paints .modal__close',
    bindSuccessModal
);
bindModal('.service-request-button', '#request-modal', '#request-modal .modal__close', bindSuccessModal);

function bindSuccessModal() {
    $('.request-success-button').on('click', (event) => {
        event.preventDefault();

        $('.modal__wrapper').each(function () {
            $(this).removeClass('--active');
            $(this).find('.modal').removeClass('--active');
        });

        $('#request-modal-success').addClass('--active');
        $('#request-modal-success .modal').addClass('--active');
    });
}

if (document.querySelector('.shares__categories')) {
    // const COMPONENT_SELECTOR = '.shares__categories';
    const CONTENT_SELECTOR = '.shares__categories-list';
    //
    // const components = document.querySelectorAll(COMPONENT_SELECTOR);
    //
    // for (let i = 0; i < components.length; i++) {
    //     let mx = 0;
    //
    //     const component = components[i];
    //     const content = component.querySelector(CONTENT_SELECTOR);
    //
    //     const mousemoveHandler = (e) => {
    //         const mx2 = e.pageX - content.offsetLeft;
    //         if (mx) {
    //             content.scrollLeft = content.sx + mx - mx2;
    //         }
    //     };
    //
    //     const mousedownHandler = (e) => {
    //         content.sx = content.scrollLeft;
    //         mx = e.pageX - content.offsetLeft;
    //         content.classList.add('dragging');
    //     };
    //
    //     const mouseupHandler = () => {
    //         mx = 0;
    //         content.classList.remove('dragging');
    //     };
    //
    //     content.addEventListener('mousemove', mousemoveHandler);
    //     content.addEventListener('mousedown', mousedownHandler);
    //
    //     content.addEventListener('mouseup', mouseupHandler);
    //     content.addEventListener('mouseleave', mouseupHandler);
    // }
    //
    const arrow = document.querySelector('.shares__categories-icon');
    const container = document.querySelector(CONTENT_SELECTOR);

    arrow.addEventListener('click', () => {
        container.scrollBy({ left: 150, behavior: 'smooth' });
    });
}

if (document.querySelector('.map')) {
    ymaps.ready(init);
    function init() {
        let map = new ymaps.Map('map', {
            center: [55.57164454207913, 37.585655000000024],
            zoom: 10.5
        });

        let placemark = new ymaps.Placemark(
            map.getCenter(),
            {},
            {
                iconLayout: 'default#image',
                iconImageHref: '../img/yMap-icon.svg',
                iconImageSize: [rem(7), rem(7)]
            }
        );

        map.controls.remove('geolocationControl'); // удаляем геолокацию
        map.controls.remove('searchControl'); // удаляем поиск
        map.controls.remove('trafficControl'); // удаляем контроль трафика
        map.controls.remove('typeSelector'); // удаляем тип
        map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        map.controls.remove('zoomControl'); // удаляем контрол зуммирования
        map.controls.remove('rulerControl'); // удаляем контрол правил

        map.geoObjects.add(placemark);
    }
}

if (document.querySelector('.contacts-map')) {
    ymaps.ready(init);

    function init() {
        let map = new ymaps.Map('contacts-map', {
            center: [55.708436655963034, 37.4071362641405],
            zoom: 12
        });

        let placemark = new ymaps.Placemark(
            map.getCenter(),
            {},
            {
                iconLayout: 'default#image',
                iconImageHref: '../img/yMap-icon.svg',
                iconImageSize: [rem(6), rem(6)]
            }
        );

        map.controls.remove('geolocationControl'); // удаляем геолокацию
        map.controls.remove('searchControl'); // удаляем поиск
        map.controls.remove('trafficControl'); // удаляем контроль трафика
        map.controls.remove('typeSelector'); // удаляем тип
        map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        map.controls.remove('zoomControl'); // удаляем контрол зуммирования
        map.controls.remove('rulerControl'); // удаляем контрол правил

        map.geoObjects.add(placemark);
    }
}

function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger');
    items.forEach((item) => {
        item.addEventListener('click', () => {
            const parent = item.parentNode;
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active');
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach((child) => child.classList.remove('accordion__item-active'));
                parent.classList.add('accordion__item-active');
            }
        });
    });
}

if (document.querySelector('.service')) {
    accordion();
}

function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);
    function hideTabContent() {
        content.forEach((item) => {
            item.classList.remove('--active');
        });
        tab.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }
    function showTabContent(i = 0) {
        content[i].classList.add('--active');
        tab[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();
    header.addEventListener('click', (e) => {
        const target = e.target;
        if (
            target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
        ) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
if (document.querySelector('.tabs__header')) {
    tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active');
}
