angular.module('myApp')
    .controller('HomeCtrl', function ($scope, $http) {
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

        // var csvStr = {
        //   "Id","UserName"
        //   "1","Sam Smith"
        //   "2","Fred Frankly"
        //   "1","Zachary Zupers"
        // };

        // console.log('result of json conversion example is ');
        // console.log(arrayToJson(csvStr));

        // $scope.urlToString = function(csv) {
        //   console.log(csv);
          // return $http.get(csv).then(function(response){
          //  response.data});
        // }

        $scope.readCsv = function() {

        }

        $scope.openUrl = function(csvUrl) {
          console.log('inside open url func');
          var Items = $http.get(csvUrl).then(function(response){
          return csvToArray(response.data);
          });
          console.log(Items);
          $scope.stuff = Items;
          return Items;
        }

        $scope.csvToArray = function (stringData, stringDelim) {
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

        $scope.arrayToJson = function (csv) {
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
          console.log(str);
          return str;
        }

       $scope.MyFiles=[];

      $scope.handler=function(e,files){
          var reader=new FileReader();
          reader.onload=function(e){
              var string=reader.result;
              // var obj=$filter('csvToObj')(string);
              var obj = $scope.csvToObj(string);
              alert(obj);
          }
          reader.readAsText(files[0]);
      }


      $scope.csvToObj =  function(input){
          var rows=input.split('\n');
          var obj=[];
          angular.forEach(rows,function(val){
            var o=val.split(';');
            obj.push({
              designation:o[1],
              km:o[11]
            });
          });
          return obj;
        };

    });


