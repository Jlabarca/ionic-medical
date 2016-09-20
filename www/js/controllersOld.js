angular.module('starter.controllers', [])
.controller('FichaCtrl', function($scope) {

  $scope.nombre = "Niño test";
  $scope.fechaNacimiento = "03/05/2014";


})

.controller('DashCtrl', function($scope) {})

.controller('TipsCtrl', function($scope, Tips) {
  $scope.tips = Tips.all();
  $scope.remove = function(tip) {
    Tips.remove(tip);
  };
})

.controller('TipDetailCtrl', function($scope, $stateParams, Tips) {
  $scope.tip = Tips.get($stateParams.tipId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('GraficosCtrl', function($scope) {
  $scope.labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
  $scope.series = ['ejemplo 1', 'ejemplo 2', 'ejemplo 3'];
  $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [18, 38, 40, 49, 81, 43, 77]
  ];

  $scope.dohnutdata = [65, 59, 80, 81, 56, 55, 40];
  $scope.piedata = [65, 59, 80, 81, 56, 55, 40];
  $scope.polardata = [65, 59, 80, 81, 56, 55, 40];



   //Globals
  $scope.myChartOptions = {
      // Boolean - Whether to animate the chart
      animation: true,

      // Number - Number of animation steps
      animationSteps: 60,

      // String - Animation easing effect
      animationEasing: "easeOutQuart",

      // Boolean - If we should show the scale at all
      showScale: true,

      // Boolean - If we want to override with a hard coded scale
      scaleOverride: false,

      // ** Required if scaleOverride is true **
      // Number - The number of steps in a hard coded scale
      scaleSteps: null,
      // Number - The value jump in the hard coded scale
      scaleStepWidth: null,
      // Number - The scale starting value
      scaleStartValue: null,

      // String - Colour of the scale line
      scaleLineColor: "rgba(0,0,0,.1)",

      // Number - Pixel width of the scale line
      scaleLineWidth: 1,

      // Boolean - Whether to show labels on the scale
      scaleShowLabels: true,

      // Interpolated JS string - can access value
      scaleLabel: "<%=value%>",

      // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
      scaleIntegersOnly: true,

      // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero: false,

      // String - Scale label font declaration for the scale label
      scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

      // Number - Scale label font size in pixels
      scaleFontSize: 12,

      // String - Scale label font weight style
      scaleFontStyle: "normal",

      // String - Scale label font colour
      scaleFontColor: "#666",

      // Boolean - whether or not the chart should be responsive and resize when the browser does.
      responsive: true,

      // Boolean - Determines whether to draw tooltips on the canvas or not
      showTooltips: false,

      // Array - Array of string names to attach tooltip events
      tooltipEvents: ["mousemove", "touchstart", "touchmove"],

      // String - Tooltip background colour
      tooltipFillColor: "rgba(0,0,0,0.8)",

      // String - Tooltip label font declaration for the scale label
      tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

      // Number - Tooltip label font size in pixels
      tooltipFontSize: 14,

      // String - Tooltip font weight style
      tooltipFontStyle: "normal",

      // String - Tooltip label font colour
      tooltipFontColor: "#fff",

      // String - Tooltip title font declaration for the scale label
      tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

      // Number - Tooltip title font size in pixels
      tooltipTitleFontSize: 14,

      // String - Tooltip title font weight style
      tooltipTitleFontStyle: "bold",

      // String - Tooltip title font colour
      tooltipTitleFontColor: "#fff",

      // Number - pixel width of padding around tooltip text
      tooltipYPadding: 6,

      // Number - pixel width of padding around tooltip text
      tooltipXPadding: 6,

      // Number - Size of the caret on the tooltip
      tooltipCaretSize: 8,

      // Number - Pixel radius of the tooltip border
      tooltipCornerRadius: 6,

      // Number - Pixel offset from point x to tooltip edge
      tooltipXOffset: 10,

      // String - Template string for single tooltips
      tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

      // String - Template string for single tooltips
      multiTooltipTemplate: "<%= value %>",

      // Function - Will fire on animation progression.
      onAnimationProgress: function(){},

      // Function - Will fire on animation completion.
      onAnimationComplete: function(){}
  };
})


.controller('calenderController', function ($scope) {
    'use strict';
    $scope.calendar = {};
    $scope.changeMode = function (mode) {
        $scope.calendar.mode = mode;
    };

    $scope.loadEvents = function () {
        $scope.calendar.eventSource = createRandomEvents();
    };

    $scope.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };

    $scope.onViewTitleChanged = function (title) {
        $scope.viewTitle = title;
    };

    $scope.today = function () {
        $scope.calendar.currentDate = new Date();
    };

    $scope.isToday = function () {
        var today = new Date(),
            currentCalendarDate = new Date($scope.calendar.currentDate);

        today.setHours(0, 0, 0, 0);
        currentCalendarDate.setHours(0, 0, 0, 0);
        return today.getTime() === currentCalendarDate.getTime();
    };

    $scope.onTimeSelected = function (selectedTime, events) {
        console.log('Selected time: ' + selectedTime + ', hasEvents: ' + (events !== undefined && events.length !== 0));
    };

    function createRandomEvents() {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'Control Médico - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Medicamento - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    }
})


.controller('timeLineCtrl', function($rootScope, $document, $timeout, $scope, $ionicScrollDelegate, Tips) {

	//})

	//var ExampleCtrl = function($rootScope, $document, $timeout, $scope) {

	var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing eing elit.";
  console.log(Tips.all());
	$scope.side = '';

	$scope.events = Tips.all();

	$scope.addEvent = function() {
		$scope.events.push({
      id: 0,
      area: 0,

      titulo: 'Lorem ipsum dolor sit amet',
      descripcion: 'Lorem ipsum dolor sit amet',
      imagen: 'img/1.png'
		});
		$ionicScrollDelegate.resize();

	};
	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementIn = function($el) {
		$el.removeClass('timeline-hidden');
		$el.addClass('bounce-in');
	};

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementOut = function($el) {
		$el.addClass('timeline-hidden');
		$el.removeClass('bounce-in');
	};

	$scope.reExecuteAnimation = function(){
		TM = document.getElementsByClassName('tm');
		for (var i = 0; i < TM.length; i++) {
	        removeAddClass(TM[i], 'bounce-in');
	    }
	}

	$scope.rePerformAnimation = function(){
	   $scope.reExecuteAnimation();
	}

	$scope.leftAlign = function() {
		$scope.side = 'left';
		$ionicScrollDelegate.resize();

		$scope.reExecuteAnimation();
	}

	$scope.rightAlign = function() {
		$scope.side = 'right';
		$ionicScrollDelegate.resize();

		$scope.reExecuteAnimation();
	}

	$scope.defaultAlign = function() {
    if($scope.side  == "left")
		  $scope.side = 'right';
    else if($scope.side  == "right")
      $scope.side = '';
    else if($scope.side  == "")
      $scope.side = 'left';

		$ionicScrollDelegate.resize();
		$scope.reExecuteAnimation();
		// or 'alternate'
	}
});


function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

function removeAddClass(el, className){
	removeClass(el, className)
	  setTimeout(function(){
	  	addClass(el, className);
	  }, 1)

}
