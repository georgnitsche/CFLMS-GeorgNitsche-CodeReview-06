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
var events = [];
var sightsArray = [];
var restaurantsArray = [];
var loc = /** @class */ (function () {
    function loc(city, zipcode) {
        this.city = "";
        this.zipcode = "";
        this.city = city;
        this.zipcode = zipcode;
    }
    loc.prototype.showInfo = function () {
        return "The City is " + this.city + ", Zipcode is " + this.zipcode + ".";
    };
    return loc;
}());
var loc1 = new loc("Vienna", "1010");
var loc2 = new loc("Vienna", "1020");
/*function showloc1(){
    document.getElementById("properties").innerHTML= loc1.showInfo();
}
function showloc2() {
document.getElementById("properties").innerHTML= loc2.showInfo();
}
*/
var Sights = /** @class */ (function (_super) {
    __extends(Sights, _super);
    /*type; km; seats; fuel;*/
    function Sights(city, zipcode, address, image) {
        var _this = _super.call(this, city, zipcode) || this;
        _this.address = address;
        _this.image = image;
        sightsArray.push(_this);
        console.table(sightsArray);
        return _this;
    }
    Sights.prototype.showInfo = function () {
        return _super.prototype.showInfo.call(this) + " It's a " + this.address + " which has " + this.image + ", has " + this.zipcode + " and fueled with " + this.city + ".<br>";
    };
    return Sights;
}(loc));
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    /*type; km; seats; fuel;*/
    function Restaurants(city, zipcode, address, image, type, phone) {
        var _this = _super.call(this, city, zipcode, address, image) || this;
        _this.type = type;
        _this.phone = phone;
        restaurantsArray.push(_this);
        console.table(restaurantsArray);
        return _this;
    }
    Restaurants.prototype.showInfo = function () {
        return _super.prototype.showInfo.call(this) + " It's a " + this.address + " which has " + this.image + ", has " + this.zipcode + " and fueled with " + this.city + ".<br>";
    };
    return Restaurants;
}(Sights));
var sights1 = new Sights("Vienna", "1020", "Riesenradplatz 1", "https://www.wien.info/media/images/41220-stephansdom-haas-haus-panorama-1to1.jpeg");
var sights2 = new Sights("Vienna", "1010", "Stephansplatz 3", "https://www.wien.info/media/images/41220-stephansdom-haas-haus-panorama-1to1.jpeg");
for (var i = 0; i < sightsArray.length; i++) {
    document.getElementById("properties").innerHTML += '<button type="button" onclick="sightsinfo(' + i + ')">ShowInfo</button><br />';
}
var restaurants1 = new Restaurants("Vienna", "1020", "Schachgasse 2", "https://www.wien.info/media/images/41220-stephansdom-haas-haus-panorama-1to1.jpeg", "Asian", "0699909090");
var restaurants2 = new Restaurants("Vienna", "1010", "Friedrich Müller Weg 3", "https://www.wien.info/media/images/41220-stephansdom-haas-haus-panorama-1to1.jpeg", "Indian", "0664606060");
console.table(restaurantsArray);
for (var i = 0; i < restaurantsArray.length; i++) {
    document.getElementById("properties").innerHTML += '<button type="button" onclick="restaurantsinfo(' + i + ')">ShowRestaurant</button><br />';
}
function sightsinfo(x) {
    var y = sightsArray[x];
    var city = y.city;
    var zipcode = y.zipcode;
    var address = y.address;
    var image = y.image;
    document.getElementById("displayproperties").innerHTML += 'Info is' + city + zipcode + address + '<img src=' + image + '>';
}
function restaurantsinfo(x) {
    var city = restaurantsArray[x].city;
    var zipcode = restaurantsArray[x].zipcode;
    var address = restaurantsArray[x].address;
    var image = restaurantsArray[x].image;
    var type = restaurantsArray[x].type;
    var phone = restaurantsArray[x].phone;
    document.getElementById("displayproperties").innerHTML += 'Info is' + city + zipcode + type + address + phone + '<img src=' + image + '>';
}
// ab hier der Restaurants-Array-Code
