const $ = require('jquery');
$(function() {
    'use strict';
    // Cache jQuery selectors
    const jqueryMap = {
            $menu_link: $('.js-menu-item'),
        }
        // Open Search Block
    jqueryMap.$menu_link.on('click', function() {
        let section = $(this).attr('data-section');
        console.log(section);
        $('html, body').animate({
            scrollTop: $('.' + section).offset().top
        }, 800);
    });
});