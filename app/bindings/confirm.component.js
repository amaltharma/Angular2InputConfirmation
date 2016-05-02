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
    var ConfirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.confirmed = new core_1.EventEmitter();
                }
                ConfirmComponent.prototype.onKeyUp = function () {
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
                ConfirmComponent.prototype.onConfirm = function () {
                    this.confirmed.emit(this.myself);
                };
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'my-confirm',
                        template: "\n    <h1>You Submitted the follwong details.Is this correct?</h1>\n    <p>Your name is \n    <span class=\"highlight\">{{myself.name}}</span>\n    and you are \n    <span class=\"highlight\">{{myself.age}}</span> \n     years old. Please click on 'Confirm' if you have made any changes to this information.\n    </p>\n   <div>\n        <label for=\"name\">Your Name</label>\n        <input type=\"text\" id=\"name\" [(ngModel)] = \"myself.name\" (keyup) = \"onKeyUp()\">\n      </div>\n      <div>\n         <label for=\"age\">Your Age</label>\n         <input type=\"text\" id=\"age\" [(ngModel)] = \"myself.age\" (keyup) = \"onKeyUp()\">\n      </div>\n      <br>\n      <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n      <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n      <button [disabled]=\"!isValid\" (click)=\"onConfirm()\">Confirm</button>\n    ",
                        inputs: ['myself'],
                        outputs: ['confirmed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNEJBO2dCQUFBO29CQUNJLFdBQU0sR0FBRyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUM1QixhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNoQixjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUE2QixDQUFDO2dCQWlCOUQsQ0FBQztnQkFoQkcsa0NBQU8sR0FBUDtvQkFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQzt3QkFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3pCLENBQUM7b0JBQUEsSUFBSSxDQUFBLENBQUM7d0JBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUN4QixDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUN6QixDQUFDO2dCQUNMLENBQUM7Z0JBQ0Qsb0NBQVMsR0FBVDtvQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBOUNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBQyxnMkJBb0JSO3dCQUNELE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFDbEIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUN6QixDQUFDOztvQ0FBQTtnQkFzQkYsdUJBQUM7WUFBRCxDQXJCQSxBQXFCQyxJQUFBO1lBckJELCtDQXFCQyxDQUFBIiwiZmlsZSI6ImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktY29uZmlybScsXG4gICAgdGVtcGxhdGU6YFxuICAgIDxoMT5Zb3UgU3VibWl0dGVkIHRoZSBmb2xsd29uZyBkZXRhaWxzLklzIHRoaXMgY29ycmVjdD88L2gxPlxuICAgIDxwPllvdXIgbmFtZSBpcyBcbiAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPnt7bXlzZWxmLm5hbWV9fTwvc3Bhbj5cbiAgICBhbmQgeW91IGFyZSBcbiAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPnt7bXlzZWxmLmFnZX19PC9zcGFuPiBcbiAgICAgeWVhcnMgb2xkLiBQbGVhc2UgY2xpY2sgb24gJ0NvbmZpcm0nIGlmIHlvdSBoYXZlIG1hZGUgYW55IGNoYW5nZXMgdG8gdGhpcyBpbmZvcm1hdGlvbi5cbiAgICA8L3A+XG4gICA8ZGl2PlxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPllvdXIgTmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIFsobmdNb2RlbCldID0gXCJteXNlbGYubmFtZVwiIChrZXl1cCkgPSBcIm9uS2V5VXAoKVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICAgPGxhYmVsIGZvcj1cImFnZVwiPllvdXIgQWdlPC9sYWJlbD5cbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWdlXCIgWyhuZ01vZGVsKV0gPSBcIm15c2VsZi5hZ2VcIiAoa2V5dXApID0gXCJvbktleVVwKClcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJyPlxuICAgICAgPGRpdj5GaWxsZWQgb3V0OiB7e2lzRmlsbGVkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbiAgICAgIDxkaXY+VmFsaWQ6IHt7aXNWYWxpZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvbkNvbmZpcm0oKVwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICBgLFxuICAgIGlucHV0czogWydteXNlbGYnXSxcbiAgICBvdXRwdXRzOiBbJ2NvbmZpcm1lZCddXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1Db21wb25lbnR7XG4gICAgbXlzZWxmID0ge25hbWU6JycsIGFnZTogJyd9O1xuICAgIGlzRmlsbGVkID0gZmFsc2U7XG4gICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIGNvbmZpcm1lZCA9IG5ldyBFdmVudEVtaXR0ZXI8e25hbWU6c3RyaW5nLCBhZ2U6c3RyaW5nfT4oKTtcbiAgICBvbktleVVwKCl7XG4gICAgICAgIGlmKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgdGhpcy5teXNlbGYuYWdlICE9ICcnKXtcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgL15cXGQrJC8udGVzdCh0aGlzLm15c2VsZi5hZ2UpKXtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Db25maXJtKCl7XG4gICAgICAgIHRoaXMuY29uZmlybWVkLmVtaXQodGhpcy5teXNlbGYpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
