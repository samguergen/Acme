angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $http) {

      $scope.theFile = [];

    //   $http({
    //   method: 'GET',
    //   url: "./data/index-essais-215.csv",
    //   transformResponse: function(issuelist) {
    //     // Transform CSV file into a JSON object
    //     var json = $.csv.toObjects(issuelist);
    //     return json;
    //   },
    //   cache: true,
    // })
    // .success(function(issuelist, status) {
    //     $scope.issuelist = issuelist;
    // })
    // .error(function(data, status) {
    //   $scope.issuelist = issuelist || "Request failed";
    // });

    // $scope.orderProp = 'model';

    //   $scope.handleFiles = function(files) {
    //     alert(typeof(files));
    //     alert(files);
    //   // Check for the various File API support.
    //   if (window.FileReader) {
    //       // FileReader are supported.
    //       // $scope.getAsText(files[0]);
    //       $scope.getAsText(files);
    //   } else {
    //       alert('FileReader are not supported in this browser.');
    //   }
    // };

    // $scope.getAsText = function(fileToRead) {
    //   reader = new FileReader();
    //   // Read file into memory as UTF-8
    //   reader.readAsText(fileToRead);
    //   // Handle errors load
    //   reader.onload = $scope.loadHandler;
    //   reader.onerror = $scope.errorHandler;
    // };

    // $scope.loadHandler = function(event) {
    //   var csv = event.target.result;
    //   $scope.processData(csv);
    // };

    // $scope.processData = function(csv) {
    //     var allTextLines = csv.split(/\r\n|\n/);
    //     var lines = [];
    //     for (var i=0; i<allTextLines.length; i++) {
    //         var data = allTextLines[i].split(';');
    //             var tarr = [];
    //             for (var j=0; j<data.length; j++) {
    //                 tarr.push(data[j]);
    //             }
    //             lines.push(tarr);
    //     }
    //   console.log(lines);
    // };

    // $scope.errorHandler = function(evt) {
    //   if(evt.target.error.name == "NotReadableError") {
    //       alert("Cannot read file !");
    //   }
    // }


    function readfichier(e) {
  if(window.FileReader) {
    var file  = e.target.files[0];
    var reader = new FileReader();
    if (file && file.type.match('image.*')) {
      reader.readAsDataURL(file);
    } else {
      img.css('display', 'none');
      img.attr('src', '');
    }
    reader.onloadend = function (e) {
      img.attr('src', reader.result);
      img.css('display', 'block');
    }
  }
}

    });


