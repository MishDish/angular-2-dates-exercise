System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var GreetingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GreetingComponent = (function () {
                function GreetingComponent() {
                    this.date = new Date(new Date().setHours(0, 0, 0, 0));
                    this.birth = {
                        Nikola: new Date('4/2/2016'),
                        Secko: new Date('4/5/2016'),
                        Kiko: new Date('4/6/2016'),
                        George: new Date('4/9/2016'),
                        Peter: new Date('4/12/2016'),
                        Stephan: new Date('4/25/2016')
                    };
                }
                GreetingComponent.prototype.keys = function () {
                    return Object.keys(this.birth);
                };
                GreetingComponent.prototype.week = function () {
                    var today = new Date();
                    var todayDayNumb = today.getDay();
                    // numb of days to Monday 
                    var leftDays = todayDayNumb - 1;
                    //milliseconds of one day = 86400000
                    var Monday = new Date(today - leftDays * 86400000);
                    var endDate = new Date(Monday);
                    var Sunday = new Date(endDate.setDate(endDate.getDate() + 6));
                    return [Monday, Sunday];
                };
                GreetingComponent = __decorate([
                    core_1.Component({
                        selector: 'birthday',
                        template: "\n        <a name=anchor></a>\n        <h2 class=\"heading\"> Birthday Greetings </h2>\n       \n        <ul>\n        <div *ngFor=\"#name of keys()\">\n          <li *ngIf=\" birth[name] > week()[0] &&  birth[name] < week()[1]\">\n        \n            <a href=\"#anchor\" *ngIf=\"date.getTime() !== birth[name].getTime()\" >{{name}}</a>\n            \n            <span *ngIf=\"date.getTime() === birth[name].getTime()\">{{name}}</span>\n            \n            <span class=\"birthday\">{{ birth[name] }}</span>\n            \n            <span class=\"greeting\" *ngIf=\"date.getTime() === birth[name].getTime()\">Happy birthday !!</span>\n          \n          </li> \n         \n         </div>     \n        </ul>  \n    \n    ",
                        styles: ["       \n       .birthday {\n           padding-left:15px;\n       }\n       .greeting{\n           color:red;\n           font-size:16px;\n       }\n    \n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GreetingComponent);
                return GreetingComponent;
            }());
            exports_1("GreetingComponent", GreetingComponent);
        }
    }
});
//# sourceMappingURL=greeting.component.js.map