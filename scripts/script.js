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
var locations = /** @class */ (function () {
    function locations(name, city, zipcode, address, image, dates) {
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.image = image;
        this.dates = dates;
    }
    //------------HTML INPUT---------//
    locations.prototype.render = function () {
        return "\n        \n\t\t<div class=\"bg-secondary col-lg-3 col-md-6 col-sm-12\">\n  \t\t<div class=\"content\">\n  \t\t<hr>\n    \t<a href=\"#\">\n      \t<img class=\"d-none d-md-block\" src=\"" + this.image + "\">\n    \t</a>\n    \t<hr>\n  \t\t</div>\n  \t\t<div class=\"contetText col-lg-12 col-md-1 col-sm-12\">\n        <h4 class=\"contentTitle\">" + this.name + "</h4>\n        <p><b>City:</b> " + this.city + "</p>\n        <p><b>ZIP-Code:</b> " + this.zipcode + "</p>\n        <p><b>Address:</b> " + this.address + "</p>\n        <p><b>Create:</b> " + this.dates.toLocaleString("de-AT") + "</p>\n    \t  <hr>\n  \t\t</div>\n\t\t</div>\n\t\t";
    };
    return locations;
}());
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants(name, city, zipcode, address, image, telefon, art, website, dates) {
        var _this = _super.call(this, name, city, zipcode, address, image, dates) || this;
        _this.telefon = telefon;
        _this.art = art;
        _this.website = website;
        return _this;
    }
    restaurants.prototype.render = function () {
        return "\n\t\t<div class=\"bg-secondary col-lg-3 col-md-6 col-sm-12\">\n  \t\t<div class=\"content\">\n  \t\t<hr>\n    \t<a href=\"#\">\n      \t<img class=\"d-none d-md-block\" src=\"" + this.image + "\">\n    \t</a>\n    \t<hr>\n  \t\t</div>\n  \t\t<div class=\"contetText col-lg-12 col-md-1 col-sm-12\">\n        <h4 class=\"contentTitle\">" + this.name + "</h4>\n        <p><b>City:</b> " + this.city + "</p>\n        <p><b>ZIP-Code:</b> " + this.zipcode + "</p>\n        <p><b>Address:</b> " + this.address + "</p>\n        <hr>\n        <p><b>Telefon:</b> " + this.telefon + "</p>\n        <p><b>Type:</b> " + this.art + "</p>\n        <p><b>Web:</b> " + this.website + "</p>\n        <p><b>Create:</b> " + this.dates.toLocaleString("de-AT") + "</p>\n    \t  <hr>\n  \t\t</div>\n\t\t</div>\n\t\t";
    };
    return restaurants;
}(locations));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(name, city, zipcode, address, image, time, date, dates) {
        var _this = _super.call(this, name, city, zipcode, address, image, dates) || this;
        _this.time = time;
        _this.date = date;
        return _this;
    }
    events.prototype.render = function () {
        return "\n\t\t<div class=\"bg-secondary col-lg-3 col-md-6 col-sm-12\">\n  \t\t<div class=\"content\">\n  \t\t<hr>\n    \t<a href=\"#\">\n      \t<img class=\"d-none d-md-block\" src=\"" + this.image + "\">\n    \t</a>\n    \t<hr>\n  \t\t</div>\n  \t\t<div class=\"contetText col-lg-12 col-md-1 col-sm-12\">\n        <h4 class=\"contentTitle\">" + this.name + "</h4>\n        <p><b>City:</b> " + this.city + "</p>\n        <p><b>ZIP-Code:</b> " + this.zipcode + "</p>\n        <p><b>Address:</b> " + this.address + "</p>\n        <hr>\n        <p><b>Time:</b> " + this.time + "</p>\n        <p><b>Date:</b> " + this.date + "</p>\n        <p><b>Create:</b> " + this.dates.toLocaleString() + "</p>\n    \t  <hr>\n  \t\t</div>\n\t\t</div>\n\t\t";
    };
    return events;
}(locations));
var app = /** @class */ (function () {
    function app() {
    }
    // -------------FILTER---------------//
    app.prototype.filterRest = function (obj) {
        return obj instanceof restaurants;
    };
    app.prototype.filterLoca = function (obj) {
        return (obj instanceof locations &&
            obj instanceof restaurants === false &&
            obj instanceof events === false);
    };
    app.prototype.filterEven = function (obj) {
        return obj instanceof events;
    };
    app.prototype.sortByDate = function (a, b) {
        if (a.dates < b.dates)
            return 1;
        else if (a.dates > b.dates)
            return -1;
        else
            return 0;
    };
    app.prototype.render = function (data) {
        var _this = this;
        var list = ["Locations", "Restaurants", "Events"];
        document.querySelector("main").innerHTML = "";
        list.forEach(function (item) {
            var filteredList;
            if (item === "Locations") {
                filteredList = data.filter(_this.filterLoca);
            }
            else if (item === "Restaurants") {
                filteredList = data.filter(_this.filterRest);
            }
            else {
                filteredList = data.filter(_this.filterEven);
            }
            var text = "<div class=\"mainTitle col-12 bg-dark text-light m-2 h3 text-center\">" + item + "</div>";
            filteredList.forEach(function (filteredListItem) {
                text += filteredListItem.render();
            });
            document.querySelector("main").innerHTML += text;
        });
    };
    return app;
}());
//-----------DATA INPUT------------//
var data = [
    new locations("Dome Disco", "Wien im Zentrum", 1010, "Domstraße 16", "img/loca1.jpg", new Date(2008, 1, 2, 50, 45)),
    new locations("Nightlife", "Wiener Neustadt", 2700, "Granzer Straße 10", "img/loca2.jpg", new Date(2009, 1, 2, 40, 45)),
    new locations("Metalbar", "Bromberg", 2540, "Wiener Straße 2", "img/loca3.jpg", new Date(2010, 1, 2, 50, 25)),
    new locations("Brotherhood", "Rust am See", 2310, "der-lange-Weg 12", "img/loca4.jpg", new Date(2008, 1, 2, 40, 12)),
    new restaurants("Dome Wirt", "Wien", 1010, "Dome Weg 2", "img/rest4.jpg", "+43 645 56 56", "Tavern", "www.wirt1.at", new Date(2010, 1, 2, 30, 23)),
    new restaurants("Stagl", "Wiener Neustadt", 2900, "Grazerstraße 5", "img/rest2.png", "+43 235 23 34", "Chinese", "www.wirt2.at", new Date(2009, 1, 2, 20, 13)),
    new restaurants("Tahler", "Bromberg", 2700, "Wiener Weg 6", "img/rest3.jpg", "+43 646 45 45", "Tavern", "www.wirt3.at", new Date(2011, 1, 2, 60, 43)),
    new restaurants("City Stüberl", "Wiener Neustadt", 2350, "Wiener Straße 12", "img/rest4.jpg", "+43 34 23 64", "Coffee house", "www.wirt4.at", new Date(2017, 1, 2, 5, 29)),
    new events("Novarock", "Österreich", 2800, "Burgenland 1", "img/event1.jpg", "10:00:00", "28.09.2006", new Date(2015, 1, 2, 30)),
    new events("Rock am Ring", "Deutschland", 23562, "Kempten 2", "img/event2.jpg", "09:00:00", "23.10.2004", new Date(2014, 3, 9, 40)),
    new events("Wacken", "Deutschland", 28141, "Berlin 3", "img/event3.jpg", "08:00:00", "03.05.2003", new Date(2013, 4, 6, 25)),
    new events("Ozora", "Ungarn", 29811, "Sopron 4", "img/event4.jpg", "17:00:00", "06.06.2001", new Date(2012, 5, 2, 40)),
];
var instance = new app();
instance.render(data);
document.querySelector("#sort").addEventListener("click", function (event) {
    data.sort(instance.sortByDate);
    instance.render(data);
});
