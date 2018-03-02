"use strict";
var Bienvenue = /** @class */ (function () {
    function Bienvenue(message) {
        this.message = message;
    }
    Bienvenue.prototype.DisBienvenue = function () {
        return "Bonjour " + this.message;
    };
    return Bienvenue;
}());
var b = new Bienvenue("TypeScript");
console.log(b.DisBienvenue());
