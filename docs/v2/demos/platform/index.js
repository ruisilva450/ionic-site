var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic/ionic');
var ApiDemoApp = (function () {
    function ApiDemoApp(platform) {
        this.isIos = platform.is('ios');
        this.isAndroid = platform.is('android');
        this.userAgent = platform.userAgent();
    }
    ApiDemoApp = __decorate([
        ionic_1.App({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.Platform !== 'undefined' && ionic_1.Platform) === 'function' && _a) || Object])
    ], ApiDemoApp);
    return ApiDemoApp;
    var _a;
})();