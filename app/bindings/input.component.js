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
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.submitted = new core_1.EventEmitter();
                }
                InputComponent.prototype.onKeyUp = function () {
                    if (this.myself.name != '' && this.myself.age != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                InputComponent.prototype.onSubmit = function () {
                    this.submitted.emit(this.myself);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n     <h1>Your details, please </h1>\n     <div>\n        <label for=\"name\">Your Name</label>\n        <input type=\"text\" id=\"name\" [(ngModel)] = \"myself.name\" (keyup) = \"onKeyUp()\">\n      </div>\n      <div>\n         <label for=\"age\">Your Age</label>\n         <input type=\"text\" id=\"age\" [(ngModel)] = \"myself.age\" (keyup) = \"onKeyUp()\">\n      </div>\n      <br>\n      <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n      <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n      <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n      ",
                        inputs: ['myself'],
                        outputs: ['submitted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFBQTtvQkFDSSxXQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDN0IsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFDaEIsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBK0IsQ0FBQTtnQkFrQi9ELENBQUM7Z0JBakJHLGdDQUFPLEdBQVA7b0JBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7d0JBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN6QixDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUMxQixDQUFDO29CQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDeEIsQ0FBQztvQkFBQSxJQUFJLENBQUEsQ0FBQzt3QkFDRixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDekIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELGlDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUNwQyxDQUFDO2dCQTFDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUMsMGtCQWNOO3dCQUNILE1BQU0sRUFBQyxDQUFDLFFBQVEsQ0FBQzt3QkFDakIsT0FBTyxFQUFDLENBQUMsV0FBVyxDQUFDO3FCQUN4QixDQUFDOztrQ0FBQTtnQkF3QkYscUJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELDJDQXNCQyxDQUFBIiwiZmlsZSI6ImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWlucHV0JyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgIDxoMT5Zb3VyIGRldGFpbHMsIHBsZWFzZSA8L2gxPlxuICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPllvdXIgTmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIFsobmdNb2RlbCldID0gXCJteXNlbGYubmFtZVwiIChrZXl1cCkgPSBcIm9uS2V5VXAoKVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICAgPGxhYmVsIGZvcj1cImFnZVwiPllvdXIgQWdlPC9sYWJlbD5cbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWdlXCIgWyhuZ01vZGVsKV0gPSBcIm15c2VsZi5hZ2VcIiAoa2V5dXApID0gXCJvbktleVVwKClcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJyPlxuICAgICAgPGRpdj5GaWxsZWQgb3V0OiB7e2lzRmlsbGVkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbiAgICAgIDxkaXY+VmFsaWQ6IHt7aXNWYWxpZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvblN1Ym1pdCgpXCI+U3VibWl0PC9idXR0b24+XG4gICAgICBgLFxuICAgIGlucHV0czpbJ215c2VsZiddLFxuICAgIG91dHB1dHM6WydzdWJtaXR0ZWQnXVxufSlcblxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcbiAgICBteXNlbGYgPSB7bmFtZTogJycsIGFnZTogJyd9O1xuICAgIGlzRmlsbGVkID0gZmFsc2U7XG4gICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9PigpXG4gICAgb25LZXlVcCgpe1xuICAgICAgICBpZih0aGlzLm15c2VsZi5uYW1lICE9ICcnICYmIHRoaXMubXlzZWxmLmFnZSAhPSAnJyl7XG4gICAgICAgICAgICB0aGlzLmlzRmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmlzRmlsbGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLm15c2VsZi5uYW1lICE9ICcnICYmIC9eXFxkKyQvLnRlc3QodGhpcy5teXNlbGYuYWdlKSl7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdWJtaXQoKXtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLm15c2VsZilcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
