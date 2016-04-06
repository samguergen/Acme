angular.module('myApp')
    .controller('HomeCtrl', function ($scope) {
        $scope.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];

        $scope.csvFile = "";

        $scope.orders = [
        { id: 1,
          name: "Little Sim"
        },
        {
          id: 2,
          name: "Ashley DummyGirl"
        }
        ];

        function csvToArray(stringData, stringDelim) {
          stringDelim = (stringDelim || ",");
          var objPattern = new RegExp((
          "(\\" + stringDelim + "|\\r?\\n|\\r|^)" +
          "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
          "([^\"\\" + stringDelim + "\\r\\n]*))"), "gi");
          var arr = [[]];
          var arrMatches = null;
          while (arrMatches = objPattern.exec(stringData)) {
              var stringMatchDelim = arrMatches[1];
              if (stringMatchDelim.length && (stringMatchDelim != stringDelim)) {
                  arr.push([]);
              }
              if (arrMatches[2]) {
                  var stringMatchVal = arrMatches[2].replace(
                  new RegExp("\"\"", "g"), "\"");
              } else {
                  var stringMatchVal = arrMatches[3];
              }
              arr[arr.length - 1].push(stringMatchVal);
          }
          console.log(arr);
          return (arr);
        }

        function arrayToJson(csv) {
          var arr = csvToArray(csv);
          var objArray = [];
          for (var i = 1; i < arr.length; i++) {
              objArray[i - 1] = {};
              for (var k = 0; k < arr[0].length && k < arr[i].length; k++) {
                  var key = arr[0][k];
                  objArray[i - 1][key] = arr[i][k]
              }
          }
          var json = JSON.stringify(objArray);
          var str = json.replace(/},/g, "},\r\n");
          return str;
        }


    });