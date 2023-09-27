// Custom scripts

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
        init: ({ slides }) => {
            const selector = document.querySelector(`.${init}-length-slides`);
            selector.textContent = `${slides[0].ariaLabel.split('/')[1].toString().trim().padStart(2, '0')}`;
        },
        slideChange: ({ realIndex }) => {
            $(`.${init}-current-slide`).text(String(realIndex + 1).padStart(2, '0'));
        }
    },
    ...payload,
});

const heroSwiper = document.querySelector('.hero__swiper');
if (heroSwiper) {
    const swiper = new Swiper('.hero__swiper', {
        grabCursor: true,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        ...swiperSettings('hero')
    });
}

const categoriesSwiper = document.querySelector('.categories__swiper');
if (categoriesSwiper) {
    const swiper = new Swiper('.categories__swiper', {
        spaceBetween: 30,
        slidesPerView: 1,
        ...swiperSettings('categories')
    });
}

const brandsSwiper = document.querySelector('.brands__swiper');
if (brandsSwiper) {
    const swiper = new Swiper('.brands__swiper', {
        slidesPerView: 1,
        autoplay: true,
        grabCursor: true,
        speed: 700,
        centeredSlides: true,
        ...swiperSettings('brands')
    });
}

const sharesSlider = document.querySelector('.shares__swiper');
if (sharesSlider) {
    const swiper = new Swiper('.shares__swiper', {
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        ...swiperSettings('shares')
    });
}

const leadersSlider = document.querySelector('.leaders__swiper');
if (leadersSlider) {
    const swiper = new Swiper('.leaders__swiper', {
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        ...swiperSettings('leaders')
    });
}

const noveltiesSlider = document.querySelector('.novelties__swiper');
if (noveltiesSlider) {
    const swiper = new Swiper('.novelties__swiper', {
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        ...swiperSettings('novelties')
    });
}

const ourServicesSlider = document.querySelector('.our-services__swiper');
if (ourServicesSlider) {
    const swiper = new Swiper('.our-services__swiper', {
        spaceBetween: rem(4),
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        ...swiperSettings('our-services')
    });
}

const showroomSlider = document.querySelector('.showroom__swiper');
if (showroomSlider) {
    const swiper = new Swiper('.showroom__swiper', {
        spaceBetween: rem(4),
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        ...swiperSettings('showroom')
    });
}

const interestedSlider = document.querySelector('.interested__swiper');
if (interestedSlider) {
    const swiper = new Swiper('.interested__swiper', {
        spaceBetween: rem(4),
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        ...swiperSettings('interested')
    });
}

const serviceProductsSlider = document.querySelector('.service-products__swiper');
if (serviceProductsSlider) {
    const swiper = new Swiper('.service-products__swiper', {
        spaceBetween: rem(4),
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        ...swiperSettings('service-products')
    });
}

const usableMaterialsSlider = document.querySelector('.usable-materials__swiper');
if (usableMaterialsSlider) {
    const swiper = new Swiper('.usable-materials__swiper', {
        spaceBetween: rem(4),
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        ...swiperSettings('usable-materials')
    });
}

