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
