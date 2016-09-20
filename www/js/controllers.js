/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();

})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
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

.controller('ConfigCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('GraficoDetailCtrl', function($scope,$stateParams) {
  $scope.graficoId = $stateParams.graficoId;
  $scope.labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],

  $scope.series = ['5th', '10th','25th','50th','75th','90th','95th','Juanito'];
  $scope.data = [
         [34.22,35.62,36.96,38.16,39.13,39.90,40.47,40.92,41.29,41.60,41.86,42.10,42.30,42.49,42.65,42.80,42.94,43.06,43.17,43.28,43.38,43.47,43.57,43.68,43.79,43.90,43.99,44.08,44.16,44.23,44.30,44.37,44.44,44.50,44.56,44.62],
         [34.61,36.03,37.38,38.60,39.58,40.35,40.94,41.39,41.76,42.08,42.35,42.58,42.79,42.98,43.14,43.29,43.43,43.56,43.67,43.78,43.88,43.97,44.07,44.18,44.29,44.40,44.50,44.59,44.67,44.74,44.81,44.88,44.95,45.01,45.07,45.13],
         [35.24,36.68,38.06,39.30,40.30,41.09,41.68,42.14,42.52,42.84,43.11,43.35,43.57,43.76,43.93,44.08,44.22,44.34,44.46,44.57,44.67,44.77,44.87,44.98,45.09,45.21,45.31,45.40,45.48,45.55,45.63,45.70,45.76,45.83,45.89,45.95],
         [35.90,37.37,38.78,40.04,41.06,41.86,42.47,42.93,43.32,43.64,43.92,44.17,44.39,44.58,44.75,44.91,45.05,45.18,45.30,45.41,45.51,45.61,45.72,45.83,45.94,46.06,46.16,46.25,46.33,46.41,46.48,46.55,46.62,46.69,46.75,46.81],
         [36.53,38.03,39.46,40.74,41.78,42.59,43.21,43.69,44.08,44.41,44.69,44.94,45.16,45.36,45.54,45.69,45.84,45.97,46.09,46.20,46.31,46.41,46.52,46.63,46.75,46.86,46.97,47.06,47.14,47.22,47.30,47.37,47.44,47.51,47.57,47.63],
         [37.07,38.59,40.04,41.34,42.40,43.22,43.85,44.33,44.73,45.07,45.35,45.61,45.83,46.03,46.21,46.37,46.52,46.65,46.77,46.89,46.99,47.10,47.20,47.32,47.44,47.56,47.66,47.76,47.84,47.92,48.00,48.07,48.14,48.21,48.28,48.34],
         [37.39,38.92,40.38,41.69,42.76,43.59,44.22,44.71,45.11,45.45,45.74,45.99,46.22,46.42,46.60,46.76,46.91,47.05,47.17,47.29,47.39,47.50,47.60,47.72,47.84,47.96,48.07,48.16,48.25,48.33,48.40,48.48,48.55,48.62,48.69,48.75],
         [35.20,37.17,38.18,40.04,41.06,41.86,42.47,43.93,44.32,43.64,44.92,45.17,44.39,44.58,45.75,45.91,45.05,45.18,45.80,45.41,45.81,45.61,45.82,45.83,45.94,46.86,46.16,46.85,46.33,46.41,46.88,46.55,46.62,48.69,48.75,48.81],

  ];





   //Globals
  $scope.myChartOptions = {
      type: 'line',
      datasetFill : false,
      bezierCurve : true,
      pointDot : false,
      // Boolean - Whether to animate the chart
      animation: true,

      // Number - Number of animation steps
      animationSteps: 10,

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
      scaleFontStyle: "small",

      // String - Scale label font colour
      scaleFontColor: "#666",

      // Boolean - whether or not the chart should be responsive and resize when the browser does.
      responsive: true,
      pan: {
                          enabled: true,
                          mode: 'y'
                      },
      // Boolean - Determines whether to draw tooltips on the canvas or not
      showTooltips: true,

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

  };
})


.controller('CalendarCtrl', function ($scope) {
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
        console.log("createRandomEvents");
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
                    title: 'Event - ' + i,
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
                    title: 'Medic - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    }

    $scope.calendar.eventSource = createRandomEvents();

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
		var TM = document.getElementsByClassName('tm');
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
})
.controller('FormEventoCtrl', function($scope) {

})

.controller('GraficosCtrl', function($scope) {

})

.controller('FichaCtrl', function($scope) {

})
;


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
