angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $http) {

      $scope.theFile = [];

      $scope.handleFiles = function(files) {
        alert(typeof(files));
        alert(files);
      // Check for the various File API support.
      if (window.FileReader) {
          // FileReader are supported.
          // $scope.getAsText(files[0]);
          $scope.getAsText(files[0]);
      } else {
          alert('FileReader are not supported in this browser.');
      }
    };

    $scope.getAsText = function(fileToRead) {
      var reader = new FileReader();
      // Read file into memory as UTF-8
      reader.readAsText(fileToRead);
      // Handle errors load
      reader.onload = $scope.loadHandler;
      reader.onerror = $scope.errorHandler;
    };

    $scope.loadHandler = function(event) {
      var csv = event.target.result;
      processData(csv);
    };

    $scope.processData = function(csv) {
        var allTextLines = csv.split(/\r\n|\n/);
        var lines = [];
        for (var i=0; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(';');
                var tarr = [];
                for (var j=0; j<data.length; j++) {
                    tarr.push(data[j]);
                }
                lines.push(tarr);
        }
      console.log(lines);
    };

    $scope.errorHandler = function(evt) {
      if(evt.target.error.name == "NotReadableError") {
          alert("Cannot read file !");
      }
    }

    });


