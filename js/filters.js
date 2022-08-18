var mixer = mixitup('.portfolio');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.portfolio__portfolio-item'
    },

    controls: {
        toggleLogic: 'and'
    },

    classNames: {
        elementToggle: 'toggle'
    },

});
