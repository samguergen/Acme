angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $http) {

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
        console.log(' arrdata is ', Array.isArray(arrData));
        $scope.arrayData = arrData;
        $scope.stringData = arrData.toString();
        return ($scope.arrayData);
    };


    $scope.valState = function(){

    };

    $scope.valZip = function(){

    };

    $scope.valAge = function(){

    };

    $scope.valEmail = function(){

    };

    $scope.valSumZip = function(){

    };

    $scope.valDotNet = function(){

    };

    $scope.valSameAsNext = function(){

    };

    });


