(function() {

  angular
    .module('starter', ['ionic', 'ngCordova'])
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }

        if(window.StatusBar) {
          StatusBar.styleDefault();
        }

      });
    })
    .controller('HealthKitController', function(
      $ionicPlatform,
      $ionicPopup
    ) {
      var vm = this;

      $cordovaHealthKit
        .isAvailable()
        .then(
          function success(result) {
            console.log('HealthKit is available on device');
          },
          function error(result) {
            $ionicPopup
              .alert({
                title: 'HealthKit is unavailable on your device'
              })
              .then(function() {
                console.log('HealthKit is unavailable on device');
              })
          });

    });

})();
