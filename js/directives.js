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


            const menu      = document.getElementById("menu");
            const about     = document.getElementById("about");
            const backToTop = document.getElementById("back-to-top")

            window.onscroll = function() { $scope.scrolling() };

            $scope.scrolling = function() {
                const offset = window.pageYOffset + 200;
                if (offset > about.offsetTop) {
                    backToTop.classList.add("active");
                } else {
                    backToTop.classList.remove("active");
                }

                if (offset > window.innerHeight / 2) {
                    menu.classList.add("sticky");
                } else {
                    menu.classList.remove("sticky");
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
                    desc    : 'A clean, mobile first, custom WordPress Theme built for Bolt, a Canadian Logistics company. Converted from Figma into custom page templates, and using the ACF plugin for easy content updates.',
                    tech  : ['WordPress', 'LESS', 'PHP', 'jQuery']
                },
                {
                    title : 'Learn Ditidaht',
                    link  : 'http://www.learnditidaht.ca',
                    isLinkDirect : true,
                    image : 'ditidaht.png',
                    desc  : 'Learn Ditidaht is a gamified language learning application (a la Duolingo) created for the Ditidaht First Nation on Vancouver Island. I had the great pleasure of creating over a dozen of the mini games, redesigning the custom WP endpoints and progress tracking system, and building out various parts of the interface.',
                    tech  : ['React.js', 'WordPress', 'PHP', 'SASS']
                },
                {
                    title : 'Project \x2744',
                    link  : 'https://www.project44.ca/',
                    isLinkDirect : true,
                    image : 'p442.png',
                    desc  : 'Created for the Canadian Research and Mapping Association, Project \x2744 is a map based showcase of the Battle of Normandy. On this project I handled the organization and design of the front end code, and built out a number of the UI components, as well as many of map interactions.',
                    tech  : ['React.js', 'Redux', 'Mapbox GL JS']
                },
                {
                    title : 'Decade',
                    link  : 'https://web.birdiefire.com/',
                    isLinkDirect : false,
                    image : 'birdiefire.png',
                    desc  : 'Decade is an app made for golfers and their coaches to input and review game data. I contributed to many features of the web based mapping portion in React and Mapbox, where users navigate around a course to drag and drop their shots.',
                    tech  : ['React.js', 'Mapbox GL JS', 'LESS']
                },
            ]
        }
    } 
 }])
.directive('contact', [function() {
    return {
        restrict: 'A',
        replace: false,
        templateUrl: 'html/contact.html',
        scope : true,
        link: function($scope, $element, $attributes) {

            $scope.msg = { 
                click  : { text : 'Click to Copy', klass: '' },
                copied : { text : 'Copied!',       klass: 'clicked' },
                mobile : { text : 'Tap again to copy', klass : '' }
            };

            $scope.activeMsg = 'click';

            $scope.copyToClip = function() {
                if (mobileCheck()) {
                    if ($scope.activeMsg === 'mobile') {
                        navigator.clipboard.writeText('rubykulikowska@gmail.com');
                        $scope.activeMsg = 'copied';
                    } else {
                        $scope.activeMsg = 'mobile';
                    }
                } else {
                    navigator.clipboard.writeText('rubykulikowska@gmail.com');
                    $scope.activeMsg = 'copied';
                }
            }

            $scope.resetMsg = function() {
                setTimeout(() => {
                    $scope.activeMsg = 'click';
                    $scope.$apply();
                }, 300);
            }

            const mobileCheck = function() {
              let check = false;
              (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
              return check;
            };

        }
    } 
}])

.directive('email', [function() {
    return {
        restrict: 'A',
        replace: false,
        scope : true,
        templateUrl: 'html/email.html',
        link: function($scope, $element, $attributes) {
            $scope.pinEmail = function() {
                $scope.pinned = !$scope.pinned;
            }

            $scope.copyToClip = function() {
                navigator.clipboard.writeText('rubykulikowska@gmail.com');
                $scope.copied = true;

                setTimeout(() => {
                    $scope.copied = false;
                    $scope.$apply();
                }, 2000);
            }
        }
    } 
}])

.filter('checkActive', function() {
    return function(input) { return input ? 'active' : ''; };
})
.filter('checkInactive', function() {
    return function(input) { return input ? 'inactive' : ''; };
})
