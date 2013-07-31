angular.module('canvasProjectApp', []).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});
//@ sourceMappingURL=file:////Users/zeisler/Dropbox/PCS/canvas_project/app/scripts/app.js.map
