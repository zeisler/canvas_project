/// <reference path='../_all.ts' />
angular.module('canvasProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.radius = 50;
    $scope.lineWidth = 1;
    $scope.pie = (1/2);
    $scope.circle_start = 0;
    $scope.circle_end = 2 * Math.PI;
    var _drawCircle = function(radius, lineWidth, start, end){
      var canvas = <HTMLCanvasElement> document.getElementById('canvas');
      if (canvas.getContext) {
        console.log('drawing');
        var context = canvas.getContext('2d');
        //clear the canvas
        context.clearRect(0,0, canvas.width, canvas.height);
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        context.beginPath();
        context.arc(centerX, centerY, radius, start, end, false);
        context.closePath();
        context.fillStyle = 'green';
        context.fill();
        context.lineWidth = lineWidth;
        context.strokeStyle = '#003300';
        context.stroke();
      }
    };

    $scope.drawCircle = function(){
      _drawCircle($scope.radius,$scope.lineWidth, $scope.circle_start, $scope.circle_end);
    };
  });
