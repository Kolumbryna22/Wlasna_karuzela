$(function() {
    'use strict';

    var $carouselList = $('#carousel ul');

    setInterval(changeSlide, 1500);

    function changeSlide() {
        $carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);

        function moveFirstSlide() {
            var $firstItem = $carouselList.find('li:first');
            var $lastItem = $carouselList.find('li:last');

            $firstItem.after($lastItem);
            $carouselList.css({marginLeft: 0});
        };
    };
});
