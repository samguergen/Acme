angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $http) {

      $scope.arrayData = [];

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
        console.log('the string of arrData is ', arrData.toString());
        // console.log(' arrdata is ', Array.isArray(arrData));
        $scope.arrayData = arrData;
        $scope.stringData = arrData.toString();
        return ($scope.test($scope.arrayData));
    };

    $scope.test = function(arr) {
      $scope.valState(arr);
      // for (var i in arr) {
      //   console.log('each i is');
      //   console.log(arr[i]);
      // }
      // console.log('length of arrayData is ');
      // console.log($scope.arrayData.length);
    };

// 1) No wine can ship to New Jersey, Connecticut, Pennsylvania, Massachusetts,
// Illinois, Idaho or Oregon
    $scope.valState = function(arr){
      // row is an array that contains 2 obj: row[0] contains cust info, row[1] contains year
      for (var i in arr) {
        var row = arr[i];
        // if ((row.includes('New Jersey') || row.includes('Connecticut') || row.includes('Pennsylvania') || row.includes('Massachusetts') || row.includes('Illinois') || row.includes('Idaho') || row.includes('Oregon')) {
        if (row[0].indexOf('New Jersey')) {
          console.log('it does!!!');
          console.log(row[0]);
        }
        else {
          console.log('boooo');
        }
      };
    };

// 2) Valid zip codes must be 5 or 9 digits
    $scope.valZip = function(){

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


