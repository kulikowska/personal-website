APP
.directive('content', [function() {
    return {
        restrict: 'A',
        replace: false,
        templateUrl: 'html/content.html',
        link: function($scope, $element, $attributes) {

            AOS.init();

            AOS.init({
              // Global settings:
              disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
              startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
              initClassName: 'aos-init', // class applied after initialization
              animatedClassName: 'aos-animate', // class applied on animation
              useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
              disableMutationObserver: false, // disables automatic mutations' detections (advanced)
              debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
              throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


              // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
              offset: 120, // offset (in px) from the original trigger point
              delay: 0, // values from 0 to 3000, with step 50ms
              duration: 800, // values from 0 to 3000, with step 50ms
              easing: 'ease', // default easing for AOS animations
              once: false, // whether animation should happen only once - while scrolling down
              mirror: false, // whether elements should animate out while scrolling past them
              anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

            });

            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            }

            const menu      = document.getElementById("menu");
            const content   = document.getElementById("header");
            const backToTop = document.getElementById("backToTop")

            content.onscroll = function() { scrolling() };

            $scope.scrolling = function(about) {
                if (window.pageYOffset + 80 > about.offsetTop) {
                    menu.classList.add("sticky");
                    backToTop.classList.add("active");
                } else {
                    menu.classList.remove("sticky");
                    backToTop.classList.remove("active");
                }
            }
         }
      } 
 }])
.directive('about', [function() {
    return {
        restrict: 'A',
        replace: false,
        templateUrl: 'html/about.html',
        link: function($scope, $element, $attributes) {
            const about = document.getElementById("about");
            window.onscroll = function() { $scope.scrolling(about) };
        }
    } 
}])
.directive('portfolio', [function() {
    return {
        restrict: 'A',
        replace: false,
        templateUrl: 'html/portfolio.html',
        link: function($scope, $element, $attributes) {
            $scope.portfolioItems = [
                {
                    title : 'Bolt Logistics',
                    link  : 'https://www.gobolt.com/',
                    isLinkDirect : true,
                    image : 'bolt3.png',
                    desc  : 'A modern, mobile first, custom WordPress theme built for Bolt, a Canadian logistics company.',
                    tech  : ['WordPress', 'LESS', 'PHP', 'jQuery']
                },
                {
                    title : 'Learn Ditidaht',
                    link  : 'http://www.learnditidaht.ca',
                    isLinkDirect : true,
                    image : 'ditidaht.png',
                    desc  : 'Learn Ditidaht is a gamified language learning application (think Duolingo!) created for the Ditidaht First Nation on Vancouver Island. It features over two dozen mini games, progress tracking, and a very awesome mascot.',
                    //desc  : 'The Ditidaht First Nation on Vancouver Island has only 6 fluent speakers of their native language. In an effort to preserve the language, Learn Ditidaht was created. I\x27ve been lucky enough to contribute to this exciting, interactive language learning tool, which is built with a combination of WordPress and React.',
                    tech  : ['React.js', 'Redux', 'WordPress', 'PHP']
                },
                {
                    title : 'Project \x2744',
                    link  : 'https://www.project44.ca/',
                    isLinkDirect : true,
                    image : 'p442.png',
                    desc  : 'Created for the Canadian Research and Mapping Association, Project \x2744 is a web showcase of the Battle of Normandy. Centered around a map of the troop movements, it also includes an extensive collection of unit war diaries. Currently in Beta.',
                    //desc  : 'Created for the Canadian Research and Mapping Association, Project \x2744 is a web showcase of the Battle of Normandy. Centered around a map of the troop movements, it includes fascinating unit war diaries and images. Currently in Beta.',
                    tech  : ['React.js', 'Redux', 'Mapbox GL JS']
                },
                {
                    title : 'International SOS',
                    link  : false,
                    isLinkDirect : false,
                    image : 'sosinternational.png',
                    desc  : 'Built in React and Leaflet, a simple application for International SOS to map travel risks worldwide, with options for data-driven styling and filtering by various categories.',
                    tech  : ['React.js', 'Leaflet', 'SASS']
                },
                {
                    title : 'Tarot Routing',
                    link  : 'https://www.tarotanalytics.com/',
                    isLinkDirect : false,
                    image : 'tarot.png',
                    desc  : 'A route optimisation tool built for Tarot Analytics. Originally built in React and Flux, most of my work on this product involved rewriting into Redux, as well as some tweaks to their React Native app.',
                    tech  : ['React.js', 'Redux', 'Leaflet', 'React Native']
                },
                /*
                {
                    title : 'Yellowstone Wolf Map',
                    link  : 'http://www.rubykulikowska.com/wolf-map',
                    isLinkDirect : true,
                    image : 'wolf-map.png',
                    desc  : 'The Yellowstone Wolf Map is an interactive visualization of the reintroduction of wolf populations into Yellowstone National Park. Still a work in progess.',
                    tech  : ['React.js', 'Mapbox GL JS', 'LESS']
                },
                */
                {
                    title : 'BirdieFire',
                    link  : false,
                    isLinkDirect : false,
                    image : 'birdiefire.png',
                    desc  : 'BirdieFire is an application used by golfers and their coaches to input and review their game data. Built in Mapbox.js and React, users get to drag their shots around the course for easy data input and immediate shot statistics.',
                    tech  : ['React.js', 'Mapbox GL', 'LESS']
                },
                {
                    title : 'Blacktie Skis Landing Page',
                    link  : 'http://www.blacktieslopeside.com',
                    isLinkDirect : true,
                    image : 'blacktie.png',
                    desc  : 'A little landing page built for Black Tie Ski Rentals of Whistler, BC.',
                    tech  : ['HTML5', 'CSS3', 'JavaScript']
                }
            ]
        }
    } 
 }])
.directive('contact', [function() {
    return {
        restrict: 'A',
        replace: false,
        templateUrl: 'html/contact.html',
        link: function($scope, $element, $attributes) {
        }
    } 
}])
 
.filter('checkActive', function() {
    return function(input) { return input ? 'active' : ''; };
})
.filter('checkInactive', function() {
    return function(input) { return input ? 'inactive' : ''; };
})
