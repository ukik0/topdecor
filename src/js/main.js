// Custom scripts
function isMobile() {
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobileRegex.test(navigator.userAgent);
}

function isMatchMedia(matcher = 48) {
    return window.matchMedia(`(max-width: ${rem(matcher)}px)`).matches;
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
bindModal('.burger-modal-phone-entry', '#request-modal', '#request-modal .modal__close', bindSuccessModal);
bindModal(
    '.feedback-entry',
    '#request-modal-feedback',
    '#request-modal-feedback .modal__close',
    bindSuccessModal
);
bindModal(
    '.request-feedback-success',
    '#request-modal-feedback-success',
    '#request-modal-feedback-success .modal__close',
    bindFeedbackSuccessModal
);
bindModal('.select-color-entry', '#select-color-modal', '#select-color-modal .modal__close');

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

function bindFeedbackSuccessModal() {
    $('.request-feedback-success').on('click', (event) => {
        event.preventDefault();

        $('.modal__wrapper').each(function () {
            $(this).removeClass('--active');
            $(this).find('.modal').removeClass('--active');
        });

        $('#request-modal-feedback-success').addClass('--active');
        $('#request-modal-feedback-success .modal').addClass('--active');
    });
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

$('.modal__body-heading-select').on('click', function () {
    $(this).find('.modal__body-heading-select-list').toggleClass('--active');
    isMobile() && isMatchMedia() && $('body').addClass('locked');
});

$('.catalog__filters-show-more').on('click', function () {
    $(this).closest('.catalog__filters').addClass('--active');
});

$('.catalog__filters-hide').on('click', function () {
    $(this).closest('.catalog__filters').removeClass('--active');
});

function closeSelectAfterChange(classname, parent, callback = () => null) {
        $(classname).on('click', function (event) {
            setTimeout(() => {
                $(this).closest(parent).removeClass('--active');
                callback(event.target.id);
            }, 0)
        });
}

closeSelectAfterChange('.catalog__sort-item', '.catalog__sort', () => {
    $('body').removeClass('locked')
});
closeSelectAfterChange('.modal__body-heading-select-item', '.modal__body-heading-select-list', (value) => {
    $('.modal__body-heading-select-name span').html(value);
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

$('.modal__body-color').each(function () {
    $(this).find('.modal__body-color-background').on('click', function () {
        $(this).toggleClass('--selected')
    })
})

//mobile sort menu remove active class
$('.catalog__sort-menu').on('click', function (event) {
    if ($(event.target).hasClass('catalog__sort-menu')) {
        $(this).find('.catalog__sort').removeClass('--active');

        setTimeout(() => {
            $('body').removeClass('locked')
        }, 0)
    }
});

function setPhoneMask() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');

    phoneInputs.forEach((phoneInput) => {
        const im = new Inputmask('+ 7 (999) 999-99-99');
        im.mask(phoneInput);
    });
}

setPhoneMask();