const projectSlider = document.querySelector('.project__swiper');
if (projectSlider) {
    const swiper = new Swiper('.project__swiper', {
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
}

const relatedProductsSlider = document.querySelector('.related-products__swiper');
if (relatedProductsSlider) {
    const swiper = new Swiper('.related-products__swiper', {
        spaceBetween: rem(4),
        slidesPerView: 1,
        grabCursor: true,
        speed: 700,
        ...swiperSettings('related-products')
    });
}

const feedbackSlider = document.querySelector('.feedback__swiper');
if (feedbackSlider) {
    const swiper = new Swiper('.feedback__swiper', {
        spaceBetween: rem(12.6),
        slidesPerView: 3,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        grabCursor: true,
        speed: 700,
        ...swiperSettings('feedback'),
        on: {}
    });
}

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

function isMobile() {
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobileRegex.test(navigator.userAgent);
}

function isMatchMedia(mather = 48) {
    return window.matchMedia(`(max-width: ${rem(mather)}px)`).matches;
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
bindModal('.request__form-submit-button', '#request-modal-success', '#request-modal-success .modal__close');

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
    const COMPONENT_SELECTOR = '.shares__categories';
    const CONTENT_SELECTOR = '.shares__categories-list';

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

    const arrows = {
        left: document.querySelector('.shares__categories-icon.left'),
        right: document.querySelector('.shares__categories-icon.right')
    };
    const container = document.querySelector(CONTENT_SELECTOR);

    arrows.left.addEventListener('click', () => {
        container.scrollBy({ left: -150, behavior: 'smooth' });
    });

    arrows.right.addEventListener('click', () => {
        container.scrollBy({ left: 150, behavior: 'smooth' });
        const width = (container.offsetWidth / 2) * 0.1;
        const scrollLeft = container.scrollLeft;

        if (scrollLeft > width) {
            arrows.left.classList.add('--active');
        }
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

function accordion(accordionSelector, accordionItem = 'empty') {
    const items = document.querySelectorAll(accordionSelector);
    items.forEach((item) => {
        item.addEventListener('click', () => {
            const parent = item.parentNode;
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active');
            } else {
                document
                    .querySelectorAll(accordionItem)
                    .forEach((child) => child.classList.remove('accordion__item-active'));
                parent.classList.add('accordion__item-active');
            }
        });
    });
}

if (document.querySelector('.service')) {
    accordion('.accordion__item-trigger', '.accordion__item');
}

if (document.querySelector('.product__additionally-accordion-item-trigger')) {
    accordion('.product__additionally-accordion-item-trigger');
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

$('.showroom__up-button').on('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
$('.request-details-dropdown').on('click', function () {
    $(this).closest('.request__details').toggleClass('--active');

    $(this).siblings('.request__details-list').slideToggle(500);
});

let timeout = null;

$('.header__content-searchbar-input').on(isMobile() && isMatchMedia() ? 'focus' : 'click', function () {
    $('.header__searchbar-menu').addClass('--active');
    isMobile() && isMatchMedia() && $('#menu-search-field').focus();

    if (timeout) {
        clearTimeout(timeout);
    }
});

$('.header__searchbar-menu-back-button').on('click', function () {
    $('.header__searchbar-menu').removeClass('--active');
});

$('.header__searchbar-menu-input .reset-input-text').on('click', function () {
    $('#menu-search-field').val('');
});

$('.header__content-searchbar-input').on('blur', function (event) {
    timeout = setTimeout(() => {
        !(isMobile() && isMatchMedia()) && $('.header__searchbar-menu').removeClass('--active');
    }, 50);
});

$('.header__catalog-category').each(function () {
    $(this).on(isMobile() && isMatchMedia() ? 'click' : 'mouseenter', function () {
        if (!(isMobile() && isMatchMedia())) {
            $('.header__catalog-category').each(function () {
                $(this).removeClass('--active');
            });

            $(this).addClass('--active');
        } else {
            $(this).find('.header__catalog-category-content').slideToggle('slow');
            $(this).toggleClass('--active');
        }
    });

    if (isMobile() && isMatchMedia() && $(this).hasClass('--active')) {
        $(this).find('.header__catalog-category-content').slideDown('slow');
    }
});

$('.catalog-entry').each(function () {
    $(this).on('click', function () {
        $(this).toggleClass('--active');
        $('body').toggleClass('locked');
        $('.header').toggleClass('--active');

        !isMobile() && window.scrollTo({ top: 0, behavior: 'smooth' });
        $('.header__catalog').toggleClass('--active');
    });
});

// $('.header__content-searchbar-button').on('focus', function () {
//     $(this).closest('.catalog-entry').click();
//     $('body').addClass('locked');
//     $('.header').addClass('--active');
//
//     !isMobile() && window.scrollTo({ top: 0, behavior: 'smooth' });
//     $('.header__catalog').addClass('--active');
// });

$('.header__catalog').on('click', (event) => {
    if ($(event.target).hasClass('header__catalog')) {
        $('.catalog-entry').toggleClass('--active');
        $('body').toggleClass('locked');
        $('.header').toggleClass('--active');

        $('.header__catalog').toggleClass('--active');
    }
});

$('.header__catalog-menu-back').on('click', () => {
    $('.catalog-entry').removeClass('--active');
    $('body').removeClass('locked');
    $('.header').removeClass('--active');

    $('.header__catalog').removeClass('--active');
});

$('.catalog__sort-heading').on('click', function () {
    $(this).closest('.catalog__sort').toggleClass('--active');
    isMobile() && isMatchMedia() && $('body').addClass('locked');
});

$('.catalog__filters-show-more').on('click', function () {
    $(this).closest('.catalog__filters').addClass('--active');
});

$('.catalog__filters-hide').on('click', function () {
    $(this).closest('.catalog__filters').removeClass('--active');
});

$('.catalog__sort-item').each(function () {
    $(this).on('change', function () {
        $(this).closest('.catalog__sort').removeClass('--active');
    });
});

const rangeSlider = document.querySelector('.range-slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        range: {
            min: 0,
            max: 20000
        },
        step: 1,
        start: [0, 10000],
        connect: true
    });

    const inputFrom = document.getElementById('input-0');
    const inputTo = document.getElementById('input-1');

    const inputs = [inputFrom, inputTo];

    rangeSlider.noUiSlider.on('update', (values, handle) => {
        inputs[handle].value = Math.round(values[handle]);
    });

    inputs.forEach((input, index) => {
        input.addEventListener('change', (event) => {
            const range = [null, null];
            range[index] = event.currentTarget.value;

            rangeSlider.noUiSlider.set(range);
        });
    });
}

$('.catalog__products-filters-reset').on('click', () => {
    rangeSlider.noUiSlider.reset();
});

function useClickOutside(element, callback) {
    document.addEventListener('click', function (event) {
        const outsideClick =
            typeof event.composedPath === 'function' && !event.composedPath().includes(element);

        if (outsideClick) {
            callback();
        }
    });
}

useClickOutside(document.querySelector('.catalog__heading-settings'), () => {
    $('.catalog__sort').removeClass('--active');
});

$(window).on('scroll', function () {
    if (!$('.catalog__heading-settings').length) return;

    if (
        isMobile() &&
        isMatchMedia() &&
        $(this).scrollTop() > $('.section-heading.catalog__heading').position().top
    ) {
        $('.catalog__heading-settings').addClass('--active');
        $('.section-heading.catalog__heading').css(
            'height',
            $('.catalog__heading-settings').height() + rem(5)
        );
    } else {
        $('.catalog__heading-settings').removeClass('--active');
        $('.section-heading.catalog__heading').css('height', 'initial');
    }
});

$('.catalog__heading-settings-filter').on('click', () => {
    $('.catalog__products-filters').addClass('--active');
    $('body').addClass('locked');
});

$('.catalog__products-filters-heading button').on('click', () => {
    $('.catalog__products-filters').removeClass('--active');
    $('body').removeClass('locked');
});

$('.social-media__button').on('mouseenter', () => {
    $('.social-media__list').addClass('--active');
});

$('.social-media__list').on('mouseleave', () => {
    $('.social-media__list').removeClass('--active');
});

//mobile sort menu remove active class
$('.catalog__sort-menu').on('click', function (event) {
    if ($(event.target).hasClass('catalog__sort-menu')) {
        $(this).closest('.catalog__sort').removeClass('--active');
        $('body').removeClass('locked');
    }
});

$('#select-all').on('change', function (event) {
    if (event.target.checked) {
        $('.basket__item').each(function () {
            $(this).find('input').prop('checked', true);
        });
    } else {
        $('.basket__item').each(function () {
            $(this).find('input').prop('checked', false);
        });
    }
});

$('.basket__item input').on('change', function () {
    const data = [];

    $('.basket__item').each(function () {
        data.push($(this).find('input').prop('checked'));
    });

    const isChecked = data.every((item) => item);

    if (isChecked) {
        $('#select-all').prop('checked', true);
    } else {
        $('#select-all').prop('checked', false);
    }
});
