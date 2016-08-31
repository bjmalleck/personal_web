// TODO: Re-write to employ a proper design pattern for sections.

var homeSection = $('#home-section');
var contactSection = $('#contact-section');
var resumeSection = $('#resume-section');
var projectsSection = $('#projects-section');

var homeButton = $('#home-button');
var contactButton = $('#contact-button');
var resumeButton = $('#resume-button');
var projectsButton = $('#projects-button');

var currentSection;
var currentButton;

function showSection (newSection, newButton) {
    var oldSection = currentSection;
    var oldButton = currentButton;

    if (newSection === oldSection) {
        return;
    }

    if (oldSection) {
        oldButton.removeClass('nav-item-current');
        oldSection.animate({
            opacity: 0,
            left: '100%'
        }, 300, function () {
            oldSection.hide();
        });
    }

    newButton.addClass('nav-item-current');
    newSection.show();
    newSection.css({
        left: '0%'
    });
    newSection.animate({
        opacity: 1,
        left: '50%'
    }, 300);

    currentSection = newSection;
    currentButton = newButton;

    // window.scrollTo(0, 0);
    $('html, body').animate({
        scrollTop: 0
    }, 150);
}

function showSectionCallback(section, button) {
    return function () {
        showSection(section, button);
    };
};

homeButton.on('click', showSectionCallback(homeSection, homeButton));
contactButton.on('click', showSectionCallback(contactSection, contactButton));
resumeButton.on('click', showSectionCallback(resumeSection, resumeButton));
projectsButton.on('click', showSectionCallback(projectsSection, projectsButton));

var sectionAnchor = $(location).attr('hash');

if (sectionAnchor === '#contact') {
    showSection(contactSection, contactButton);
} else if (sectionAnchor === '#resume') {
    showSection(resumeSection, resumeButton);
} else if (sectionAnchor === '#projects') {
    showSection(projectsSection, projectsButton);
} else {
    showSection(homeSection, homeButton);
}
