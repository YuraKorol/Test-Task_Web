$(window).scroll(function() {
    if ($(this).width() < 10000) {
        if ($(this).height() <= 768) {
            if ($(this).scrollTop() > 1800) {
                $('.photoshop_skill').css({
                    'width': '79%',
                    'transition': 'width 1s ease-in-out'
                });
                $('.html-css_skill').css({
                  'width': '90%',
                  'transition': 'width 1s ease-in-out'
                });
                $('.javascript_skill').css({
                  'width': '60%',
                  'transition': 'width 1s ease-in-out'
                });
                $('.wordpress_skill').css({
                  'width': '92%',
                  'transition': 'width 1s ease-in-out'
                });

            }
        }
    }
});

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 49.8288035, lng: 24.0095366},
          zoom: 16.09,
          styles: [
            {
              "featureType": "administrative",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "simplified"
                }
              ]
            },
            {
              "featureType": "landscape",
              "stylers": [
                {
                  "color": "#e9e5db"
                }
              ]
            },
            {
              "featureType": "landscape",
              "elementType": "labels.text",
              "stylers": [
                {
                  "color": "#56514c"
                },
                {
                  "visibility": "simplified"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "stylers": [
                {
                  "visibility": "simplified"
                }
              ]
            },
            {
              "featureType": "landscape.natural.terrain",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "color": "#a38980"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.school",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e8ddbb"
                }
              ]
            },
            {
              "featureType": "poi.school",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "simplified"
                }
              ]
            },
            {
              "featureType": "poi.school",
              "elementType": "labels.text",
              "stylers": [
                {
                  "color": "#56514c"
                },
                {
                  "weight": 0.5
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text",
              "stylers": [
                {
                  "color": "#56514c"
                },
                {
                  "visibility": "simplified"
                }
              ]
            }
          ]
        });
        $.getJSON("../Web/map-style.json", function(data) { map.setOptions({styles: data}); });
      }
