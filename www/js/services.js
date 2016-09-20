angular.module('starter.services', [])

.factory('Tips', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tips = [{
    id: 0,
    area: 1,
    badgeClass : 'bg-balanced',
    badgeIconClass : 'ion-information-circled',
    titulo: 'Lorem ipsum dolor sit amet',
    descripcion: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seaest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua, ugo consetetur Lorem Ipsum.',
    imagen: 'img/1.png'
  }, {
    id: 1,
    area: 1,
    badgeClass : 'bg-balanced',
    badgeIconClass : 'ion-information-circled',
    titulo: 'Lorem ipsum dolor sit amet',
    descripcion: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seaest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua, ugo consetetur Lorem Ipsum.',
    imagen: 'img/2.png'
  }, {
    id: 2,
    area: 1,
    badgeClass : 'bg-balanced',
    badgeIconClass : 'ion-information-circled',
    titulo: 'Lorem ipsum dolor sit amet',
    descripcion: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seaest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua, ugo consetetur Lorem Ipsum.',
    imagen: 'img/3.png'
  }, {
    id: 3,
    area: 1,
    badgeClass : 'bg-balanced',
    badgeIconClass : 'ion-information-circled',
    titulo: 'Lorem ipsum dolor sit amet',
    descripcion: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seaest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua, ugo consetetur Lorem Ipsum.',
    imagen: 'img/4.png'
  }, {
    id: 4,
    area: 1,
    badgeClass : 'bg-balanced',
    badgeIconClass : 'ion-information-circled',
    titulo: 'Lorem ipsum dolor sit amet',
    descripcion: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seaest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua, ugo consetetur Lorem Ipsum.',
    imagen: 'img/1.png'
  }
  , {
    id: 5,
    area: 1,
    badgeClass : 'bg-balanced',
    badgeIconClass : 'ion-information-circled',
    titulo: 'Lorem ipsum dolor sit amet',
    descripcion: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seaest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua, ugo consetetur Lorem Ipsum.',
    imagen: 'img/2.png'
  }
  , {
    id: 6,
    area: 1,
    badgeClass : 'bg-balanced',
    badgeIconClass : 'ion-information-circled',
    titulo: 'Lorem ipsum dolor sit amet',
    descripcion: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seaest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua, ugo consetetur Lorem Ipsum.',
    imagen: 'img/1.png'
  }
  , {
    id: 7,
    area: 1,
    badgeClass : 'bg-balanced',
    badgeIconClass : 'ion-information-circled',
    titulo: 'Lorem ipsum dolor sit amet',
    descripcion: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seaest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua, ugo consetetur Lorem Ipsum.',
    imagen: 'img/4.png'
  }
  , {
    id: 8,
    area: 1,
    badgeClass : 'bg-balanced',
    badgeIconClass : 'ion-information-circled',
    titulo: 'Lorem ipsum dolor sit amet',
    descripcion: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seaest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua, ugo consetetur Lorem Ipsum.',
    imagen: 'img/3.png'
  }];

  return {
    all: function() {
      return tips;
    },
    remove: function(tip) {
      tips.splice(tips.indexOf(tip), 1);
    },
    get: function(tipId) {
      for (var i = 0; i < tips.length; i++) {
        if (tips[i].id === parseInt(tipId)) {
          return tips[i];
        }
      }
      return null;
    }
  };
});
