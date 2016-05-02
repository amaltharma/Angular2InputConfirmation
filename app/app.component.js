System.register(['angular2/core', './bindings/input.component', './bindings/confirm.component'], function(exports_1, context_1) {
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
    var core_1, input_component_1, confirm_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (confirm_component_1_1) {
                confirm_component_1 = confirm_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.myself = { name: '', age: '' };
                    this.confirmedMySelf = { name: '', age: '' };
                }
                AppComponent.prototype.onSubmit = function (myself) {
                    this.myself = { name: myself.name, age: myself.age };
                };
                AppComponent.prototype.onConfirm = function (confirmedMySelf) {
                    this.confirmedMySelf = { name: confirmedMySelf.name, age: confirmedMySelf.age };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n      <div class=\"container\">\n       <my-input (submitted)=\"onSubmit($event)\" [myself]=\"confirmedMySelf\"></my-input>\n      </div>\n      <div class=\"container\">\n       <my-confirm (confirmed)=\"onConfirm($event)\" [myself]=\"myself\"></my-confirm>\n      </div>\n    ",
                        directives: [input_component_1.InputComponent, confirm_component_1.ConfirmComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7b0JBQ0MsV0FBTSxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUM7b0JBQzVCLG9CQUFlLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQTtnQkFVdEMsQ0FBQztnQkFQRywrQkFBUSxHQUFSLFVBQVMsTUFBbUM7b0JBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELGdDQUFTLEdBQVQsVUFBVSxlQUE0QztvQkFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFDLElBQUksRUFBRSxlQUFlLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxlQUFlLENBQUMsR0FBRyxFQUFDLENBQUM7Z0JBQ2xGLENBQUM7Z0JBdkJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsUUFBUSxFQUFFLDBSQU9UO3dCQUNELFVBQVUsRUFBQyxDQUFDLGdDQUFjLEVBQUUsb0NBQWdCLENBQUM7cUJBQ2hELENBQUM7O2dDQUFBO2dCQWFGLG1CQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCx1Q0FZQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0lucHV0Q29tcG9uZW50fSBmcm9tICcuL2JpbmRpbmdzL2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbmZpcm1Db21wb25lbnR9IGZyb20gJy4vYmluZGluZ3MvY29uZmlybS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICA8bXktaW5wdXQgKHN1Ym1pdHRlZCk9XCJvblN1Ym1pdCgkZXZlbnQpXCIgW215c2VsZl09XCJjb25maXJtZWRNeVNlbGZcIj48L215LWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgPG15LWNvbmZpcm0gKGNvbmZpcm1lZCk9XCJvbkNvbmZpcm0oJGV2ZW50KVwiIFtteXNlbGZdPVwibXlzZWxmXCI+PC9teS1jb25maXJtPlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOltJbnB1dENvbXBvbmVudCwgQ29uZmlybUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiBteXNlbGYgPSB7bmFtZTonJywgYWdlOiAnJ307XG4gY29uZmlybWVkTXlTZWxmID0ge25hbWU6ICcnLCBhZ2U6ICcnfVxuXG5cbiAgICBvblN1Ym1pdChteXNlbGY6IHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfSl7XG4gICAgICAgIHRoaXMubXlzZWxmID0ge25hbWU6IG15c2VsZi5uYW1lLCBhZ2U6IG15c2VsZi5hZ2V9O1xuICAgIH1cblxuICAgIG9uQ29uZmlybShjb25maXJtZWRNeVNlbGY6IHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfSl7XG4gICAgICAgIHRoaXMuY29uZmlybWVkTXlTZWxmID0ge25hbWU6IGNvbmZpcm1lZE15U2VsZi5uYW1lLCBhZ2U6IGNvbmZpcm1lZE15U2VsZi5hZ2V9O1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
