import {Component} from 'angular2/core';
import {InputComponent} from './bindings/input.component';
import {ConfirmComponent} from './bindings/confirm.component';

@Component({
    selector: 'app',
    template: `
      <div class="container">
       <my-input (submitted)="onSubmit($event)" [myself]="confirmedMySelf"></my-input>
      </div>
      <div class="container">
       <my-confirm (confirmed)="onConfirm($event)" [myself]="myself"></my-confirm>
      </div>
    `,
    directives:[InputComponent, ConfirmComponent]
})
export class AppComponent {
 myself = {name:'', age: ''};
 confirmedMySelf = {name: '', age: ''}


    onSubmit(myself: {name: string, age: string}){
        this.myself = {name: myself.name, age: myself.age};
    }

    onConfirm(confirmedMySelf: {name: string, age: string}){
        this.confirmedMySelf = {name: confirmedMySelf.name, age: confirmedMySelf.age};
    }
}
