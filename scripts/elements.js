export const elements = {
    time: {
        minutes: () => document.querySelector('.time .m'),
        seconds: () => document.querySelector('.time .s'),
        container: () => document.querySelector('.time-container'),
        innerLayer: () => document.querySelector('.inner-layer'),
        time: () => document.querySelector('.time')
    },
    slider: {
        slider: () => document.querySelector('div.slider'),
        partnersWrapper: () => document.querySelector('#partners'),
        partners: () => document.querySelectorAll('div.partner')
    },
    modal: {
        modal: () => document.querySelector('#modal'),
        modalOverlay: () => document.querySelector('#modal-overlay'),
        closeButton: () => document.querySelector('#close-button'),
        form: () => document.querySelector('form.time-form'),
        suggestions: () => document.querySelector('.suggestions')
    }
};
