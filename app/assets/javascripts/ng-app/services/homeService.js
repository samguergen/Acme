angular.module('myApp')
.service('Validations', function () {

    var arrayData = [];
    var passingOrders = [];
    var invalidOrders = [];
    var autoPassingOrders = [];
    this.validOrders = [];
    this.nonValidOrders = [];
    this.allOrders = [];

    this.validOrdersJson = [];
    this.invalidOrdersJson = [];
    this.allOrdersJson = [];

    this.allOrderz = [];
    this.validOrderz = [];
    this.invalidOrderz = [];


    //init csvIndex to contain index for all data columns.
    var csvIndex = {
      'id': 0,
      'name': 0,
      'email': 0,
      'birthday': 0,
      'state': 0,
      'zipcode': 0,
    };

    //set restrictions atop so easily modifiable
    var restrict = {
      'state':'NY',
      'email': '.net'}
    var stateRestrict = ['NJ','CT','PA','MA','IL','ID','OR'];
    var currentYear = new Date().getFullYear();
    var minBirthYear = currentYear - 21;
    var maxSumZip = 20;

//init order obj with required structure
    var orderObj = {
     "order_id": 2075,
     "name": "Vinton Cerf",
     "state": "NJ",
     "zipcode": 08999,
     "birthday": "June 23, 1943",
     "valid": false,
    };

    this.triggerValidations = function(csv) {
      return this.CSVToArray(csv);
    }


    //parses CSV file as array
    this.CSVToArray = function(strData, strDelimiter) {
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
      arrayData = arrData;

      var header = arrData.shift();
      this.locateColumns(header, arrData);
    };

    //dynamically pushes to csvIndex, guarantees that data columns will be probably captured even though order may be different or new columns will be added.
    this.locateColumns = function(head, body) {
      var headArray = head.toString().split("|");
      var bodyArray = body.toString().split("|");
      for (var i in headArray) {
        for (var y in csvIndex) {
          if (y == headArray[i]) { csvIndex[y] = i;}
        }
      };
      return (this.valState(body));
    };


    // 1) No wine can ship to NJ, CT, PA, MA, IL, ID and OR
    this.valState = function(arr) {
      var passing = [];
      var stateIndex = csvIndex['state'];
      for (var i in arr) {
        var row = arr[i].toString();
        var rowArray = row.split("|");
        var state = rowArray[parseInt(stateIndex)];
        if (stateRestrict.indexOf(state) < 0){
          passing.push(row);
        }
        else {
          invalidOrders.push(row);
        };
      };
      return this.valZip(passing);
    };


    // 2) Valid zip codes must be 5 or 9 digits
    this.valZip = function(arr) {
      var passing2 = [];
      var zipIndex = csvIndex['zipcode'];
      for (var i in arr) {
        var row = arr[i].toString();
        var rowArray = row.split("|");
        if (rowArray[zipIndex] && ((rowArray[zipIndex].length == 5) || (rowArray[zipIndex].length == 9)) ) {
           passing2.push(rowArray);
        }
        else {
          invalidOrders.push(rowArray);
        };
      };
      return this.valAge(passing2);
    };


    // 3) Everyone ordering must be 21 or older
    this.valAge = function(arr) {
      var passing3 = [];
      var birthdayIndex = csvIndex['birthday'];
      var yearIndex = parseInt(birthdayIndex) + 1;
      for (var i in arr) {
        var row = arr[i].toString();
        var rowArray = row.split(",");
        if (rowArray[yearIndex] < minBirthYear ) {
           passing3.push(rowArray);
        }
        else {
          invalidOrders.push(rowArray);
        };
      };
      return this.valEmail(passing3);
    };

    // 4) Email address must be valid
    this.valEmail = function(arr) {
      var passing4 = [];
      var emailIndex = csvIndex['email'];
      for (var i in arr) {
        var row = arr[i].toString();
        var rowArray = row.split(",");
        var email = rowArray[parseInt(emailIndex)];
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
           passing4.push(rowArray);
        }
        else {
          invalidOrders.push(rowArray);
        };
      };
      return this.valSumZip(passing4);
    };

    // 5) The sum of digits in a zip code may not exceed 20 ("90210": 9+0+2+1+0 = 12)
    this.valSumZip = function(arr) {
      var passing5 = [];
      var zipIndex = csvIndex['zipcode'];
      for (var i in arr) {
        var row = arr[i].toString();
        var rowArray = row.split(",");
        var zip = rowArray[parseInt(zipIndex)];
        var zipString = zip.toString();
        var sum = 0;
        for (var i = 0; i < zipString.length; i++) {
          sum += parseInt(zipString.charAt(i), 10);
        };
        if (sum <= maxSumZip) {
            passing5.push(rowArray);
        }
        else {
          invalidOrders.push(rowArray);
        };
      };
      return this.valRestrict(passing5);
    };

    // 6) Customers from NY may not have .net email addresses
    this.valRestrict = function(arr) {
      var passing6 = [];
      var stateIndex = csvIndex['state'];
      var emailIndex = csvIndex['email'];
      for (var i in arr) {
        var row = arr[i].toString();
        var rowArray = row.split(",");
        var state = rowArray[parseInt(stateIndex)];
        var email = rowArray[parseInt(emailIndex)];
        if (!(state == restrict['state']) && !(email.toString().includes(restrict['email']))) {
            passing6.push(rowArray);
        }
        else {
          invalidOrders.push(rowArray);
        };
      };
      passingOrders = passing6;
      return this.toJson(passing6);
    };


    // 7) If the state and zip code of the following record is the same as the current record, it automatically passes.
    this.sameAsNext = function(arr) {
      var passingAuto = [];
      var stateIndex = csvIndex['state'];
      var zipIndex = csvIndex['zipcode'];
      for (var i in arr) {
        var row = arr[i].toString();
        var rowArray = row.split("|");
        var state = rowArray[parseInt(stateIndex)];
        var nextState = rowArray[parseInt(stateIndex) + 1];
        var zip = rowArray[parseInt(zipIndex)];
        var nextZip = rowArray[parseInt(zipIndex) + 1];
        if ((state == nextState) && (zip == nextZip)) {
           passingAuto.push(rowArray);
        };
      };
    };

    //converts passing orders to JSON
    this.toJson = function(arr) {
      this.buildOrderObj(arr, invalidOrders);
    }

    //actually builds the order obj with required structure, to prepare for json conversion
    this.buildOrderObj = function(orders, invOrders) {
      var idIndex = csvIndex['id'];
      var nameIndex = csvIndex['name'];
      var emailIndex = csvIndex['email'];
      var birthdayIndex = csvIndex['birthday'];
      var stateIndex = csvIndex['state'];
      var zipcodeIndex = csvIndex['zipcode'];

      //checks if any valid orders, pushes valid: true attr
      if (orders.length > 0 ) {
        for (var i in orders) {
          var rowArray = orders[i];
          var bdayFullAgain = orders[i][birthdayIndex]+ "," + orders[i][parseInt(birthdayIndex) + 1];
          var orderObj = {
           "order_id": parseInt(orders[i][idIndex]),
           "name": orders[i][nameIndex],
           "state": orders[i][stateIndex],
           "zipcode": parseInt(orders[i][zipcodeIndex]),
           "birthday": bdayFullAgain,
           "valid": true,
        };
        this.validOrders.push(orderObj);
       };
      }

      //checks if any invalid orders, pushes valid: false attr
      if (invOrders.length > 0 ) {

        for (var i in invOrders) {
          var row = invOrders[i].toString();
          var rowArray = row.split("|");
          var orderObj = {
         "order_id": parseInt(rowArray[idIndex]),
         "name": rowArray[nameIndex],
         "state": rowArray[stateIndex],
         "zipcode": parseInt(rowArray[zipcodeIndex]),
         "birthday": rowArray[birthdayIndex],
         "valid": false,
          };
        //double checks for any badly structured objs
        if (typeof(orderObj['name']) == 'undefined' ) {
          continue
        };
        this.nonValidOrders.push(orderObj);
      };

      //concats valid and invalid orders to store all orders with good structure.
      this.allOrders = this.validOrders.concat(this.nonValidOrders);

      for (var i in this.allOrders) {
        this.allOrdersJson.push(angular.toJson(this.allOrders[i])) }
      for (var i in this.validOrders) {
        this.validOrdersJson.push(angular.toJson(this.validOrders[i])) }
      for (var i in this.nonValidOrders) {
        this.invalidOrdersJson.push(angular.toJson(this.nonValidOrders[i])) }

      for (var i in this.allOrders) {
        this.allOrderz.push(this.allOrders[i]) }
      for (var i in this.validOrders) {
        this.validOrderz.push(this.validOrders[i]) }
      for (var i in this.nonValidOrders) {
        this.invalidOrderz.push(this.nonValidOrders[i]) }
    };

  };


});