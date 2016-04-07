angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $http) {

      $scope.arrayData = [];
      $scope.passedState = [];

      $scope.csvIndex = {
        'id': 0,
        'name': 0,
        'email': 0,
        'birthday': 0,
        'state': 0,
        'zipcode': 0,
      };

      $scope.readCsv = function() {
        alert($scope.fileContent);
      }

      $scope.CSVToArray = function(strData, strDelimiter) {
        strDelimiter = (strDelimiter || ",");
        var objPattern = new RegExp((
        "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
        "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
        "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
        var arrData = [[]];
        var arrMatches = null;
        while (arrMatches = objPattern.exec(strData)) {
            var strMatchedDelimiter = arrMatches[1];
            if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
                arrData.push([]);
            }
            if (arrMatches[2]) {
                var strMatchedValue = arrMatches[2].replace(
                new RegExp("\"\"", "g"), "\"");
            } else {
                var strMatchedValue = arrMatches[3];
            }
            arrData[arrData.length - 1].push(strMatchedValue);
        }
        $scope.arrayData = arrData;



        var header = arrData.shift();
        $scope.locateHeader(header);

        // $scope.stringData = arrData.toString();
        // return ($scope.initValidations($scope.arrayData));
    };

    $scope.locateHeader = function(head) {
      var headString = head.toString();
      var headArray = headString.split("|");
      console.log('headArray is');
      console.log(headArray);
      for (var i in headArray) {
        // console.log(headArray[i]);
        for (var y in $scope.csvIndex) {
          console.log('head array', headArray[i]);
          console.log('csv index', y);
          if (y == headArray[i]) {
            console.log('matchin');
            // $scope.csvIndex[y] = i;
          }
        }
      }

    }

    $scope.initValidations = function(arr) {
      $scope.valState(arr);
    };

// 1) No wine can ship to New Jersey, Connecticut, Pennsylvania, Massachusetts,
// Illinois, Idaho or Oregon
    $scope.valState = function(arr){
      var passingOrders = [];
      // row is an array that contains 2 obj: row[0] contains cust info, row[1] contains year
      for (var i in arr) {
        var row = arr[i];
        if (row[0].indexOf('|NJ|') < 0 || row[0].indexOf('|CT|') < 0|| row[0].indexOf('|PA|') < 0 || row[0].indexOf('|MA|') < 0 || row[0].indexOf('|IL|') < 0 || row[0].indexOf('|ID|') < 0 || row[0].indexOf('|OR|') < 0  ) {
          console.log('it does!!!');
          passingOrders.push(row);
        }
      };

      console.log('array passing 1');
      for (var i in passingOrders) {
        console.log(passingOrders[i]);
      }

      return $scope.valZip(passingOrders);
    };

// 2) Valid zip codes must be 5 or 9 digits
    $scope.valZip = function(arr){

    };

// 2) Valid zip codes must be 5 or 9 digits
    $scope.valAge = function(){

    };

// 4) Email address must be valid
    $scope.valEmail = function(){

    };

// 5) The sum of digits in a zip code may not exceed 20 ("90210": 9+0+2+1+0 = 12)
    $scope.valSumZip = function(){

    };

// 6) Customers from NY may not have .net email addresses
    $scope.valDotNet = function(){

    };

// 7) If the state and zip code of the following record is the same as the
// current record, it automatically passes.
    $scope.valSameAsNext = function(){

    };

});


