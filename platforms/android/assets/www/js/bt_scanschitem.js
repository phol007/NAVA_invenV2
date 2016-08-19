var exampleApp = angular.module('starter', ['ngCordova'])
exampleApp.controller('BarcodeCtrl', function($scope, $cordovaBarcodeScanner) {
    $scope.scanBarcode = function() {
          console.log("function ready!!");
          $cordovaBarcodeScanner.scan().then(function(imageData){
                 var page = "";
                 if(page == ""){
                   page = $.mobile.activePage.attr('id');
                 }
                 $(document).on("pageshow", function (e, data) {
                    page = $(this)[0].activeElement.id;
                 });

                 console.log(page);
                 console.log(imageData.text);

                }, function(error){
                  console.log(error);

                });
                return false;
      }
});

