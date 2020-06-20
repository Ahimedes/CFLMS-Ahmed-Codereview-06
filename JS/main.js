var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = []; //create arrays for later use  
var arr2 = [];
var Locate = /** @class */ (function () {
    function Locate(City, Zipcode, Address, teaser) {
        this.City = City;
        this.Zipcode = Zipcode;
        this.Address = Address;
        this.teaser = teaser;
    }
    Locate.prototype.display = function () {
        return ""; //empty string where the actual display function is going to be added
    };
    return Locate;
}());
var Museum = /** @class */ (function (_super) {
    __extends(Museum, _super);
    function Museum(title, City, Zipcode, Address, teaser, entryfee, telephonenumber, type, webaddress) {
        var _this = _super.call(this, City, Zipcode, Address, teaser) || this;
        _this.title = title;
        _this.entryfee = entryfee;
        _this.telephonenumber = telephonenumber;
        _this.type = type;
        _this.webaddress = webaddress;
        return _this;
    }
    Museum.prototype.display = function () {
        return "\n        " + _super.prototype.display.call(this) + "\n\t\t<div class=\"col-lg-3 col-md-6 col-sm-12\">\n  \t\t<div>\n      \t<img style=\"width:22vw\" src=\"" + this.teaser + "\">\n    \t</a>\n    \t<hr>\n  \t\t</div>\n  \t\t<div class=\"col-lg-12 col-md-1 col-sm-12\">\n    \t<h4>" + this.title + "</h4>\n    \t<p><b>City:</b> " + this.City + "</p>\n    \t<p><b>ZIP-Code:</b> " + this.Zipcode + "</p>\n        <p><b>Address:</b> <br>" + this.Address + "</p>\n        <p><b>Fee:</b> " + this.entryfee + "</p>\n    \t<p><b>Tel.:</b>" + this.telephonenumber + "</p>\n    \t<p><b>Exhibit: </b>" + this.type + "</p>\n    \t<p><b>Website: </b><a href=\"" + this.webaddress + "\"$</a>" + this.title + "</p>\n    \t<hr>\n  \t\t</div>\n\t\t</div>\n        ";
    };
    return Museum;
}(Locate));
var Exhibition = /** @class */ (function (_super) {
    __extends(Exhibition, _super);
    function Exhibition(title, City, Zipcode, Address, teaser, entryfee, eventdate, eventtime) {
        var _this = _super.call(this, City, Zipcode, Address, teaser) || this;
        _this.title = title;
        _this.entryfee = entryfee;
        _this.eventdate = eventdate;
        _this.eventtime = eventtime;
        return _this;
    }
    Exhibition.prototype.display = function () {
        return "\n        " + _super.prototype.display.call(this) + "\n\t\t<div class=\"col-lg-3 col-md-6 col-sm-12\">\n  \t\t<div>\n      \t<img style=\"width:22vw\" src=\"" + this.teaser + "\">\n    \t</a>\n    \t<hr>\n  \t\t</div>\n  \t\t<div class=\"col-lg-12 col-md-1 col-sm-12\">\n    \t<h4 class=\"\">" + this.title + "</h4>\n    \t<p><b>City:</b> " + this.City + "</p>\n    \t<p><b>ZIP-Code:</b> " + this.Zipcode + "</p>\n        <p><b>Address:</b> <br>" + this.Address + "</p>\n        <p><b>Fee:</b> " + this.entryfee + "</p>\n    \t<p><b>Date: </b>" + this.eventdate + "</p>\n    \t<p><b>Time: </b>" + this.eventtime + "</p>\n    \t<hr>\n  \t\t</div>\n\t\t</div>\n        ";
    };
    return Exhibition;
}(Locate));
//put new objects in the two existing arrays
arr[0] = new Museum("Bestattungsmuseum", "Vienna", 1110, "Simmeringer Hauptstraße 234", "img/bestattung.jpg", "6€", 13917037, "Funeral", "https://www.bestattung.at");
arr[1] = new Museum("Brennpunkt", "Vienna", 1120, "Malfattigasse 4", "img/brennpunkt.jpg", "5€", 1616238, "Curiosities", "https://www.wien.gv.at/english/culture/museums/brennpunkt/museum.html");
arr[2] = new Museum("Foltermuseum", "Vienna", 1060, "Fritz-Grünbaum-Platz 1", "img/foltermuseum.jpg", "6€", 1616230, "Torture", "https://www.foltermuseum.at");
arr2[0] = new Exhibition("The third man tour - Sewer tour", "Vienna", 1010, "Karlsplatz-Girardipark", "img/thirdman.jpg", "10€", "THU–SUN", "Every full hour from 10am–8pm");
arr2[1] = new Exhibition("Hotrod daylight tour", "Vienna", 1010, "Judengasse 4", "img/hotrod.jpg", "99€ incl. helmet, walkie talkie and guide", "Daily", "Every two hours from 10am-6pm");
arr2[2] = new Exhibition("Vienna's ugly tour", "Vienna", 1020, "Obere Augarten Strasse 1", "img/uglytour.jpg", "No information", "11.06.2020", "10am-1pm");
//for-loop in order to display all data
function displayrestaurants() {
    for (var i in arr) {
        document.getElementById("museum").innerHTML += arr[i].display();
    }
}
function displaytours() {
    for (var j in arr2) {
        document.getElementById("event").innerHTML += arr2[j].display();
    }
}
//add event listener, so that the functions are executed, once the page is loaded, otherwise nothing will be displayed
document.addEventListener("DOMContentLoaded", function () {
    displayrestaurants();
    displaytours();
});
