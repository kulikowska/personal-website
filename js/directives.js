APP
.directive('mainHeader', [function() {
    return {
        restrict: 'C',
        replace: false,
        templateUrl: 'html/content.html',
        //template: TPL.content,
        link: function($scope, $element, $attributes) {


        $scope.changeNav = function(where) {
            $scope.nav = where;
        }

        //window.onscroll = function() { $scope.go() };

        const menu = document.getElementById("menu");
        const content = document.getElementById("header");
        const backToTop = document.getElementById("backToTop")
        //const about = document.getElementById("about");

        //console.log(about, ' content');
        //const backToTop = document.getElementById("backToTop");
        //const sticky = header.offsetTop;
        //const portfolio = document.getElementById("portfolio");
        //const contact = document.getElementById("contact");

        content.onscroll = function() { go() };

        $scope.go = function(about) {
            console.log(about.offsetTop);
            console.log(window.pageYOffset);

            if (window.pageYOffset + 80 > about.offsetTop) {
                menu.classList.add("sticky");
                backToTop.classList.add("active");
                //backToTop.classList.add("show");
                console.log('hey');
            } else {
                //backToTop.classList.remove("show");
                menu.classList.remove("sticky");
                backToTop.classList.remove("active");
            }

            /*
            console.log(portfolio.offsetTop);
            if (window.pageYOffset < portfolio.offsetTop) {
                $scope.activeSection = 'portfolio';
                console.log($scope.activeSection, ' active section');
            } else {
            }
            */
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
            console.log(about, ' content');

            window.onscroll = function() { $scope.go(about) };
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
